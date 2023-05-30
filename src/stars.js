import React from "react";

export default class Stars extends React.Component{
    //All stars do is display the number of stars a user rated a movie
    render(){
        return(
            <>
            <small>({this.props.value} ⭐)</small>
            </>
        );
    }
}