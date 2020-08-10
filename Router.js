

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DetailProduct from './views/DetailProduct';
import HomePage from './views/HomePage';
import List from './views/ListOfProducts';

const AppNavigator = createStackNavigator({
    Home: HomePage,
    Products: List,
    DetailProduct: DetailProduct,
},
{
    initialRouteName: 'Home',
});

const Router = createAppContainer(AppNavigator);
export default Router;

