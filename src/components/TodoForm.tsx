import { useForm } from "react-hook-form";

interface TodoFormProps {
  onAddTodo: (data: string) => void;
}

type TodoType = {
  todo: string;
};

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoType>();

  const onSubmit = (data: TodoType) => {
    onAddTodo(data.todo);
    reset();
  };

  return (
    <div className="mt-10">
      <h1 className="bg-amber-900 text-white text-3xl font-bold px-10 py-6 
                     rounded-lg w-1/2 mx-auto text-center shadow-lg">
        Todo App
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-3 mt-5 w-full justify-center"
      >
        <input
          type="text"
          {...register("todo", { required: "Todo is required" })}
          placeholder="Enter todo..."
          className="border border-gray-400 rounded-lg px-4 py-2 w-1/2"
        />

        <button
          type="submit"
          className="bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800"
        >
          Add
        </button>
      </form>

      {errors.todo && (
        <p className="text-red-500 text-sm text-center mt-2">
          {errors.todo.message}
        </p>
      )}
    </div>
  );
};

export default TodoForm;
