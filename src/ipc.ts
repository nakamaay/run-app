declare global {
    interface Window {
        api: Api
    }
}

export enum IpcKeys {
    AAA = "AAA",
    BBB = "BBB",
    Time = "Time"
}

export type Api = {
    sendMessage: (arg: string) => Promise<string>
    sendTime: (arg: string) => Promise<string>
    onUpdateMessage: (listener: (message: string) => void) => void
}