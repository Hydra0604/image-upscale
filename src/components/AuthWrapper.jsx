import { ClerkProvider } from '@clerk/clerk-react';

const AuthWrapper = ({ children }) => {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
};

export default AuthWrapper;
