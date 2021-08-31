import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screnns/Preload";
import Login from "../screnns/Login";
import Logout from "../screnns/Logout";
import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);