import { useState, useEffect } from 'react';
import {
    View, Text, Image, TouchableWithoutFeedback,
    StyleSheet, Dimensions, ScrollView
} from 'react-native';

import { SimpleLineIcons, MaterialIcons, Feather } from '@expo/vector-icons';

import Title from '../../Custom/Title/Title';
import { mainAppColor } from '../../Constants/Colors';

import myAxios from '../../myAxios/axios';
import Spinner from '../../Custom/Spinner/Spinner';
import Carousel from './Carousel/Carousel';

import defaultImage from '../../../assets/550x300.png'

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const images = [
    "https://a.storyblok.com/f/95452/2000x1125/96f180a0c6/libya-leptis-magna.png/m/1024x768",
    "https://images.unsplash.com/photo-1603566541830-972ff1b4b2cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5jaWVudCUyMHJ1aW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tavares.Forum.Romanum.redux.jpg/1200px-Tavares.Forum.Romanum.redux.jpg",
    "https://cf.bstatic.com/data/xphoto/1182x887/326/32605796.jpg?size=S"
]

const AntiqueDetailScreen = ({ route, navigation }) => {
    const { id, name } = route.params;
    const [loading, setLoading] = useState(true);
    const [antiqueData, setAntiqueData] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const res = await myAxios.get(`antiques/${id}/detail/`);
            setAntiqueData(res.data);
            // if (res.data.images.length > 0) {
            //     setActiveImage(res.data.images[0].image)
            // }
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
                <Image style={styles.mainImage} source={activeImage ? { uri: activeImage } : defaultImage}
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