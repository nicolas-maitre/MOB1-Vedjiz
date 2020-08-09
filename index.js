/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomePage from './views/HomePage';
import List from './views/ListOfProducts';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => List);
