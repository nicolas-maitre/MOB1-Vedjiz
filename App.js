
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//routes
import DetailProduct from './views/DetailProduct';
import HomePage from './views/HomePage';
import List from './views/ListOfProducts';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Magasin">
          <Stack.Screen name="Connexion" component={HomePage} />
          <Stack.Screen name="Magasin" component={List} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} options={({ route }) => ({ title: route.params.product.name })}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}