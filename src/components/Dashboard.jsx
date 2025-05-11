import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Dashboard</h1>
        {currentUser && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img 
                src={currentUser.photoURL} 
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {currentUser.displayName}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{currentUser.email}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                Your Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200">Total Tasks</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">24</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                  <p className="text-green-800 dark:text-green-200">Completed</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-300">15</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">9</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}