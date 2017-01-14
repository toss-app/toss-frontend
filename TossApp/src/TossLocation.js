import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossLocation extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>
                    Last view. Should be able to type what the location is here. Button below.
                </Text>
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

module.exports = TossLocation;