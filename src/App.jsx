import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { TodoProvider, useTodos } from './context/TodoContext';
import { useAuth } from './context/AuthContext';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';
import { TodoItem } from './components/TodoItem';

const TodoApp = () => {
  const { currentUser } = useAuth();
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodo, filter, setFilter } = useTodos();

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Logout />
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          {currentUser.displayName}'s Todo App
        </h1>
        
        <TodoForm addTodo={addTodo} />
        <TodoFilter filter={filter} setFilter={setFilter} />
        
        <div className="bg-white rounded-lg shadow dark:bg-gray-800">
          {todos.length === 0 ? (
            <p className="p-4 text-center text-gray-500 dark:text-gray-400">
              {filter === 'all' 
                ? 'No tasks yet. Add one above!' 
                : filter === 'completed' 
                  ? 'No completed tasks' 
                  : 'No pending tasks'}
            </p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <TodoProvider>
            <Routes>
              <Route path="/" element={<TodoApp />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </TodoProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}