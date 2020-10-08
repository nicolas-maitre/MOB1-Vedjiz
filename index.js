/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName, ip, port} from './app.json';
import axios from 'axios'

axios.defaults.baseURL = `http://${ip}:${port}/api`;
axios.defaults.timeout = 5000;
AppRegistry.registerComponent(appName, () => App);