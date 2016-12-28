/*
12/24/16
contains view of event time
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossTime extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>
                    Third view. Should be able to type what the time is here. Button below.
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

module.exports = TossTime;