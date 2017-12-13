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

let x;
let y;
let scx,
    scy,
    scxG,
    scyG,
    r,
    dradius,
    average,
    radius,
    outerCirclewidth,
    noOfCircle;
let degreeArray = [30, 180, 90, 360, 270];

export default class Orbit extends Component<{}> {


    componentWillMount() {

        scxG = width / 2;
        scx = scxG.toString();
        scyG = height / 2;
        scy = scyG.toString();
        r = scxG;
        radius = r.toString();
        noOfCircle = 2;
        outerCirclewidth = r * 2;
    }


    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //
    //     };
    // }
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    }


    render() {

        // alert(scx+","+scy)
        return (
            <View style={styles.container}>

                <View style={styles.svgStyle}>

                    {this.generateOrbitPath(r, noOfCircle)}

                </View>

            </View>

        );
    }

    generateOrbitPath(radius, noOfCircle) {
        average = r / noOfCircle;

        let orbitArray = []


        for (i = 1; i <= noOfCircle; i++) {
            if (i == 1) {
                // alert(x+" "+y)
                dradius = radius.toString()
                //alert(dradius)
                //
                orbitArray.push(
                    <View key={i} style={styles.box1}>
                        {/*{this.plotPoint(scxG, scyG, radius, 200)}*/}

                        {/*<View key={i} style={[styles.symbol,{*/}
                        {/*top:y,*/}
                        {/*left:x*/}
                        {/*}]}>*/}
                        {/*</View>*/}
                        <Planets
                            keyId={i}
                            cy={scyG}
                            cx={scxG}
                            radius={radius}
                            degree={200}/>


                        <Svg style={{flex: 1}}>


                            <OrbitGenerater
                                radius={dradius}
                                scx={scx}
                                scy={scy}/>
                        </Svg>
                    </View>
                )
            }

            else {
                radius = radius - average
                dradius = radius.toString()
                // alert(dradius)
                orbitArray.push(
                    <View key={i} style={styles.box1}>


                        {/*{this.plotPoint(scxG, scyG, radius, 175)}*/}

                        {/*<View key={i} style={[styles.symbol, {*/}
                        {/*top: y,*/}
                        {/*left: x*/}
                        {/*}]}>*/}
                        {/*</View>*/}

                        {/*{this.planetGenerator(radius,i)}*/}

                        {/*<Planets*/}
                        {/*cy={scyG}*/}
                        {/*cx={scxG}*/}
                        {/*radius={radius}*/}
                        {/*degree={175}/>*/}

                        <Planets
                            keyId={i}
                            cy={scyG}
                            cx={scxG}
                            radius={radius}
                            degree={100}/>
                        <Svg style={{flex: 1}}>


                            <OrbitGenerater
                                radius={dradius}
                                scx={scx}
                                scy={scy}

                            />
                        </Svg>
                    </View>
                )

            }
        }

        return (orbitArray)


    }

    plotPoint(cx, cy, r, degree) {

        x = cx + r * Math.cos(degToRad(degree)) - 10
        y = cy + r * Math.sin(degToRad(degree)) - 10
    }

    planetGenerator(radius, i) {
        let planetArray = [];

        //
        // for (i=0;i<degreeArray.length;i++){

        planetArray.push(
            <Planets
                keyId={i}
                cy={scyG}
                cx={scxG}
                radius={radius}
                degree={90}/>
        )


        planetArray.push(
            <Planets
                keyId={i}
                cy={scyG}
                cx={scxG}
                radius={radius}
                degree={150}/>
        )


        planetArray.push(
            <Planets
                keyId={i}
                cy={scyG}
                cx={scxG}
                radius={radius}
                degree={180}/>
        )


        planetArray.push(
            <Planets
                keyId={i}
                cy={scyG}
                cx={scxG}
                radius={radius}
                degree={135}/>
        )

        // }


        return (

            planetArray

        );
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
        //top: 40,
        //left: 40,
        position: 'absolute',
        width: width,
        height: height,
    },


});
