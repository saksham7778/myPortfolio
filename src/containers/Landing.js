import React, { Component } from 'react';
import '../App.css';
import '../styleSheets/landing.css'
import * as ScrollMagic from 'scrollmagic';
import { up, endAnimation, land, right, logoPNG, logoSVG, cityBackground } from '../assets'
import { TimelineMax, Linear, TweenMax, Power1, Power3, Power4, Power0, Power2 } from "gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import { HorizontalSection, LoadingScreen, Welcome } from "../components";
import * as loadingAnim from '../assets/loadingAnim.json'

export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image1Loaded: false,
            image2Loaded: false,
            image3Loaded: false,
            image4Loaded: false,
            image5Loaded: false,
            image6Loaded: false,
        }
    }
    assetsAreLoaded() {
        if (
            this.state.image1Loaded &&
            this.state.image2Loaded &&
            this.state.image3Loaded &&
            this.state.image4Loaded &&
            this.state.image5Loaded &&
            this.state.image6Loaded
        ) {
            return true;
        }
        return false;
    }
    handleAssetLoad1() { this.setState({ image1Loaded: true }) }
    handleAssetLoad2() { this.setState({ image2Loaded: true }) }
    handleAssetLoad3() { this.setState({ image3Loaded: true }) }
    handleAssetLoad4() { this.setState({ image4Loaded: true }) }
    handleAssetLoad5() { this.setState({ image5Loaded: true }) }
    handleAssetLoad6() { this.setState({ image6Loaded: true }) }
    componentDidMount() {
        var controller = new ScrollMagic.Controller();

        var horizontalMoveTl = new TimelineMax();

        Math.round(10 * 100) / 100
        horizontalMoveTl
            .to('.horizontal-container', 1, { x: '-66.6666%', ease: Power4.ease, delay: 0.1, lazy: true });

        var blurScene = TweenMax.to('img.main-background1', 0.1, { 'filter': 'blur(' + Math.round(20 * 100) / 100 + ')', ease: Power4.easeInOut })

        var antiBlurScene = TweenMax.to('img#landpng', 0.1, { 'filter': 'blur(' + 0 + ')', ease: Power4.easeInOut })

        var addBGOpacityTween = TweenMax.to('img.main-background2', 0.1, { 'opacity': 1, ease: Power1.easeNone })
        var removeBGOpacityTween = TweenMax.to('img.main-background1', 0.1, { 'opacity': 0, ease: Power1.easeNone })
        var removeOpacityTween = TweenMax.to('img#landpng', 0.1, { 'opacity': 0, ease: Power1.easeNone })
        var removeBlurTween = TweenMax.to('#intro-main', 0.1, { 'filter': 'blur(' + Math.round(0 * 100) / 100 + ')', ease: Power1.easeNone })

        new ScrollMagic.Scene({
            triggerElement: '#outro.one',
            triggerHook: 1,
            duration: '201%'
        }).setTween(removeBGOpacityTween)
            // .addIndicators()
            .addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: '#outro.one',
            triggerHook: 1,
            duration: '201%'
        }).setTween(addBGOpacityTween)
            // .addIndicators()
            .addTo(controller);

        // new ScrollMagic.Scene({
        //     triggerElement: '#outro.one',
        //     triggerHook: 1,
        //     duration: '201%'
        // }).setClassToggle('#intro-main', 'changeBackground').addTo(controller);



        new ScrollMagic.Scene({
            triggerElement: '#outro',
            triggerHook: 1,
            duration: '100%'
        })
            .setTween(removeOpacityTween)
            // .addIndicators('blurrrrrrrrrrrrrrrrr')
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0.2,
            duration: '100%'
        })
            .setTween(antiBlurScene)
            // .addIndicators('blurrrrrrrrrrrrrrrrr')
            .addTo(controller);


        new ScrollMagic.Scene({
            triggerElement: '#main',
            triggerHook: 0.9,
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
        // var imageMover= new ScrollMagic.Scene({
        //     triggerElement:'#pic1'
        // })

    }

    render() {
        return <div id="intro1">
            {!this.assetsAreLoaded() ?
                <LoadingScreen /> : <div />}
            <div id="intro-main" className='initialBackground'>
                <img className='main-background1' src={cityBackground} onLoad={() => this.handleAssetLoad5()} />
                <img className='main-background2' src={endAnimation} onLoad={() => this.handleAssetLoad6()} />
            </div>
            <Welcome
                title='Saturnalia'
                tagline="North India's biggest Techno-culture fest"
                handleOnLoadImage={() => this.handleAssetLoad1()}
                logo={logoPNG}
            />

            <div id="main" className="main-container">

                <div className="horizontal-container">

                    <HorizontalSection
                        containerClass='section-1 section-horizontal'
                        heading='Past things'
                        paragraph='Jubin'
                        handleOnLoad={() => this.handleAssetLoad2()}
                        bottomImage={land}
                    />
                    <HorizontalSection
                        containerClass='section-2 section-horizontal'
                        heading='Present things'
                        paragraph='Lets go'
                        handleOnLoad={() => this.handleAssetLoad3()}
                        bottomImage={land}
                    />
                    <HorizontalSection
                        containerClass='section-3 section-horizontal'
                        heading='Lets move'
                        paragraph='connect to us'
                        handleOnLoad={() => this.handleAssetLoad4()}
                        bottomImage={land}
                    />


                </div>

            </div>

            <div id="outro" className='one'>
                <div className="content">
                    <h1>Global odyssey</h1>
                    <p>Coming Soon...</p>
                </div>

            </div>
            <div id="outro" className='two'>
                {/* <img id='anim'src={anim} /> */}
            </div>

        </div>
    }
}

