import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Connection from '../views/Connection';

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Connexion" component={Connection} options={{ header: () => null }} />
    </AuthStack.Navigator>
);