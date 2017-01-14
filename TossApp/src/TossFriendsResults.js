import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossFriendsResults extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                <Text style={styles.resultText}>Here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: 'row',
        height: 40,
        padding: 10
    },
    resultText: {
        flex: 1
    }
});

module.exports = TossFriendsResults;