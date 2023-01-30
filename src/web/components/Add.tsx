import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const lap:any[] = []

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


function add() {
  const { handleSubmit, register } = useForm<FormData>();
  

  window.api.sendMessage("CCC").then((value)=> {
    console.log("sendMessage Response", value)
  })  

    lap.push(<div><h1>test</h1></div>)
  return (
    <div>
        {lap}
    </div>
  )
}

export default add