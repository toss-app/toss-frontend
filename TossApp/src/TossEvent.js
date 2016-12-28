/*
12/24/16
contains view of event creation
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossEvent extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>
                    Second view. Should be able to type what the event is here. Button below.
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

module.exports = TossEvent;