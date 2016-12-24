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
            <View style={styles.container}>
                <Text>
                    First view. Should show friends and groups. Button below.
                </Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text>
                        Click to advance to TossEvent.
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    onButtonPress() {
        this.props.navigator.push({
            id: 'TossEvent'
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
});

module.exports = TossFriends;