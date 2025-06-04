import { useUser } from '@clerk/clerk-react';

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Please sign in to continue</h1>
        <div className="clerk-sign-in-button" />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
