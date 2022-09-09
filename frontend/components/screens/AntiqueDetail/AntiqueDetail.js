import {
    View, Text, Image, TouchableWithoutFeedback,
    StyleSheet, Dimensions
} from 'react-native';

import { SimpleLineIcons, MaterialIcons,Ionicons } from '@expo/vector-icons';

import Carousel from './Carousel/Carousel';

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;


const AntiqueDetailScreen = ({ route, navigations }) => {
    // const {id,name} = route.params;
    return (
        <View>
            <View>
                <Image style={styles.mainImage} source={{ uri: "https://deih43ym53wif.cloudfront.net/forum-romanum-rome-shutterstock_351471179_7f3cb808a8.jpeg" }}
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
                             معالم يونانية
                        </Text>
                        <Text style={styles.place}>
                            طرابلس ,المدينة القديمة
                        </Text>
                    </View>
                    <View style={styles.titleIconCon}>
                    <MaterialIcons name="bookmark-outline" size={38} color="#fff" />
                    {/* <Ionicons name="ios-bookmark-outline" size={34} color="#fff" /> */}
                        {/* <MaterialCommunityIcons name="bookmark-outline" 
                                                 size={40} color="#fff" /> */}
                    </View>
                </View>

            </View>
            <Carousel />
        </View>
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
    title:{
      marginBottom:4,
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
      fontFamily:'cairoBold'  
    },
    place:{
        color:'#fff',

    },
    titleIconCon:{
        justifyContent:'center',
        alignItems:'center'
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

    }
})

export default AntiqueDetailScreen;