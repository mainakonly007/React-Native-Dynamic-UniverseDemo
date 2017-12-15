import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

let rotatorArray=[]
export default class PlanetGenerator extends Component<{}> {
    

    constructor(props) {
        super(props);
       
    }

    render()
    {
console.log("rotatoraArray",this.props.planetArr)
    return(

            <View 
                key={keyId} 
                style={[styles.symbol, {top: this.state.y, left:this.state.x}]}>
            </View>

    );

    }

}