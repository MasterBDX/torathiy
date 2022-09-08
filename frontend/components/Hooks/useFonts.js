import * as Font from 'expo-font';


export default useFonts = async () =>
    await Font.loadAsync({
        cairoRegular: require('../../assets/fonts/Cairo-Regular.ttf'),
        cairoBold: require('../../assets/fonts/Cairo-Bold.ttf'),

    });