import { useState } from "react";

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number, newText: string) => void;
}

const TodoList = ({ todos, onDelete, onEdit }: TodoListProps) => {
  const [checked, setChecked] = useState<boolean[]>(todos.map(() => false));
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleCheckbox = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = (index: number) => {
    if (editText.trim() !== "") {
      onEdit(index, editText);
    }
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div className="mt-5 w-3/5 mx-auto bg-gray-200 p-10">
      {todos.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border w-full border-gray-300 rounded-lg p-3 mb-2 bg-white shadow-sm"
        >
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => handleCheckbox(index)}
            className="mr-3"
          />

          {editingIndex === index ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 border rounded px-2 py-1 mr-3"
            />
          ) : (
            <span className={checked[index] ? "line-through flex-1" : "flex-1"}>
              {item}
            </span>
          )}

          <div className="flex gap-2">
            {editingIndex === index ? (
              <button
                onClick={() => saveEdit(index)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEditing(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => onDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;