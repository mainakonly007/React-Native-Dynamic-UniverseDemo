import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {Circle,} from 'react-native-svg';

const { width, height } = Dimensions.get("window");
let count;


export default class OrbitGenerater extends Component<{}> {

    render(){


        return(

            <Circle
                cx={this.props.scx}
                cy={this.props.scy}
                r={this.props.radius}
                stroke="blue"
                strokeWidth="1"
                fill="transparent"
            />


        );
    }

}



