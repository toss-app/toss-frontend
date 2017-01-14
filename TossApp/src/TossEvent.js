import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

class TossEvent extends Component {
    constructor(props) {
        super(props);
    }

    createEvent(query) {

    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput autoFocus={true} onChangeText={(query) => this.createEvent(query)} placeholder='Type the event name...' style={styles.textInput}/>
                <View style={styles.eventView}>
                    <Text>
                        Second view. Should be able to type what the event is here. Button below.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    eventView: {
        backgroundColor: 'red',
        flex: 1
    },
    textInput: {
        height: 40,
        padding: 10
    },
    wrapper: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    }
});

module.exports = TossEvent;