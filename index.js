
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import DatabaseComponent from './components/DatabaseComponent';


// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// AppRegistry.registerComponent(() => DatabaseComponent);
AppRegistry.registerComponent(appName, () => App);
