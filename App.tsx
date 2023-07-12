import Header from "@/components/Header";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
