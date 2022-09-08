import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './components/Navigation/DrawerNavigator/DrawerNavigator';
import useFonts from './components/Hooks/useFonts';

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  return (
    !dataLoaded ? <AppLoading
      startAsync={LoadFonts}
      onFinish={() => setDataLoaded(true)}
      onError={console.warn}
    /> : <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
