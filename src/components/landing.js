import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as ScrollMagic from 'scrollmagic';
import up from '../assets/up.png'
import down from '../assets/down.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../styleSheets/landing.css'
import {TimelineMax, Linear} from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import up from '../assets/up.png'
class Landing extends Component {

    componentDidMount(){
        var controller = new ScrollMagic.Controller();

        var horizontalMoveTl = new TimelineMax();
    
        horizontalMoveTl
            .to('.horizontal-container', 1, {x: '-66.6666%', ease:Linear.easeNone});
    
        var pinMainScene = new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0,
            duration: '300%'
        })
        .setTween(horizontalMoveTl)
        .addIndicators()
        .setPin('#main')
        .addTo(controller);
        var imageMover= new ScrollMagic.Scene({
            triggerElement:'#pic1'
        })
    
    }

    render() {
        return <div id="intro1">
        <div id="intro">
            <div className="content">
                <img src="img/img_scrollmagic-logo.png" />
                <h1>Saturnalia</h1>
                <p>North india's biggest Techno-culture fest</p>
            </div>
            <img id='pic1' src={up}></img>
        </div>

        <div id="main" className="main-container">
            
            <div className="horizontal-container">

                <div className="section-1 section-horizontal">
                    <div className="content">
                        <h2>Past things</h2>
                        <p>Jubin</p>
                    </div>
                </div>

                <div className="section-2 section-horizontal">
                    <div className="content">
                        <h2>Present things</h2>
                        <p>Lets go</p>
                    </div>
                </div>
                <div className="section-3 section-horizontal">
                    <div className="content">
                        <h2>Lets move</h2>
                        <p>connect to us</p>
                    </div>
                </div>
                

            </div>

        </div>

        <div id="outro">
            <div className="content">
                <img src="img/img_scrollmagic-logo.png" />
                <h1>The End</h1>
                <p>This is the end of our multi-direction ScrollMagic demo.</p>
            </div>
            
        </div>
       
        </div>
    }
}

export default Landing;
