import { ClerkProvider } from '@clerk/clerk-react';

const AuthWrapper = ({ children }) => {
  const publishableKey = 'pk_test_ZGl2ZXJzZS1ib2FyLTY3LmNsZXJrLmFjY291bnRzLmRldiQ';

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
};

export default AuthWrapper;
