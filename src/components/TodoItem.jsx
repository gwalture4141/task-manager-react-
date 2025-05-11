import { useState, useRef, useEffect } from 'react';

export const TodoItem = ({ todo, toggleTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (editText.trim() === '') return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
        />
        
        {isEditing ? (
          <input
            ref={editInputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            className="flex-1 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}
          >
            {todo.text}
          </span>
        )}
      </div>
      
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 text-red-500 hover:text-red-700 dark:hover:text-red-400"
      >
        Delete
      </button>
    </div>
  );
};