import React from "react";

export default class Stars extends React.Component{
    render(){
        return(
            <>
            <small>({this.props.rating} ⭐)</small>
            </>
        );
    }
}