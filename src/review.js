import React from "react";
import Stars from "./stars"

export default class Review extends React.Component{
/**
 * Review components simply display a star rating, the user who posted a review, and the text of that review
 */
    render(){
        return(
            <div className="review">
            <p><i>{this.props.username}</i> <Stars value={this.props.stars}/></p>
            <p>{this.props.reviewtext}</p>
            </div>
        );     
    }
}