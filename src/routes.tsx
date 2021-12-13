import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './styles/colors';

import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import  {Login}  from './pages/Login/Login';
const { Navigator, Screen } = createBottomTabNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>

  <Navigator
        initialRouteName="Login"
    tabBarOptions={{
      // evitando que o tab bar fique em cima do input
      keyboardHidesTabBar: true,

      style: {
        height: 60,
        backgroundColor: colors.primary,
        borderTopWidth: 0,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'roboto_400',
        fontSize: 11,
        marginTop: 5,
      },
      inactiveTintColor: colors.black,
      activeTintColor: colors.purple,
    }}
  >
    <Screen
      name="Following"
      component={Following}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          );
        },
      }}
    />
    <Screen
      name="Discover"
      component={ComingSoon}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons
              name="compass-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          );
        },
      }}
    />
    <Screen
      name="Login"
      component={Login}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons
              name="person-circle-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          );
        },
      }}
    />
    <Screen
    
      name="Esports"
      component={ComingSoon}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <MaterialCommunityIcons
              name="trophy-outline"
              size={size}
              color={focused ? colors.purple : colors.black}
            />
          );
        },
      }}
    />
 
  </Navigator>
</NavigationContainer>
);

export default Routes;
