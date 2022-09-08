import { Fragment } from 'react';
import {
    View,
    Image, StyleSheet,
    Dimensions,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const images = [
    'https://a.storyblok.com/f/95452/2000x1125/96f180a0c6/libya-leptis-magna.png/m/1024x768',
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tavares.Forum.Romanum.redux.jpg/1200px-Tavares.Forum.Romanum.redux.jpg",
    "https://cf.bstatic.com/data/xphoto/1182x887/326/32605796.jpg?size=S"
]

const Carousel = () => {


    return (
        <Fragment>
            <FlatList keyExtractor={(_, index) => (index)}
                showsHorizontalScrollIndicator={false}
                style={{
                    ...styles.container
                }}
                data={images} horizontal
                pagingEnabled
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity activeOpacity={.8} style={styles.ImageCon}>
                            <Image key={Math.random(1)} source={{ uri: item }}
                                style={styles.image}
                                resizeMode='cover' />
                            <Text style={styles.title}>
                                Libyan Ruins
                            </Text>
                        </TouchableOpacity>
                    )
                }} />

        </Fragment>

    )
}

const styles = StyleSheet.create({
    container: {
        
        height: HEIGHT / 3

    },

    ImageCon: {
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: WIDTH * .85,
        height: HEIGHT / 3.5,
        borderRadius: 5
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight:'700',
        position: 'absolute',
        zIndex: 100,
        bottom:30
    }
})

export default Carousel;