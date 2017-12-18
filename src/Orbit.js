import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import OrbitGenerater from "./OrbitGenerater";


import Svg from 'react-native-svg';
import Planets from "./Planets";

const {width, height} = Dimensions.get("window");

let scx,
    scy,
    scxG,
    scyG,
    r,
    dradius,
    average,
    radius,
    outerCirclewidth,
    noOfCircle,
    degreeArray = [360, 180, 70, 90, 265, 40], //for outer circle only
    orbitNumberArray = [1, 1, 3, 2, 3, 2], // planet plot on user defined orbit Array
    noOfPlanets = 6,
    count = 0,
    planetObj = {},
    orbitArray = [],
    radiusMappedArray = [],
    radiusArray = [],

    planetArray = [];

export default class Orbit extends Component<{}> {


    componentWillMount() {

        scxG = width / 2;
        scx = scxG.toString();
        scyG = height / 2;
        scy = scyG.toString();
        r = scxG;
        radius = r.toString();
        noOfCircle = 3;
        average = r / noOfCircle;
        outerCirclewidth = r * 2;

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.svgStyle}>
                    {this.generateOrbitPath(r, noOfCircle)}
                    {this.generatePlanets(radiusArray, degreeArray)}
                </View>


            </View>

        );
    }

    generateOrbitPath(radius, noOfCircle) {


        dradius = radius.toString()
        orbitArray.push(
            <View key={0} style={styles.box1}>
                <Svg style={{flex: 1}}>
                    <OrbitGenerater
                        radius={dradius}
                        scx={scx}
                        scy={scy}/>
                </Svg>
            </View>
        );
        radiusArray.push(radius)
        count++;
        for (let i = 1; i < noOfCircle; i++) {

            radius = radius - average
            dradius = radius.toString()
            radiusArray.push(radius)
            orbitArray.push(
                <View key={i} style={styles.box1}>
                    <Svg style={{flex: 1}}>
                        <OrbitGenerater
                            radius={dradius}
                            scx={scx}
                            scy={scy}
                        />
                    </Svg>
                </View>
            )
            count++

        }


        return (orbitArray)
    }

    planetGenerator(planetobjArr) {


        for (let j = 0; j < planetobjArr.length; j++) {
            planetArray.push(
                <Planets
                    totOrbitCount={noOfCircle}
                    keyId={planetobjArr[j].pid}
                    cy={scyG}
                    cx={scxG}
                    radius={planetobjArr[j].rad}
                    degree={planetobjArr[j].deg}/>
            )
        }

        return (planetArray);
    }

    generatePlanets(radiusArray, degreeArray) {

        // radiusMappedArray
        let locArr = [];

        for (let m = 0; m < orbitNumberArray.length; m++) {
            radiusMappedArray[m] = radiusArray[orbitNumberArray[m] - 1];
        }
        if (count === noOfCircle) {

            if (noOfPlanets === orbitNumberArray.length && noOfPlanets === degreeArray.length) {

                for (let i = 0; i < noOfPlanets; i++) {
                    planetObj = {
                        "pid": "p" + i,
                        "rad": radiusMappedArray[i],
                        "deg": degreeArray[i],
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

function degToRad(deg) {
    return deg * Math.PI / 180;
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
