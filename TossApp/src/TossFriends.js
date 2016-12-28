/*
12/24/16
contains view of friends and groups
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossFriends extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>
                    First view. Should show friends and groups. Button below.
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

module.exports = TossFriends;