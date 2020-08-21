
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DetailProduct from '../views/DetailProduct';
import List from '../views/ListOfProducts';
import Connection from '../views/Connection';

const ListOfProductsStack = createStackNavigator();
const ListOfProductsStackScreen = () => (
    <ListOfProductsStack.Navigator>
        <ListOfProductsStack.Screen name="Magasin" component={List} options={{ title: "Magasin" }} />
        <ListOfProductsStack.Screen name="DetailProduct" component={DetailProduct} options={({ route }) => ({ title: route.params.product.name })} />
    </ListOfProductsStack.Navigator>
);
const Drawer = createDrawerNavigator();
export const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Magasin">
        <Drawer.Screen name="Profil" component={Connection} options={{ animationEnabled: false }} />
        <Drawer.Screen name="Magasin" component={ListOfProductsStackScreen} />
    </Drawer.Navigator>
);