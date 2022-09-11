import { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
    View, StyleSheet,
    Alert, Text,
    TouchableOpacity
} from 'react-native';

import {

    PermissionStatus,
    getCameraPermissionsAsync,
    getMediaLibraryPermissionsAsync,
    requestCameraPermissionsAsync,
    requestMediaLibraryPermissionsAsync,
    launchCameraAsync,
    launchImageLibraryAsync

} from 'expo-image-picker';


import { AntDesign } from '@expo/vector-icons';


import axios from '../../myAxios/axios';


import Spinner from '../../Custom/Spinner/Spinner';
import { mainAppColor } from '../../Constants/Colors';


const CameraScreen = () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(false);

    // Verify and Request Camera Permissions
    const permissionsVerify = async (getPerm, requestPerm) => {
        const { granted, status } = await getPerm();

        if (status == PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPerm()
            return permissionResponse.granted
        }

        if (status == PermissionStatus.DENIED) {
            Alert.alert('Insufficiant Permissions',
                'You need to grant camera permissions to use this app',
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "Ask For Permissions", onPress: async () => {
                            const permissionResponse = await requestPerm()
                            return permissionResponse.granted;
                        }
                    }
                ]);
            return false

        }
        return true
    }

    // Lunch Camera to pick image
    const pickImage = async (getPerm, requestPerm, lunchFunc) => {
        setLoading(true);
        const havePermission = await permissionsVerify(getPerm, requestPerm);
        if (!havePermission) {
            return;
        }
        let result = await lunchFunc({
            aspect: [16, 9],
            quality: 1,
        });


        if (!result.cancelled) {
            let localUri = result.uri;
            let filename = localUri.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            const formData = new FormData();

            formData.append('image', {
                name: filename,
                type: type,
                uri: localUri
            })

            const res = await axios.post('images/upload/', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            navigate('AntiqueDetail', { ...res.data });
            setLoading(false);
        } else {
            setLoading(false);
        }
    };

    if (loading) {
        return (<Spinner size={'large'} color={mainAppColor} />)
    }

    return (<View style={styles.container}>
        <TouchableOpacity onPress={() => pickImage(getCameraPermissionsAsync, requestCameraPermissionsAsync, launchCameraAsync)} activeOpacity={.5} style={styles.cameraIconCon}>
            <AntDesign name="camerao" size={30} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pickImage(getMediaLibraryPermissionsAsync, requestMediaLibraryPermissionsAsync, launchImageLibraryAsync)} activeOpacity={.5} style={styles.cameraIconCon}>
            <AntDesign name="upload" size={30} color={"#fff"} />
        </TouchableOpacity>

    </View>)
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    cameraIconCon: {
        marginTop: 20,
        backgroundColor: mainAppColor,
        borderRadius: 4,
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 5,
    },
    text: {
        marginBottom: 15,
        fontFamily: 'cairoBold',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#414141'
    }

})


export default CameraScreen;