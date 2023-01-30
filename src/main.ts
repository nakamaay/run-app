import path from 'node:path';
import { BrowserWindow, app, ipcMain } from 'electron';
import { IpcKeys } from './ipc';

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('dist/index.html');
  // mainWindow.webContents.openDevTools({ mode: 'detach' });
  ipcMain.handle(IpcKeys.AAA, (event, arg: string) => {
    console.log("RECEIVE AAA", arg)
    return `BBB${arg}`
  })
  ipcMain.handle(IpcKeys.Time, (event, arg: string) => {
    console.log(arg)
  })
  // ipcMain.emit("BBB")
});

app.once('window-all-closed', () => app.quit());

