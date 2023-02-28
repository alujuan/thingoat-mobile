import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={ styles.headerText }>
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
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});