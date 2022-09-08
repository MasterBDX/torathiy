import { Button, Text, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>
                Search Screen
            </Text>
            <Button title='Navigate' onPress={() => navigation.navigate('AntiqueDetail')} />
        </SafeAreaView>
    )
}

export default SearchScreen;