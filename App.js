//import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './components/MainScreen'
import USBScreen from './components/USBScreen';
export default function App() {

  const Drawer = createDrawerNavigator()

  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='MainScreen'>
        <Drawer.Screen name='MainScreen' component={MainScreen}/>
        <Drawer.Screen name='USBScreen' component={USBScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
