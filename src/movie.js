import React from "react";
import ReviewList from "./review-list";
import ReviewForm from "./review-form";
import Review from "./review";

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.handleReview.bind(this);
        this.state = {
            reviews: ["foo", "bar", "fuzz"],
        }
    }

    handleReview(){

    }
    render(){
        //This component represents movie data
        //Stuff like cover image, synopsis, ratings, etc
        //Movie components will be rendered by MovieList
        //Meaning Movie components are children of MovieLists

        //Movies have an image, a title, a synopsis, a list of reviews, and a review form
        //Review forms are at the bottom of a movie component


        return(
        <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgURL} width="500px" height="500px" alt={this.props.alt}/>
        <p>{this.props.summary}</p>
        <ReviewList reviews={this.state.reviews}/>
        <ReviewForm onSubmit={this.state.handleReview}/>
        </div>
        );
    }
}