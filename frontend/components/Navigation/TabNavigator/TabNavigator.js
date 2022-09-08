import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    FontAwesome5, Octicons,
    Feather, AntDesign
} from '@expo/vector-icons';


import FavoriteScreen from '../../screens/FavoriteScreen/FavoriteScreen';
import MapScreen from '../../screens/MapScreen/MapScreen';
import SuggestionScreen from '../../screens/EventsScreen/EventsScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

import MyStack from '../StackNavigator/StackNavigator';
import { mainAppColor } from '../../Constants/Colors';

const Tab = createBottomTabNavigator();

export default function MyTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="HomeTab"
            screenOptions={{
                tabBarActiveTintColor: mainAppColor,
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,

            }}>
            <Tab.Screen name="Favorite" component={FavoriteScreen}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="user" size={size} color={color} />
                        )
                    }
                }

            />

            <Tab.Screen name="Suggestion" component={SuggestionScreen}

                options={

                    {

                        tabBarIcon: ({ color, size }) => (
                            <Octicons name="calendar" size={size} color={color} />
                        )
                    }
                }
            />
            <Tab.Screen name="MyStack" component={MyStack}
                options={
                    {
                        tabBarItemStyle: styles.cameraTabBarIcon,
                        title: "Camera",
                        tabBarIcon: ({ color, size }) => (
                            <View style={styles.cameraTabBarIconCon}>
                                <AntDesign name="camerao" size={34} color={"#fff"} />
                            </View>
                        )
                    }
                }
            />


            <Tab.Screen name="Map" component={MapScreen}
                options={
                    {
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="map" size={size} color={color} />
                        )
                    }
                } />
            <Tab.Screen name="HomeTab" component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="home" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabBarStyle: {
        height: 60,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 0,
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    cameraTabBarIconCon: {
        backgroundColor: mainAppColor,
        borderRadius: 50,
        width: 70,
        height: 70,
        borderColor: '#fff',
        borderWidth: 7,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 5,
    }
})