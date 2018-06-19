import React, {Component} from 'react';
import $ from 'jquery';

// import me from '../assets/img/me.JPG';
// import resume from '../assets/resume.docx';

class Header extends Component {
    toggleNavigation () {
        if( $(document).scrollTop() > (  $(".introSlide").height() - $("#header-main").height() ) ){
            $("#nav-toggle").toggleClass("active");
            $("#navigation").toggleClass("active");
        } else {
            $(document).scrollTop(0)
            $("#header-main").toggleClass("active");
            $("#nav-toggle").toggleClass("active");
            $("#navigation").toggleClass("active");
        }

    }
    goTo(t){
        document.getElementById(t).scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } 
    constructor(props){
      super(props);
      this.state = {};
      this.goTo = this.goTo.bind(this);
      this.toggleNavigation = this.toggleNavigation.bind(this);
    };
render(){
return(
<div>
        
    <div id="header-main" className="has-text-centered">
        <div className="columns">
            <div className="column is-hidden-mobile">
                <a onClick={()=>this.goTo('infoSlide')}>About</a>
            </div>
            <div className="column is-hidden-mobile">
                <a onClick={()=>this.goTo('projectsSlide')}>Projects</a>
            </div>
            <div className="column is-hidden-mobile">
                <a href="/contact">Contact</a>
            </div>
            <div className="column is-pulled-right" onClick={this.toggleNavigation}>
                <a id="nav-toggle">
                    <span></span>
                    <span></span>
                </a>
            </div>
        </div>
    </div>

    <div id="navigation">
        <div className="columns has-text-centered">
            <div className="column">
                <h1>John Díaz</h1>
            </div>
        </div>
        <ul>
            <li>
                <a href="/contact">Say hi</a>
            </li>
            <li>
                <a href="https://Github.com/JohnCdf">Github</a>
            </li>
            <li>
                <a href="/blogs">Blog</a>
            </li>
            <li>
                <a href={null} download>Resume</a>
            </li>
        </ul>   
    </div>
</div>
);
}
};

export default Header;