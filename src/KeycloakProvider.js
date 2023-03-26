import React, { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import { keycloakConfig } from './config';

const KeycloakContext = React.createContext();

export const KeycloakProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [initialized, setInitialized] = useState(true); // Change this line

  const login = async () => {
    if (!keycloak) {
      setInitialized(false);
      const instance = Keycloak(keycloakConfig);
      const authenticated = await instance.init({ onLoad: 'check-sso' });
      if (authenticated) {
        instance.loadUserInfo().then((userInfo) => {
          setKeycloak({ ...instance, userInfo });
        });
      } else {
        setKeycloak(instance);
      }
      setInitialized(true);
    }
    keycloak.login();
  };

  return (
    <KeycloakContext.Provider value={{ keycloak, login }}>
      {initialized ? children : <div>Loading...</div>}
    </KeycloakContext.Provider>
  );
};

export const useKeycloak = () => {
  const context = React.useContext(KeycloakContext);
  if (!context) {
    throw new Error('useKeycloak must be used within a KeycloakProvider');
  }
  return context;
};