import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
let lap_num: number; 
const lap: any[] = []

/** フォームの各要素の名前と型を定義 */
type FormData = {
  time: string
}
/** Submit ボタンを押したときの処理 */
const onSubmit: SubmitHandler<FormData> = (data: any) => {
  // data には FormData 型の値が入っている
  alert(JSON.stringify(data, null, 2));
  window.api.sendTime(data)
}



const Add: FC = () => {
  function add_lap() {
    console.log("test")
    lap.push(<div><form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('time')} placeholder="hh:mm:ss" />
      <button type="submit">OK</button>
    </form></div>)
  }
  const { handleSubmit, register } = useForm<FormData>();


  window.api.sendMessage("CCC").then((value) => {
    console.log("sendMessage Response", value)
  })
  

  console.log("test")
  return (
    <div>
      {lap}
      <button onClick={add_lap}>追加</button>

    </div>
  )
}
/*
<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <input type="number" {...register('age')} placeholder="Age" />
      <button type="submit">OK</button>
    </form>
*/

export default Add