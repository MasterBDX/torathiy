import { useState, useEffect } from 'react';
import {
    View, Text, Image, TouchableWithoutFeedback,
    StyleSheet, Dimensions, ScrollView
} from 'react-native';

import { SimpleLineIcons, MaterialIcons, Feather,MaterialCommunityIcons } from '@expo/vector-icons';

import Title from '../../Custom/Title/Title';
import { mainAppColor } from '../../Constants/Colors';

import myAxios from '../../myAxios/axios';
import Spinner from '../../Custom/Spinner/Spinner';
import Carousel from './Carousel/Carousel';

import defaultImage from '../../../assets/550x300.png'



const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;



const AntiqueDetailScreen = ({ route, navigation }) => {
    const { id, name } = route.params;
    const [loading, setLoading] = useState(true);
    const [antiqueData, setAntiqueData] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const res = await myAxios.get(`antiques/${id}/detail/`);
            setAntiqueData(res.data);
            if (res.data.images.length > 0) {
                setActiveImage(res.data.images[0].image)
            }
            navigation.setOptions({
                title: res.data.name,
            })
            setLoading(false);

        }
        fetchData();
    }, []);

    if (loading) {
        return (<Spinner size={'large'} color={mainAppColor} />)
    }
    return (
        <ScrollView>
            <View>
                <Image style={styles.mainImage} source={{ uri: activeImage }}
                    resizeMode={'cover'} />
                <TouchableWithoutFeedback>
                    <View style={styles.fullscreen}>
                        <SimpleLineIcons name="size-fullscreen"
                            size={18} color="#fff" />
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.header}>
                    <View style={styles.titleInfoCon}>
                        <Text style={styles.title}>
                            {antiqueData.name}
                        </Text>
                        <Text style={styles.place}>
                            {antiqueData.location.city} ,{antiqueData.place}
                        </Text>
                    </View>
                    <View style={styles.titleIconCon}>
                        <MaterialIcons name="bookmark-outline" size={38} color="#fff" />
                    </View>
                </View>

            </View>
            {antiqueData.images.length > 0 ?
                <Carousel activeImage={activeImage}
                    setActiveImage={setActiveImage}
                    images={antiqueData.images} /> : null}


            <Title title={'مقدمة'} icon={() => (
                <Feather name="book"
                    size={24}
                    color={mainAppColor} />
            )} />
            <Text style={styles.content}>
                {antiqueData.overview}
            </Text>

            <Title title={'المحتوى'} icon={() => (
                <Feather name="book-open"
                    size={24}
                    color={mainAppColor} />
            )} />
            <Text style={styles.content}>
                {antiqueData.description}
            </Text>
            <Title title={'التاريخ'} icon={() => (
                <MaterialIcons name="date-range"
                    size={26}
                    color={mainAppColor} />
            )} />
            <Text style={styles.content}>
                {antiqueData.start_date}
                -
                {antiqueData.enddate_date}

            </Text>
            <Title title={'مراجع'} icon={() => (
                <MaterialCommunityIcons name="text-box-search-outline"
                    size={26}
                    color={mainAppColor} />
            )} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    mainImage: {
        width: WIDTH,
        height: HEIGTH / 2.5
    },

    header: {
        position: 'absolute',
        bottom: 20,
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    title: {
        marginBottom: 4,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'cairoBold'
    },
    place: {
        color: '#fff',

    },
    titleIconCon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullscreen: {
        backgroundColor: '#e2813596',//'#f4f3f3',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 16,
        left: 16,
        borderRadius: 6

    },
    content: {
        marginTop: 10,
        paddingRight: 25,
        paddingLeft: 10,
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '500',
        color: '#414141'
    }
})

export default AntiqueDetailScreen;