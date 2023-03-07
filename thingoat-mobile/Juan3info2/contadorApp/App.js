import { StyleSheet, View } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter min="0" max="10"/>
      <Counter min="-100" max="100" />
      <Counter min="-1000" max="1000" />
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
});
