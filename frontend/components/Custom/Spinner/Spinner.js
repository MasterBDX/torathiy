import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';


const Spinner = props => (
    <View style={styles.container}>
        <ActivityIndicator size={props.size} 
                           color={props.color} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Spinner;