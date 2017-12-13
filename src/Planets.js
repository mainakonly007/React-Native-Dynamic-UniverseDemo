import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';


let deg, cx, cy, radi, keyID;
let tmp_array = []
export default class Planets extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0,};
        this.plotPoint();
    }


    componentDidMount() {
        keyID = this.props.keyId;
        tmp_array.push(keyID)
        deg = this.props.degree;
        cx = this.props.cx;
        cy = this.props.cy;
        radi = this.props.radius;
        this.plotPoint();


    };

    componentDidUpdate() {
    }

    render() {

        // return tmp_array.map(function (keyID) {
            return (

                <View key={keyID} style={[styles.symbol, {
                    top: this.state.y,
                    left: this.state.x
                }]}>

                </View>

            )
        // })


    }


    plotPoint() {
        // console.log(this.state.x, this.state.y, radi, deg, cx, cy);
        var newX = cx + radi * Math.cos(degToRad(deg)) - 10;
        var newY = cy + radi * Math.sin(degToRad(deg)) - 10;
        this.setState({x: newX, y: newY});
        setTimeout(this.plotPoint.bind(this), 50);
        deg++;
    }


}

function degToRad(deg) {
    return deg * Math.PI / 180;
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
