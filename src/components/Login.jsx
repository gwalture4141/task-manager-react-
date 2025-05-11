import { useAuth } from '../context/AuthContext';
import { signInWithPopup } from '../firebase';
import { auth, provider } from '../firebase';
export const Login = () => {
  const { currentUser } = useAuth();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  if (currentUser) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Welcome to Todo App</h1>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Please sign in to manage your tasks
        </p>
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.667-4.167-2.698-6.735-2.698-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.768-0.081-1.526-0.219-2.266h-9.781z" />
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};