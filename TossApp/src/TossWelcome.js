/*
12/27/16
welcome to toss
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossWelcome extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Welcome to Toss.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    }
});

module.exports = TossWelcome;