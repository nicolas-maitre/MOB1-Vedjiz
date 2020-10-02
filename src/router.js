import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen } from './components/StackScreens';
import { DrawerScreen } from './components/DrawerScreens';

import Splash from './views/Splash';
import { AuthContext } from './components/Context';
import {isEmpty} from './components/Helpers';
import AsyncStorage from '@react-native-community/async-storage';


export default function Router() {
    const { userToken, isLoading, signIn } = React.useContext(AuthContext);


    const {  } = React.useContext(AuthContext);

    React.useEffect(() => {
        async function fetchData()
        {
            const value = await AsyncStorage.getItem('user_token');
            if (!isEmpty(value)) {
                signIn(value);
            }
        }
        fetchData()
    }, [])

    if (isLoading) {
      return <Splash />;
    }
  
    return (
        <NavigationContainer>
          {isEmpty(userToken) ? (
            <AuthStackScreen />
          ) : (
              <DrawerScreen />
            )}
        </NavigationContainer>
    );
  }
  
  