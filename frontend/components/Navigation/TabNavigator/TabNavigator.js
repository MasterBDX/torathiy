import * as React from 'react';

import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    return (
        <Tab.Navigator initialRouteName="HomeTab"
            screenOptions={{
                tabBarActiveTintColor: mainAppColor,
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerRight: ({ tintColor }) => (
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingRight: 15 }}>
                        <TouchableOpacity
                            onPress={() => console.log('Hey im centered')}
                        >
                            <Feather name="bookmark" size={22} color={tintColor} />
                        </TouchableOpacity>
                    </View>
                ),
                headerLeft: ({ tintColor }) => (
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingLeft: 15 }}>
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                        >
                            <Feather name="menu" size={22} color={tintColor} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRightContainerStyle: styles.headerRightContainer,
                headerTitleAlign: 'center',
                headerTitleStyle: styles.headerTitle,
                headerTintColor: "#414141"

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
                        headerShown:false,
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
    },
    headerTitle: {
        color: mainAppColor,
        fontWeight: '700'
    },
})