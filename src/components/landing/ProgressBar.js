import React, { Component } from 'react'
import { Circle } from "rc-progress";
import '../../styleSheets/landing.css';

export default class ProgressBar extends Component {
  render() {
    return (
        <div className='progressBarContainer' style={{borderColor:'black'}}>
            <div>
                <h3 style={{height:'3vmax',fontSize:'3.5vmin',color:'black',marginBottom:'10px'}}>
                    {this.props.skillName}
                </h3>
            </div>
            <div style={{width:'7.5vmax'}}>
                <Circle trailColor='grey' percent={this.props.progress} strokeWidth="10" strokeColor="#D3D3D3"  />
            </div>

        </div>

    )
  }
}
