
import {
    View, FlatList, TouchableWithoutFeedback,
    StyleSheet, Image
} from 'react-native';

import { Feather } from '@expo/vector-icons';



const Caoursel = ({ activeImage, setActiveImage, images }) => {
    const activeImageHandler = (imageUrl) => {
        setActiveImage(imageUrl)
    }

    const renderItem = ({ item }) => {
        return <TouchableWithoutFeedback onPress={() => { activeImageHandler(item) }}>
            <Image source={{ uri: item }} resizeMode={'cover'}
                style={{ ...styles.image, opacity: item == activeImage ? 1 : .5 }} />
        </TouchableWithoutFeedback>
    }
    return (<View style={styles.container}>
        <View style={styles.iconCon}>

            <Feather name="chevron-right" size={24}
                color="#4141417d" />
        </View>
        <View style={styles.images}>
            <FlatList
                horizontal
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
        <View style={styles.iconCon}>
            <Feather name="chevron-left" size={24}
                color="#4141417d" />
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    images: {
        width: '80%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconCon: {
        width: '10%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 10

    }
})

export default Caoursel;