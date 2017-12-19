import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native';
import Svg, {
    Circle,
} from 'react-native-svg';
const { width, height } = Dimensions.get("window");
let count;


export default class OrbitGenerater extends Component<{}> {

    render(){


        return(

            <Circle
                cx={this.props.screenCenterX}
                cy={this.props.screenCenterY}
                r={this.props.radius}
                stroke="blue"
                strokeWidth="1"
                fill="transparent"
            />


        );
    }

}



