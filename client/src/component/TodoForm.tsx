import { useState } from "react";
interface  TodoFormProps{
  onSubmit:(tittle:string) => void;
}
export default function TodoForm  ({onSubmit}:TodoFormProps) {

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!input.trim ()) return;
    onSubmit(input)
    setInput("");
  }
  //Turn our input as controlled input 
 const [input,setInput] = useState("")
  return (
  <form className="flex" onSubmit={handleSubmit}>
    <input type="text"
    placeholder="What needs to be done?"
    className="rounded-s-md grow border border-gray-400 p-2 "
    onChange={(e) => setInput(e.target.value)}
    
    />
    <button
    className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
    >
      Add
    </button>
  </form>
  )
}
