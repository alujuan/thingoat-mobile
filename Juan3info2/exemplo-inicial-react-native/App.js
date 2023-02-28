import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";

export default function App() {
  const tasks = ['Task 1', 'Task 2', 'Tasks 3']
  return (
    <View style={styles.container}>
      <Header />
      <View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'orange',
    width: "100%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
