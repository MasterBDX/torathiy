import { View, FlatList,
         StyleSheet,Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

const images = [
    "https://a.storyblok.com/f/95452/2000x1125/96f180a0c6/libya-leptis-magna.png/m/1024x768",
    "https://images.unsplash.com/photo-1603566541830-972ff1b4b2cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5jaWVudCUyMHJ1aW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tavares.Forum.Romanum.redux.jpg/1200px-Tavares.Forum.Romanum.redux.jpg",
    "https://cf.bstatic.com/data/xphoto/1182x887/326/32605796.jpg?size=S"
]

const Caoursel = () => {
    const renderItem = ({item})=>{
        return <Image source={{uri:item}} resizeMode={'cover'} 
                     style={styles.image} />
    }
    return (<View style={styles.container}>
        <View style={styles.iconCon}>
            
            <Feather name="chevron-right" size={24} 
                     color="#ccc" />
        </View>
        <View style={styles.images}>
        <FlatList
        horizontal
        data={images}
        renderItem={renderItem}
        keyExtractor={(item,index) => index}
      />
        </View>
        <View style={styles.iconCon}>
            <Feather name="chevron-left" size={24} 
                     color="#ccc" />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
    },
    images: {
        width: '80%',
        height: 100,
        backgroundColor: 'purple',
        justifyContent:'center',
        alignItems:'center'
    },
    iconCon: {
        backgroundColor: 'yellow',
        width: '10%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:100,
        height:100,

    }
})

export default Caoursel;