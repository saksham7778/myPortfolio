import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as ScrollMagic from 'scrollmagic';
import up from '../assets/up.png'
import down from '../assets/down.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../styleSheets/home.css'
import {TweenMax, Power2,Power1, TimelineLite, TimelineMax} from "gsap/TweenMax";
export default class Home extends Component {

    componentDidMount(){
        var controller= new ScrollMagic.Controller();
        var element=document.getElementsByClassName("down1");
        console.log(element);
        var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20},
						{x: 300,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 60},
						{x: 620,	y: -60},
						{x: 500,	y: -100},
						{x: 380,	y: 20},
						{x: 500,	y: 60},
						{x: 580,	y: 20},
						{x: 620,	y: 15}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 660,	y: 20},
						{x: 800,	y: 130},
						{x: 1000 + 300,	y: -100},
					]
			}
		};
        // var tween=TweenMax()
		var tween = new TimelineMax()
			.add(TweenMax.to(element[0], 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to(element[0], 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to(element[0], 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

        //Create a scene
        // var Scene1=new ScrollMagic.Scene({
        //     triggerElement:element[0],
        //     triggerHook:0,
        //     duration:'800%'
        // })
        // .setClassToggle(element[0],'disappear')
        // .addTo(controller)
        var scene = new ScrollMagic.Scene({triggerElement: element, duration: 500, triggerHook:.5})
        .setPin(element[0])
        .setTween(tween)
        .addTo(controller);

    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
        
                <div id='1' className="down1">
                    <img src={down} />                
                </div>
                <div className="down2">
                    <img src={down} />                
                </div>
                <div className="right1">
                    <img src={right} />                
                </div>
                <div className="down3">
                    <img src={down} />                
                </div>
                
                
            </div>
        );
    }
}