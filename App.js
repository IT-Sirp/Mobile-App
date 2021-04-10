import * as React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import LinearGradient from "react-native-linear-gradient";
 
//import { Fonts, Metrics, Colors } from "./Themes/";
//import HomeStack from './Routes/homeStack';
import AppDrawer from './Routes/drawer'

 
export default function App (){
  return(
    <View style={styles.container}>

<AppDrawer/>
     </View>
  )
}

 
const styles = StyleSheet.create ({

       container: {
        flex:1,
 
      },
      
})