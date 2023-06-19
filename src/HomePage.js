import React from 'react';
import { useKeycloak } from './KeycloakProvider';
import './HomePage.css';

/**
 * This is a homepage component.
 * @component
 */
const HomePage = () => {
  const { keycloak, login } = useKeycloak();

  const handleLogin = () => {
    login();
  };

  return (
    <div className="home-page">
      <header className="header">
        <nav className="nav">
          <h1>My Website</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {!keycloak?.authenticated && (
              <li>
                <button className="login-button" onClick={handleLogin}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="overlay">
          <h2>Welcome to My Website</h2>
          {keycloak?.authenticated && (
            <p>Welcome, {keycloak.userInfo?.name}!</p>
          )}
        </div>
      </main>
      <footer className="footer">
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;