import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import fonts from '../../../config/fonts';
import { DashboardScreen } from '../../../../screens/DashboardScreen';
import { ProfileScreen } from '../../../../screens/ProfileScreen';
import { OrderScreen } from '../../../../screens/OrderScreen';
import { OrderDetailsScreen } from '../../../../screens/OrderDetailsScreen';
import { UpdateProfileScreen } from '../../../../screens/UpdateProfileScreen';
import { ChangePasswordScreen } from '../../../../screens/ChangePasswordScreen';

import Grid from '../../../../assets/images/icons/grid.svg';
import ShoppingBag from '../../../../assets/images/icons/shopping-bag.svg';
import User from '../../../../assets/images/icons/user.svg';

const Tab = createBottomTabNavigator();
const OrderStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const OrderStackNavigator = () => (
  <OrderStack.Navigator
    initialRouteName="Order"
    screenOptions={{ headerShown: false }}>
    <OrderStack.Screen name="Order" component={OrderScreen} />
    <OrderStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
  </OrderStack.Navigator>
);

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator
    initialRouteName="Profile"
    screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    <ProfileStack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
    />
  </ProfileStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: '#aaaaaa',
      tabBarActiveTintColor: '#028a0f',
      tabBarStyle: { display: 'flex', height: 92, paddingVertical: 14 },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: fonts.bold,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 4,
      },
    }}>
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        tabBarLabel: 'Overview',
        tabBarIcon: ({ focused }) => (
          <Grid
            width={24}
            height={24}
            stroke={focused ? '#028a0f' : '#aaaaaa'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="OrderTab"
      component={OrderStackNavigator}
      options={({ route }) => ({
        tabBarStyle: {
          height: 92,
          paddingVertical: 14,
          display: getTabBarRoute(route),
        },
        tabBarLabel: 'Order',
        tabBarIcon: ({ focused }) => (
          <ShoppingBag
            width={24}
            height={24}
            stroke={focused ? '#028a0f' : '#aaaaaa'}
          />
        ),
      })}
    />
    <Tab.Screen
      name="ProfileTab"
      component={ProfileStackNavigator}
      options={({ route }) => ({
        tabBarStyle: {
          height: 92,
          paddingVertical: 14,
          display: getTabBarRoute(route),
        },
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
          <User
            width={26}
            height={26}
            stroke={focused ? '#028a0f' : '#aaaaaa'}
          />
        ),
      })}
    />
  </Tab.Navigator>
);

const getTabBarRoute = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (
    routeName === 'OrderDetails' ||
    routeName === 'UpdateProfile' ||
    routeName === 'ChangePassword'
  ) {
    return 'none';
  }
  return 'flex';
};

export const TabNavigate = () => {
  return <TabNavigator />;
};
