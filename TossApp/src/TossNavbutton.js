/*
12/27/16
navbutton shrink
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossNavbutton extends Component {
    render() {
        return (
            <View style={styles.navbutton}>
                {this.props.doesForwardExist &&
                    <TouchableHighlight onPress={this.props.onForwardPress}>
                        <Text style={[styles.navbarText, styles.navbarLeft]}>Next</Text>
                    </TouchableHighlight>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbutton: {
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center'
    },
    navbarText: {
        color: 'white'
    }
});

module.exports = TossNavbutton;