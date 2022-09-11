import { useState, useEffect } from 'react';

import MapView, { Marker } from 'react-native-maps';

import {
    StyleSheet, TouchableWithoutFeedback,
    View, Dimensions, SafeAreaView, Alert
} from 'react-native';

import myAxios from '../../myAxios/axios';

import { MaterialIcons } from '@expo/vector-icons';

import Spinner from '../../Custom/Spinner/Spinner';

import { mainAppColor } from '../../Constants/Colors';

import Ruin from '../../../assets/ruin.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import {
    useForegroundPermissions,
    PermissionStatus,
    getCurrentPositionAsync,
} from 'expo-location';

const MapScreen = () => {
    const [permissionStatus, requestPermissions] = useForegroundPermissions();
    const [userLocation, setUserLocation] = useState(null);
    const [locations, setLocations] = useState(null);
    const [loading, setLoading] = useState(true);

    const verifyPermissions = async () => {
        if (permissionStatus.status == PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermissions();
            return permissionResponse.granted
        }

        if (permissionStatus.status == PermissionStatus.DENIED) {
            Alert.alert('Insufficiant Permissions',
                'You need to grant location permissions to use this app',
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "Ask For Permissions", onPress: async () => {
                            const permissionResponse = await requestPermissions()
                            return permissionResponse.granted;
                        }
                    }
                ]);
            return false;
        }
        return true;
    }

    const getUserLocation = async () => {
        const havePermission = await verifyPermissions();

        if (!havePermission) {
            return;
        }
        const location = await getCurrentPositionAsync();

        setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });
    }

    let myLocationCord = {
        latitude: 32.885964,
        longitude: 13.183701
    }
    let Mark = null;

    if (userLocation) {
        myLocationCord = userLocation;
        console.log(myLocationCord)
        Mark = <Marker
            key={Math.random(1) + myLocationCord.latitude}
            coordinate={{
                latitude: myLocationCord.latitude,
                longitude: myLocationCord.longitude,
            }}
            
            title={"My Location"}
            description={'This is your current location'}
            pinColor={'skyblue'}
        />
    }
    useEffect(() => {
        const fetchLocation = async () => {
            const res = await myAxios.get('antiques/locations/');
            setLocations(res.data);
            setLoading(false)
        }
        fetchLocation();
    }, [])

    if (loading) {
        return (<Spinner size={'large'} color={mainAppColor} />)
    }

    return (<SafeAreaView style={styles.container}>
        <MapView style={styles.map}
            initialRegion={{
                latitude: myLocationCord.latitude,
                longitude: myLocationCord.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            
            region={{
                latitude: myLocationCord.latitude,
                longitude: myLocationCord.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
            {Mark}
            {locations.map((item, index) => {
                return (<Marker
                    key={item.id}
                    coordinate={{
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude),
                    }}
                    title={item.name}
                    description={item.description}
                    pinColor={'orange'}
                />)
            })}
        </MapView>
        <TouchableWithoutFeedback onPress={() => getUserLocation()}>
            <View style={styles.button}>
                <MaterialIcons name="my-location" size={30} color={mainAppColor} />
            </View>
        </TouchableWithoutFeedback>
    </SafeAreaView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    button: {
        backgroundColor: '#41414199',
        position: 'absolute',
        bottom: HEIGHT / 13,
        right: 40,
        padding: 8,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 3
    }
})



