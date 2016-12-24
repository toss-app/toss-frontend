/*
12/24/16
contains view of event location
*/

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
            <View style={styles.container}>
                <Text>
                    Last view. Should be able to type what the location is here. Button below.
                </Text>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text>
                        Click to advance to initial creation screen (completion).
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    onButtonPress() {
        this.props.navigator.push({
            id: 'TossFriends'
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

module.exports = TossLocation;