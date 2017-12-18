/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';
import Svg, {
    Circle,
} from 'react-native-svg';
import Orbit from "./src/Orbit";

const {width, height} = Dimensions.get("window");

export default class App extends Component<{}> {
    render() {

        scxG = width / 2;
        scx = scxG.toString();
        scyG = height / 2;

        return (
            <View style={{flex: 1}}>
                <Orbit/>
            </View>
        );
    }

}
