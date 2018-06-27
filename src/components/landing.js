import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as ScrollMagic from 'scrollmagic';
import up from '../assets/up.png'
import land from '../assets/land.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../styleSheets/landing.css'
import {TimelineMax, Linear, TweenMax, Power1, Power3, Power4, Power0, Power2} from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
// import up from '../assets/up.png'
class Landing extends Component {

    componentDidMount(){
        var controller = new ScrollMagic.Controller();

        var horizontalMoveTl = new TimelineMax();
    
        
        horizontalMoveTl
        .to('.horizontal-container', 0.001, {x: '-66.6666%', ease:Power2.easeInOut});
        
        var blurScene=TweenMax.to('#intro-main',0.1,{'filter':'blur(10px)',ease:Power1.easeNone})

        
        new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 1,
            duration: '100%'
        })
        .setTween(blurScene)
        // .addIndicators('blurrrrrrrrrrrrrrrrr')
        .addTo(controller);

        var pinMainScene = new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0,
            duration: '300%'
        })
        .setTween(horizontalMoveTl)
        // .addIndicators()
        .setPin('#main')
        .addTo(controller);
        var imageMover= new ScrollMagic.Scene({
            triggerElement:'#pic1'
        })
    
    }

    render() {
        return <div id="intro1">
        <div id="intro-main">

        </div>
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
                        <img id='landpng' src={land}/>
                </div>

                <div className="section-2 section-horizontal">
                    <div className="content">
                        <h2>Present things</h2>
                        <p>Lets go</p>
                    </div>
                        <img id='landpng' src={land}/>
                </div>
                <div className="section-3 section-horizontal">
                    <div className="content">
                        <h2>Lets move</h2>
                        <p>connect to us</p>
                    </div>
                        <img id='landpng' src={land}/>
                </div>
                

            </div>

        </div>

        <div id="outro">
            <div className="content">
                <img src="img/img_scrollmagic-logo.png" />
                <h1>Global odyssey</h1>
                <p>Coming Soon...</p>
            </div>
            
        </div>
               
        </div>
    }
}

export default Landing;
