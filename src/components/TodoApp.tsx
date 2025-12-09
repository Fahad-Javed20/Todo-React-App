import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEdit = (index: number, newText: string) => {
    const newTodos = [...todos];
    newTodos[index] = newText;
    setTodos(newTodos);
  };

  const handelTodo = (data: string) => {
    setTodos([...todos, data]);
  };
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <TodoForm onAddTodo={handelTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />{" "}
    </div>
  );
};

export default TodoApp;
