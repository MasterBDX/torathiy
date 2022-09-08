import React from "react";
import {
    SafeAreaView, StyleSheet,
    TextInput, View, Dimensions
} from "react-native";

import { FontAwesome, Feather } from '@expo/vector-icons';


const WIDTH = Dimensions.get('window').width;

const SearchFilter = () => {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.filterCon}>
                <FontAwesome name="filter" size={24}
                    color="#bcbcbc" />
            </View>
            <View style={styles.inputCon}>

                <TextInput style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={'Search'} />
                <View style={styles.iconCon}>
                    <Feather name="search"
                        size={24} color="#bcbcbc" />
                </View>
            </View>

        </SafeAreaView>
    );
};

const HIEGHT = 42
const RADIUS = 6

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'

    },
    inputCon: {
        overflow: 'hidden',
        borderBottomLeftRadius: RADIUS,
        borderTopLeftRadius: RADIUS,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',

    },

    input: {
        backgroundColor: "#e8e8e8",
        height: HIEGHT,
        width: WIDTH / 1.7,
        paddingHorizontal:15

    },
    iconCon: {
        overflow:'hidden',
        borderBottomEndRadius: RADIUS,
        borderTopEndRadius: RADIUS,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: HIEGHT,
        backgroundColor: "#e8e8e8",
        paddingHorizontal: 5

    },
    filterCon:{
        borderRadius:RADIUS,
        marginHorizontal:8,
        justifyContent: 'center',
        alignItems: 'center',
        width:40,
        height: HIEGHT,
        backgroundColor:"#e8e8e8"
    }
});

export default SearchFilter;