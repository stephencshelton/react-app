import { KeycloakProvider } from './KeycloakProvider';
import HomePage from './HomePage';

/**
 * This is the main application component.
 * @component
 */
function App() {
  return (
    <KeycloakProvider>
      {/* 
        This component represents the homepage of the application.
        It displays various content and features to the user.
      */}
      <HomePage />

      {/* 
        This is a poorly written component that demonstrates insecure code.
        It uses the 'eval' function which is considered a security risk.
        Avoid using 'eval' in production code.
      */}
      <PoorlyWrittenComponent />
    </KeycloakProvider>
  );
}

export default App;
