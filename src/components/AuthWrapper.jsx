import { ClerkProvider } from '@clerk/clerk-react';

const AuthWrapper = ({ children }) => {
  const publishableKey = import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
};

export default AuthWrapper;
