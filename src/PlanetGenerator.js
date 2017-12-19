import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

let rotatorArray = []

export default class PlanetGenerator extends Component<{}> {


    constructor(props) {
        super(props);


    }


    render() {

        console.log("rotatorArray", this.props.rotatorArr)
        return (

            <View>
                {this.generateRotators()}

            </View>

        );

    }

    generateRotators() {
        let planets = []
        rotatorArray = this.props.rotatorArr
        console.log("asd", rotatorArray[1])
        for (let i = 0; i < this.props.rotatorArr.length; i++) {

            let newX = rotatorArray[i].cx + rotatorArray[i].rad * Math.cos(this.degToRad(rotatorArray[i].deg)) - 10;
            let newY = rotatorArray[i].cy + rotatorArray[i].rad * Math.sin(this.degToRad(rotatorArray[i].deg)) - 10;

            console.log("loop", newX, newY)

            planets.push(
                <View
                    key={i}
                    style={[styles.symbol, {top: newY, left: newX}]}>
                </View>
            )

        }

        return (planets)



    }

    degToRad(deg) {
        return deg * Math.PI / 180;
    }
}
const styles = StyleSheet.create({
    symbol: {
        height: 20,
        width: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        position: 'absolute',
    }
});