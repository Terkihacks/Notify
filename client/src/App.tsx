import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import useTodos from "./hooks/useTodos";


function App () {
  const{
    todos,
    setTodoCompleted,
    addTodoItem,
    deleteTodo,
  } = useTodos();
 
  return (
   <main className="py-10 h-screen bg-red-50 space-y-5 overflow-y-auto">
    <h1 className="font-bold text-4xl text-center">Notify</h1>
    <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
      <TodoForm onSubmit={addTodoItem}  />
      <TodoList
      todos={todos}
      onCompletedChange={setTodoCompleted}
      onDelete={deleteTodo}
      />
  
    </div>
   </main>
 
  )
}

export default App
