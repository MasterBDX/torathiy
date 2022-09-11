import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SearchFilter from './SearchFilter/SearchFilter';
import { Feather } from '@expo/vector-icons';
import { mainAppColor } from '../../Constants/Colors';

import Title from '../../Custom/Title/Title';
import Carousel from './Carousel/Carousel';
import Features from './Features/Features';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <SearchFilter />
                <Title title={"Popular"}
                    icon={() => (<Feather name="trending-up"
                        size={24}
                        color={mainAppColor} />)} />
                <Carousel />

                <Title title={"Feature"}
                    icon={() => (<Feather name="star"
                        size={24}
                        color={mainAppColor} />)} />
                <Features />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default HomeScreen;