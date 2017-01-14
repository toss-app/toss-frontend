import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TossNavbar extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                {this.props.doesBackExist ? (
                    <TouchableHighlight activeOpacity={1} onPress={this.props.onBackPress}>
                        <Text style={styles.navbarBack}>Back</Text>
                    </TouchableHighlight>
                ) : (
                    <Text style={styles.navbarBack}></Text>
                )}
                <Text style={styles.navbarTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        height: 20 + 40,
        justifyContent: 'center',
        paddingTop: 20
    },
    navbarBack: {
        color: 'white',
        width: 50,
        textAlign: 'center'
    },
    navbarTitle: {
        color: 'white',
        flex: 1,
        fontWeight: 'bold',
        marginRight: 50,
        textAlign: 'center'
    }
});

module.exports = TossNavbar;