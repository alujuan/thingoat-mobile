import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={{ color: 'white', fontsize: 20 }}> 
                    {this.props.titulo}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        padding: 20,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
});