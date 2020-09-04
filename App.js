
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

import { NavigationContainer } from '@react-navigation/native';

import { AuthStackScreen } from './src/components/StackScreens';
import { DrawerScreen } from './src/components/DrawerScreens';

import Splash from './src/views/Splash';
import { AuthContext } from './src/components/Context';
import {isEmpty, ip, port} from './src/components/Helpers';
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
          setUserToken(token)
          // await AsyncStorage.setItem('@storage_Key', value)
        }
        catch(e)
        {
          Alert.alert("😵 Erreur de connexion","Une erreur est survenue lors de la connexion!\nMerci de vérifier votre token ou que vous ayez bien une connexion internet...")
        }
        finally
        {
          setIsLoading(false)
        }
      },
      signOut: () => {
        setUserToken(null),
        setIsLoading(false)
      },
      signUp: async (user) => {
        try{
          setIsLoading(true)          
          var res = await axios.post(`http://${ip}:${port}/api/user/apply`, {firstname: user.firstname, lastname: user.lastname, phonenumber: user.phonenumber})
          setUserToken(null)
          Alert.alert("👍 Inscription complétée","Vous recevrez votre token par message,\ncela peut prendre plusieurs jours, merci de bien vouloir patienter...")
        }
        catch(e)
        {
          console.log(e.message)
          Alert.alert("😓 Erreur d'inscription","Une erreur est survenue lors de la connexion\nVeuillez reéssayer plus tard s'il vous plaît...")
        }
        finally
        {
          setIsLoading(false)
        }
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

