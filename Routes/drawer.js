import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import SignUpStack from './signUpStack';



const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="sign Up" component={SignUpStack} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}








 