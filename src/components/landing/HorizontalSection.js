import React, { Component } from 'react'



/**
 *  Props:-
 *      containerClass
 *      heading
 *      paragraph
 *      handleOnLoad
 *      bottomImage
 * 
 *  Use As:-
        <HorizontalSection
        containerClass=''
        heading=''
        paragraph=''
        handleOnLoad=''
        bottomImage=''
        />
 *          
 */

export default class HorizontalSection extends Component {
    render() {
        return (
            <div className={this.props.containerClass}>
                <div className="content">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.paragraph}</p>
                </div>
                <img
                    id='landpng'
                    onLoad={
                        this.props.handleOnLoad
                    }
                    src={this.props.bottomImage} />
            </div>
        )
    }
}
