import { KeycloakProvider } from './KeycloakProvider';
import HomePage from './HomePage';

/**
 * This is a junky component.
 * @component
 */
function App() {
  return (
    <KeycloakProvider>
      <HomePage />
    </KeycloakProvider>
  );
}

export default App;
