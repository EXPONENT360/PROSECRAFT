import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'login',
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'register',
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tabs>
  );
}
