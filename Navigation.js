import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

//routes
import DetailProduct from './views/DetailProduct';
import Connection from './views/Connection';
import List from './views/ListOfProducts';
import Splash from './views/Splash';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Connexion" component={Connection} options={{header: () => null}}/>
    </AuthStack.Navigator>
);
const ListOfProductsStack = createStackNavigator();
const ListOfProductsStackScreen = () => (
    <ListOfProductsStack.Navigator>
        <ListOfProductsStack.Screen name="Magasin" component={List} options={{ title: "Magasin" }} />
        <ListOfProductsStack.Screen name="DetailProduct" component={DetailProduct} options={({ route }) => ({ title: route.params.product.name })} />
    </ListOfProductsStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Magasin">
        <Drawer.Screen name="Profil" component={Connection} options={{ animationEnabled: false }} />
        <Drawer.Screen name="Magasin" component={ListOfProductsStackScreen} />
    </Drawer.Navigator>
);
export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => {
        return {
            SignIn: (token) => {
                setIsLoading(false);
                setUserToken(token);
            },
            SignOut: () => {
                setIsLoading(false);
                setUserToken(null);
            },
        }
    }, []);


    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    });

    if (isLoading) {
        return <Splash />;
    }

    return (
        <NavigationContainer>
            {userToken ? (
                <DrawerScreen />
            ): (
                <AuthStackScreen />
            )}
        </NavigationContainer>
    );
}