import React, {Component} from 'react';
import PlanetGenerator from "./PlanetGenerator";


let
    deg,
    cx,
    cy,
    radi,
    keyId,
    xPointerArray = [],
    yPointerArray = [],
    planetArray = [],
    circleCount = 0,
    counter = 0;


export default class Planets extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            plArr: []
        };
    }

    componentDidMount() {
        deg = this.props.degree;
        keyId = this.props.keyId;
        cx = this.props.cx;
        cy = this.props.cy;
        radi = this.props.radius;
        circleCount = this.props.totOrbitCount;

        let planetObj = {
            "cx": cx,
            "cy": cy,
            "rad": radi,
            "deg": deg,
            "key": keyId,
        };
        planetArray.push(planetObj)
        this.plotPoint();
    };

    componentDidUpdate() {

    }

    render() {
        return (
            <PlanetGenerator
                rotatorArr={this.state.plArr}
                xpoint={this.state.x}
                ypoint={this.state.y}
            />
        )
    }

    plotPoint() {
        counter++;
        let newX = cx + radi * Math.cos(this.degToRad(deg)) - 10;
        let newY = cy + radi * Math.sin(this.degToRad(deg)) - 10;

        xPointerArray.push(newX);
        yPointerArray.push(newY);
        this.setState({x: newX, y: newY});
        this.spinPoint()

    }


    spinPoint() {
        intervalArr = [20, 10, 50, 5, 15, 90]
        for (let k = 0; k < planetArray.length; k++) {
            this.state.plArr.push(planetArray[k]);
            setInterval(this.newPlotPoint.bind(this, k), intervalArr[k])
        }

    }

    newPlotPoint = (m) => {
        let obj = this.state.plArr[m];
        let dg = obj.deg;
        if (dg <= 360) {
            dg++;
        }
        else dg = 0;

        let newX = obj.cx + obj.rad * Math.cos(this.degToRad(dg)) - 10;
        let newY = obj.cy + obj.rad * Math.sin(this.degToRad(dg)) - 10;

        let i = this.state.plArr.indexOf(obj);

        let newPlanetObj = {
            "cx": obj.cx,
            "cy": obj.cy,
            "rad": obj.rad,
            "deg": dg,
            "key": obj.key,
            "orbit": obj.orbit
        };

        this.state.plArr[i] = newPlanetObj;
        let arr = this.state.plArr;
        this.setState({plArr: arr});
        this.setState({x: newX, y: newY})

    }

    degToRad(deg) {
        return deg * Math.PI / 180;
    }
}

