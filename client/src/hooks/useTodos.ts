import { useEffect, useState } from "react";
import { Todotypes } from "../types/type";
import { dummyData } from "../data/todos";
import{createTodo} from "../services/api"

export default function useTodos(){
    const[todos,setTodos]  = useState(()=>{
        const savedTodos:Todotypes[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData

      });
    
      useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
      },[todos])
    
      function setTodoCompleted (id:number,completed:boolean){
      setTodos((prevTodos) =>
         prevTodos.map((todo) =>(
          todo.id === id ? {...todo,completed} : todo))
    )}
    
    //  function addTodoItem(tittle:string){
    //   setTodos((prevTodos) =>
    //   [
    //     {
    //       id:Date.now(),
    //       tittle,
    //       completed:false,
    //     },
    //     ...prevTodos
    //   ]);
    // }
    async function addTodoItem(title:string){
        const newTodo = {
            title,
            completed:false,
        };

        try{
            const createdTodo = await createTodo(newTodo);
              // Update local state with the todo returned from the API, which includes the ID
              setTodos((prevTodos) => [
                {
                  id: createdTodo.id, // Use the ID from the database
                  title: createdTodo.title,
                  completed: createdTodo.completed,
                },
                ...prevTodos,
              ]);
              
    console.log('Todo created successfully:', createdTodo);

        } catch(error){
            console.log('Error creating todo:', error);
        }
    }
    
      function deleteTodo(id:number){
        //To delete we use filter
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
     }
     return{
        todos,
        setTodoCompleted,
        addTodoItem,
        deleteTodo,
     }
}