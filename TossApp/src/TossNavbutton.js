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
            <View>
                {this.props.doesForwardExist &&
                    <TouchableHighlight activeOpacity={1} onPress={this.props.onForwardPress} style={styles.navbutton}>
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