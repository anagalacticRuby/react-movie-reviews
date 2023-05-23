import React from "react";
import Stars from "./stars"

export default class Review extends React.Component{

    render(){
        return(
            <div>
            <Stars value={this.props.stars}/>
            <p>{this.props.reviewtext}</p>
            </div>
        );     
    }
}