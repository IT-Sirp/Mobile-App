import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import SignUp from "../Screens/SignUp/index";

const Stack = createStackNavigator();

export default function SignUpStack() {
  return (
       <Stack.Navigator >
         <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
   );
};