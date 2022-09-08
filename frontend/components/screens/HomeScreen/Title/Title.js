import { View, StyleSheet, Text } from 'react-native';


const Title = ({ title, icon }) => {
    const IconCom = icon
    return (<View style={styles.container}>
        <View style={styles.iconCon}>
            <IconCom />
        </View>
        <Text style={styles.title}>
            {title}
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#414141'
    },

    iconCon: {
        paddingHorizontal: 10
    }

})

export default Title;