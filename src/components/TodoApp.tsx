import Header from "./Header"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

const TodoApp = () => {

  const [todos, setTodos] = useState<string[]>([])

  const handelTodo = (data:string) =>{
setTodos([...todos, data])
  }
  return (
    <div className="flex flex-col gap-5">
        <Header />
        <TodoForm  onAddTodo = {handelTodo}/>
        <TodoList todo={todos} />
    </div>
  )
}

export default TodoApp