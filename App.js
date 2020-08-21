
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackScreen } from './components/StackScreens';
import { DrawerScreen } from './components/DrawerScreens';

import Splash from './views/Splash';
import { AuthContext } from './components/Context';
import {isEmpty} from './components/Helpers';
import { Alert } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: (token) => {
        setUserToken(token),
        setIsLoading(true)
      },
      signOut: () => {
        setUserToken(null),
        setIsLoading(false)
      },
      signUp: (user) => {
        setUserToken(null),
        setIsLoading(false),
        Alert.alert("SignUP", `Firstname: ${user.firstname}\nLastname: ${user.lastname}\nPhonenumber: ${user.phonenumber}`);
      },
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isEmpty(userToken) ? (
          <AuthStackScreen />
        ) : (
            <DrawerScreen />
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

