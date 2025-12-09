interface TodoListProps {
  id?: number;
  todo: string[];
}

const TodoList = ({ todo }: TodoListProps) => {
  return (
    <div className="mt-5 w-3/5 mx-auto">
        {todo.map((item, index) => (
          <p
            key={index} 
            className="border w-full border-gray-300 rounded-lg p-3 mb-2 bg-white shadow-sm"
          >
            {item}
          </p>
        ))
};
    </div>
  )
}

export default TodoList;
