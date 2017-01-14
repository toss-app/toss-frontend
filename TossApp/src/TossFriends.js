import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import FriendsResults from './TossFriendsResults';

class TossFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            searchQuery: ''
        };
    }

    searchFriends(query) {
        var results = [];
        for (var i = 0; i < query.length; i++) {
            results.push(<FriendsResults key={results.length}/>);
        }
        this.setState({
            results: results,
            searchQuery: query
        });
    }

    // added ScrollView to push navbar to bottom
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput autoFocus={true} onChangeText={(query) => this.searchFriends(query)} placeholder='Type here to search for friends...' style={styles.textInput}/>
                {this.state.results}
                <ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    results: {
        flex: 1,
        flexDirection: 'row'
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

module.exports = TossFriends;