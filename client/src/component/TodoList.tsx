import { Todotypes } from "../types/type"
import TodoItem from "./TodoItem";


interface TodoListProps{
todos:Todotypes[];
onCompletedChange:(id:number,completed:boolean) => void;
onDelete: (id:number) => void;
}

export default function TodoList (
  {
    todos,
    onCompletedChange,
    onDelete}:TodoListProps){

      const todoSorted = todos.sort((a,b) =>{
        if(a.completed === b.completed){
          return b.id - a.id
        }
        return a.completed ? 1: -1;
      })

  return(
    <>
    <div className="space-y-2">
    {todoSorted.map((todo) =>(
     <TodoItem
      key={todo.id}
      todo={todo}
      onCompletedChange={onCompletedChange}
      onDelete={onDelete}
      />
    ))}
  </div>
 {todos.length === 0 && (
  <p className="text-centre text-sm">
    No todos yet,Add a new one 
  </p>
 )}
  </>
  );
}

