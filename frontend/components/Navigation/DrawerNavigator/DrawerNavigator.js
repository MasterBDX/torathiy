import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    StyleSheet, View,
    TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { mainAppColor } from '../../Constants/Colors';

import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import Logout from '../../Auth/Logout/Logout';

import MyTabNavigator from '../TabNavigator/TabNavigator';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={
                {
                    headerShown: false,
                    headerRight: ({ tintColor }) => (
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingRight: 15 }}>
                            <TouchableOpacity
                                onPress={() => console.log('Hey im centered')}
                            >
                                <Feather name="bookmark" size={22} color={tintColor} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRightContainerStyle: styles.headerRightContainer,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerTitle,
                    headerTintColor: "#414141"
                }
            } >
            <Drawer.Screen name="Home" component={MyTabNavigator}
                options={{
                    headerShown: true
                }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>

    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: mainAppColor,
        fontWeight: '700'
    },
    headerRightContainer: {
    }
})
