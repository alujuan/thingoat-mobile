import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const tasks = ['Objeto 1', 'Objeto 2', 'Objeto 3', 'Objeto 4', 'Objeto 5'];
  return (
    <View style={styles.container}>
      <Header titulo="Lista de Tarefas 1" />
      <Header titulo="Lista de Tarefas 2" />
      <Header titulo="Lista de Tarefas 3" />
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});


