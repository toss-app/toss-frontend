import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TossWelcome from './src/TossWelcome';
import TossFriends from './src/TossFriends';
import TossEvent from './src/TossEvent';
import TossTime from './src/TossTime';
import TossLocation from './src/TossLocation';
import TossComplete from './src/TossComplete';

import TossNavbar from './src/TossNavbar';
import TossNavbutton from './src/TossNavbutton';

export default class TossApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{
                    id: 'Welcome'
                }}
                renderScene = {(route, navigator) => {

                    switch (route.id) {
                        case 'Welcome':
                            currentScene = <TossWelcome />;
                            break;
                        case 'Friends':
                            currentScene = <TossFriends />;
                            break;
                        case 'Event':
                            currentScene = <TossEvent />;
                            break;
                        case 'Time':
                            currentScene = <TossTime />;
                            break;
                        case 'Location':
                            currentScene = <TossLocation />;
                            break;
                        case 'Complete':
                            currentScene = <TossComplete />;
                        default:
                            // something wrong
                            break;
                    }

                    return (
                        <View style={styles.container}>
                            <TossNavbar
                                title={route.id}
                                doesBackExist={(tossFlow[route.id]['previous'])}
                                onBackPress={() => {
                                    navigator.pop();
                                }}
                            />
                            {currentScene}
                            <TossNavbutton
                                doesForwardExist={(tossFlow[route.id]['next'])}
                                onForwardPress={() => {
                                    navigator.push({
                                        id: tossFlow[route.id]['next']
                                    });
                                }}
                            />
                        </View>
                    );
                }}
            />
        );
    }
}

const tossFlow = {
    'Welcome': {
        'next': 'Friends',
        'previous': null
    },
    'Friends': {
        'next': 'Event',
        'previous': 'Welcome'
    },
    'Event': {
        'next': 'Time',
        'previous': 'Friends'
    },
    'Time': {
        'next': 'Location',
        'previous': 'Event'
    },
    'Location': {
        'next': 'Complete',
        'previous': 'Time'
    },
    'Complete': {
        'next': 'Welcome', //change it to null when you figure out what to do
        'previous': null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('TossApp', () => TossApp);