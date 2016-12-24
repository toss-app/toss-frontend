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
            <View style={styles.container}>
                <Text>
                    Third view. Should be able to type what the time is here. Button below.
                </Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text>
                        Click to advance to TossLocation.
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    onButtonPress() {
        this.props.navigator.push({
            id: 'TossLocation'
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

module.exports = TossTime;