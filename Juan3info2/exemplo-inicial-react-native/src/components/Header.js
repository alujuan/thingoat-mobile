import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={style.header}>
      <Text style={{ color: 'white', fontsize: 29 }}>
        olá, eu sou um aluno!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
});