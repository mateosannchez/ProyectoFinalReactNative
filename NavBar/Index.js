import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.navbar}>

      <View style={styles.navbar__home}>
        {/* <TextInput /> */}
        <Button title='home' />
      </View>

        <View style={styles.navbar__logo}>
          {/* <TextInput /> */}
          <Button title='logo' />
        </View>

        <View style={styles.navbar__like}>
          {/* <TextInput /> */}
          <Button title='like' />
        </View>

        
    </View>

    
  );
}