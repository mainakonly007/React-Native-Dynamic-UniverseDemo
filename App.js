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
const { width, height } = Dimensions.get("window");
let degreeArray=[30,180,90,360,270];
let degreemidArray=[50,150,265,75,195,310];
let degreeArray2=[55,165,295,75,135,330];
var x;
var y;

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {

        scxG = width / 2;
        scx = scxG.toString();
        scyG = height / 2;

        return (
            <View style={{flex:1}}>


                {/*<View style={styles.viewStyle}>*/}
                    {/*/!*{this.plotPoint(150,200,150)}*!/*/}
                    {/*/!*<View style={[styles.symbol,{*!/*/}
                        {/*/!*top:y,*!/*/}
                        {/*/!*left:x*!/*/}
                    {/*/!*}]}>*!/*/}
                    {/*/!*</View>*!/*/}

                    {/*{this.plotmultipleLargePoints(150,degreeArray2)}*/}
                    {/*{this.plotmultipleLargePoints(70,degreeArray)}*/}
                    {/*{this.plotmultipleLargePoints(100,degreemidArray)}*/}

                    {/*/!*{this.plotmultipleSmallPoints()}*!/*/}

                    {/*/!*{this.plotPointSmallCircle(150,200,75)}*!/*/}

                    {/*/!*<View style={[styles.symbol,{*!/*/}
                        {/*/!*top:y,*!/*/}
                        {/*/!*left:x*!/*/}
                    {/*/!*}]}>*!/*/}
                    {/*/!*</View>*!/*/}


                    {/*<Svg style={styles.svgStyle}>*/}

                        {/*<Circle*/}
                            {/*cx={"150"}*/}
                            {/*cy={"200"}*/}
                            {/*r={"150"}*/}
                            {/*stroke="blue"*/}
                            {/*strokeWidth="1"*/}
                            {/*fill="transparent"*/}
                        {/*/>*/}

                        {/*<Circle*/}
                            {/*cx={"150"}*/}
                            {/*cy={"200"}*/}
                            {/*r={"100"}*/}
                            {/*stroke="blue"*/}
                            {/*strokeWidth="1"*/}
                            {/*fill="transparent"*/}
                        {/*/>*/}

                        {/*<Circle*/}
                            {/*cx={"150"}*/}
                            {/*cy={"200"}*/}
                            {/*r={"70"}*/}
                            {/*stroke="blue"*/}
                            {/*strokeWidth="1"*/}
                            {/*fill="transparent"*/}
                        {/*/>*/}

                    {/*</Svg>*/}





            <Orbit/>

                </View>
        //        </View>
        );
    }
    plotmultipleSmallPoints(){
            var smallPoints = [];

            for (i = 0; i < degreeArray.length; i++) {

                {
                    this.plotPointSmallCircle(150, 200, 75, degreeArray[i])
                    smallPoints.push(

                        <View  key = {i} style={[styles.symbol, {
                            top: y,
                            left: x
                        }]}>
                        </View>

                    )
                }



            }

return(
    <View>

            { smallPoints }
    </View>
        );




    }





    plotmultipleLargePoints(radius,degreeArray){
        var largePoints = [];

        for (i = 0; i < degreeArray.length; i++) {

            {
                this.plotPoint(150, 200, radius, degreeArray[i])
                largePoints.push(

                    <View key={i} style={[styles.symbol,{
                        top:y,
                        left:x
                    }]}>
                    </View>

                )
            }



        }

        return(
            <View>

                { largePoints }
            </View>
        );




    }







    plotPointSmallCircle(cx,cy,r,degree) {

        x = cx + r * Math.cos(degToRad(degree))-10
        y = cy + r * Math.sin(degToRad(degree))-10
    }



    plotPoint(cx,cy,r,degree) {

        x = cx + r * Math.cos(degToRad(degree))-10
        y = cy + r * Math.sin(degToRad(degree))-10
    }
}
function degToRad(deg) {
    return deg * Math.PI / 180;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    symbol: {
        height:20,
        width:20,
        backgroundColor: 'black',
        borderRadius:10,
        position: 'absolute',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

viewStyle:
    {flex:1,
    },
    svgStyle: {
        width:width,
        height:height,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
