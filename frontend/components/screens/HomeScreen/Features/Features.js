import {
    View, Text, TouchableOpacity, StyleSheet,
    Dimensions, Image
} from 'react-native';

import FeaturesData from '../../../Models/Features';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Features = () => {

    return (<View style={styles.container}>
        {FeaturesData.map(item => {
            return (<TouchableOpacity key={item.id} style={styles.item}>
                <Image style={styles.image}
                    source={{ uri: item.url }}
                    resizeMode={'cover'} />
                <Text style={styles.title}>
                    {item.name}
                </Text>
            </TouchableOpacity>)
        })}
    </View>)

}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        paddingHorizontal: 15,
        // marginTop: 10,
        flex: 1, flexDirection: 'row', flexWrap: 'wrap'
    },
    item: {
        marginBottom: 20,
        paddingHorizontal:10,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    image: {
        height: HEIGHT / 5,
        width: '100%'
    },
    title: {
        position: 'absolute',
        bottom: 10,
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Features;