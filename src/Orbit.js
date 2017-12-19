import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';
import OrbitGenerater from "./OrbitGenerater";


import Svg, {
    Circle, G
} from 'react-native-svg';
import Planets from "./Planets";

const {width, height} = Dimensions.get("window");

let
    screenCenterX,
    screenCenterY,
    screenCenterXStr,
    screenCenterYStr,
    radius,
    radiusStr,
    radiusDivOfCircles,
    noOfOrbits,
    noOfPlanets = 8,
    orbitCount = 0,
    planetObj = {},
    degreeOfPlanets = [360, 180, 90, 60, 40, 130, 60, 80],
    orbitNumbers = [1, 3, 3, 3, 2, 2, 2, 2],
    orbits = [],
    radiusOfPlanetPlot = [],
    orbitradius = [],
    planetsContent = [];
intervalArr = [20, 10, 20, 5, 10, 15, 60, 75];
export default class Orbit extends Component<{}> {


    componentWillMount() {

        screenCenterXStr = width / 2;
        /* Mid screen width*/
        screenCenterX = screenCenterXStr.toString();
        /* Mid screen width to string as library takes string as parameter*/
        screenCenterYStr = height / 2;
        /* Mid screen height*/
        screenCenterY = screenCenterYStr.toString();
        /* Mid screen height to string as library takes string as parameter*/
        radius = screenCenterXStr;
        /* radiusStr same with mid screen width*/
        radiusStr = radius.toString();
        /*radius converted to string as library takes string as parameter*/
        noOfOrbits = 3;
        /*no of orbits*/
        radiusDivOfCircles = radius / noOfOrbits;

    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.svgStyle}>
                    {this.generateOrbitPath(radius, noOfOrbits)}{/*Method for orbit generation*/}
                    {this.generatePlanets(orbitradius, degreeOfPlanets)}{/*Method for Planet generation*/}
                </View>


            </View>

        );
    }

    generateOrbitPath(radius, noOfOrbits) {
        radiusStr = radius.toString()
        orbits.push(//Outer Orbit View
            <View key={0} style={styles.box1}>
                <Svg style={{flex: 1}}>
                    <OrbitGenerater
                        radius={radiusStr}
                        screenCenterX={screenCenterX}
                        screenCenterY={screenCenterY}/>
                </Svg>
            </View>
        )
        orbitradius.push(radius)
        orbitCount++
        for (let i = 1; i < noOfOrbits; i++) {//getting RadiusArray for orbits
            radius = radius - radiusDivOfCircles
            radiusStr = radius.toString()
            orbitradius.push(radius)
            orbits.push( //Inner Orbit Views
                <View key={i} style={styles.box1}>
                    <Svg style={{flex: 1}}>
                        <OrbitGenerater
                            radius={radiusStr}
                            screenCenterX={screenCenterX}
                            screenCenterY={screenCenterY}
                        />
                    </Svg>
                </View>
            )
            orbitCount++

        }


        return (orbits)
    }


    planetGenerator(planetobjArr) {


        for (let j = 0; j < planetobjArr.length; j++) {
            planetsContent.push(
                <Planets
                    totOrbitCount={noOfOrbits}
                    keyId={planetobjArr[j].pid}
                    cy={screenCenterYStr}
                    cx={screenCenterXStr}
                    radius={planetobjArr[j].rad}
                    degree={planetobjArr[j].deg}/>
            )
        }

        return (planetsContent);
    }

    generatePlanets(orbitradius, degreeOfPlanets) {

        // radiusOfPlanetPlot
        let locArr = []

        for (let m = 0; m < orbitNumbers.length; m++) {
            radiusOfPlanetPlot[m] = orbitradius[orbitNumbers[m] - 1];//radius and degree mapped array creation
            console.log("radArr", radiusOfPlanetPlot)
        }

        if (orbitCount == noOfOrbits) { //orbit creation finished

            if (noOfPlanets == orbitNumbers.length && noOfPlanets == degreeOfPlanets.length) {

                for (let i = 0; i < noOfPlanets; i++) {//Planet Array creation
                    planetObj = {
                        "pid": "p" + i,
                        "rad": radiusOfPlanetPlot[i],
                        "deg": degreeOfPlanets[i],
                    };
                    locArr.push(planetObj)
                }
                return this.planetGenerator(locArr)
            }
            else {

                alert('planet number and orbit number doesn\'t match')
            }

        }


    }
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    svgStyle: {
        width: width,
        height: height,

    },
    symbol: {
        height: 20,
        width: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        position: 'absolute',

    },
    box1: {

        justifyContent: 'center',
        position: 'absolute',
        width: width,
        height: height,
    },


});
