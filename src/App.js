import { KeycloakProvider } from './KeycloakProvider';
import HomePage from './HomePage';

function App() {
  return (
    <KeycloakProvider>
      <HomePage />
    </KeycloakProvider>
  );
}

export default App;
