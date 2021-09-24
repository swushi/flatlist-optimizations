import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Home from "../screens/Home";
import MonoStateUpdateList from "../screens/MonoStateUpdateList";
import SwrDemo from "../screens/SwrDemo";

type RootStackParamList = {
  Home: undefined;

  StatelessList: undefined;
  MonoStateUpdateList: undefined;

  SwrDemo: undefined;
};

export type UseNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="StatelessList"
          component={MonoStateUpdateList}
        />
        <RootStack.Screen
          name="MonoStateUpdateList"
          component={MonoStateUpdateList}
        />
        <RootStack.Screen
          name="SwrDemo"
          component={SwrDemo}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
