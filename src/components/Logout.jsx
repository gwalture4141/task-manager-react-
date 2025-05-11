import { useAuth } from '../context/AuthContext';
import { auth,signOut } from '../firebase';

export const Logout = () => {
  const { currentUser } = useAuth();
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <button
      onClick={handleLogout}
      className="absolute top-4 right-20 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Logout
    </button>
  );
};