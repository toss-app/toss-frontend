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
            <View style={styles.container}>
                <Text>
                    Second view. Should be able to type what the event is here. Button below.
                </Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text>
                        Click to advance to TossTime.
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    onButtonPress() {
        this.props.navigator.push({
            id: 'TossTime'
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

module.exports = TossEvent;