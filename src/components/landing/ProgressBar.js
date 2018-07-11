import React, { Component } from 'react'
import { Circle } from "rc-progress";
import '../../styleSheets/landing.css';

export default class ProgressBar extends Component {
  render() {
    return (
        <div className='progressBarContainer' style={{border: '1px inset black'}}>
            <div style={{alignItems:'center'}}>
                <h3 style={{height:'3vmax',fontSize:'3.5vmin',color:'black',marginBottom:'20px',lineHeight:'2.6vmax',overflow:'visible'}}>
                    {this.props.skillName}
                </h3>
            </div>
            <div style={{width:'4vmax',margin:'0 auto'}}>
                <p style={{position:'fixed',alignSelf:'center',marginLeft:'1.2vmax',fontSize:'1.2vmax',color:'black'}}>{this.props.progress}</p>
                <Circle style={{alignSelf:'center'}} trailColor='grey' percent={this.props.progress} strokeWidth="10" strokeColor="black"  />
            </div>

        </div>

    )
  }
}
