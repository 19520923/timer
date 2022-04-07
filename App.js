import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style = {styles.root}>
      <HomeScreen/>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center', 
      marginBottom: 8,
  },
})


