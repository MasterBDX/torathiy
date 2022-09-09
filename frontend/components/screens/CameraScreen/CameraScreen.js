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
    requestCameraPermissionsAsync,
    launchCameraAsync

} from 'expo-image-picker';


import { AntDesign } from '@expo/vector-icons';


import axios from '../../myAxios/axios';


import Spinner from '../../Custom/Spinner/Spinner';
import { mainAppColor } from '../../Constants/Colors';


const CameraScreen = () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(true);
    const [permStatus, setPermStatus] = useState(null)


    const permissionsVerify = async () => {
        const { granted, status } = await getCameraPermissionsAsync();

        if (status == PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestCameraPermissionsAsync()
            permissionResponse.granted ? setPermStatus('granted') : setPermStatus('denied');
            return permissionResponse.granted
        }

        if (status == PermissionStatus.DENIED) {
            setPermStatus('denied');

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
                            const permissionResponse = await requestCameraPermissionsAsync()
                            permissionResponse.granted ? setPermStatus("granted") : setPermStatus("denied");
                            return permissionResponse.granted;
                        }
                    }
                ]);
            return false

        }
        setPermStatus('granted');
        return true
    }

    const pickImage = async () => {
        const havePermission = await permissionsVerify();
        if (!havePermission) {
            setPermStatus('denied');
            return;
        }
        let result = await launchCameraAsync({
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
            console.log(res.data);
            navigate('AntiqueDetail',{...res.data});
        } else {
            setPermStatus("granted")
            setLoading(false);
        }
    };


    return (<View style={styles.container}>
        <Text style={styles.text}>
            إلتقاط المعلم
        </Text>
        <TouchableOpacity onPress={pickImage} activeOpacity={.5} style={styles.cameraIconCon}>
            <AntDesign name="camerao" size={24} color={"#fff"} />
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
        backgroundColor: mainAppColor,
        borderRadius: 4,
        width: 100,
        height: 35,
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