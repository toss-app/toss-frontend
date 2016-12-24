import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TossFriends from './src/TossFriends';
import TossEvent from './src/TossEvent';
import TossTime from './src/TossTime';
import TossLocation from './src/TossLocation';

export default class TossApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{
                    id: 'TossFriends'
                }}
                renderScene = {
                    this.navigatorRenderScene
                }
            />
        );
    }

    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'TossFriends':
                return (<TossFriends navigator={navigator} title="Toss Friends" />);
            case 'TossEvent':
                return(<TossEvent navigator={navigator} title="Toss Event" />);
            case 'TossTime':
                return(<TossTime navigator={navigator} title="Toss Time" />);
            case 'TossLocation':
                return(<TossLocation navigator={navigator} title="Toss Location" />);
        }
    }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('TossApp', () => TossApp);
