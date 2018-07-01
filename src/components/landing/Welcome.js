import React, { Component } from 'react'
/**
 *  Props:-
 *      title
 *      tagline
 *      handleOnLoadImage
 *      logo
 * 
 *  Use As:-
        <Welcome
            title=''
            tagline=''
            handleOnLoadImage=''
            logo=''
        />
 *          
 */
export default class Welcome extends Component {
    render() {
        return (
            <div id="intro">
                <div className="content">
                    <img id='logo'
                        onLoad={
                            this.props.handleOnLoadImage
                        }
                        src={this.props.logo} />
                    <h1>{this.props.title}</h1>
                    <p>{this.props.tagline}</p>
                </div>
            </div>
        )
    }
}
