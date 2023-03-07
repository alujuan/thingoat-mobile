import { Component } from "react";    
import { Button, StyleSheet, Text, View } from "react-native";
export default class Counter extends Component {
    state = {
        count: 0,
    };
    incrementar() {
        if ( this.setState > this.props.max) {
            this.setState({
                count: this.state.count + 1,
            });
        }
    }
    decrementar() {
        if ( this.setState > this.props.min) {
            this.setState({
                count: this.state.count - 1,
            });
        }
    }
    render() {
        return (
            <View style={styles.contador}>
                <Text>Contador: { this.state.count}</Text>
                <Button onPress={() => this.incrementar()}title="+" />
                <Button onPress={() => this.decrementar()}title="-" />   
            </View>    
        );            
    }
}
const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alingItems: 'center',
    },
});