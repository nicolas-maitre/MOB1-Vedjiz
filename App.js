
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackScreen } from './components/StackScreens';
import { DrawerScreen } from './components/DrawerScreens';

import Splash from './views/Splash';
import { AuthContext } from './components/Context';
import {isEmpty, ip, port} from './components/Helpers';
import { Alert } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {

    return {
      userToken,
      signIn: async (token) => {
        try{
          setIsLoading(true)
          var res = await axios.get(`http://${ip}:${port}/api/me`, {headers: { Authorization: `Bearer ${token}` }})
          setIsLoading(false)
          setUserToken(token)
          // await AsyncStorage.setItem('@storage_Key', value)
        }
        catch(e)
        {
          console.log(e.message);
        }
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

