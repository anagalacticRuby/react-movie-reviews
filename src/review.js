import React from "react";
import Stars from "./stars"

export default class Review extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
            <Stars value={this.props.stars}/>
            <p>{this.props.reviewtext}</p>
            <p>Whatever the user inputs here</p>
            </div>
        );     
    }
}