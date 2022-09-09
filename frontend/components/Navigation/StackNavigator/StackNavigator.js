import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';

import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import AntiqueDetailScreen from '../../screens/AntiqueDetail/AntiqueDetail';
import CameraScreen from '../../screens/CameraScreen/CameraScreen';

import { mainAppColor } from '../../Constants/Colors';

const Stack = createStackNavigator();

const MyStack = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="AntiqueDetail"
            screenOptions={{
                headerRightContainerStyle: styles.headerRightContainer,
                headerTitleAlign: 'center',
                headerTitleStyle: styles.headerTitle,
                headerTintColor: "#414141",

            }}>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Camera" component={CameraScreen}
                    options={{
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
                    }} />
            <Stack.Screen name="AntiqueDetail" component={AntiqueDetailScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        color: mainAppColor,
        fontWeight: '700'
    }
})

export default MyStack;