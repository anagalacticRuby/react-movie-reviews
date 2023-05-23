//MovieList - A container for all the movie components and their data

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie1: {reviews: ["foop", "bar", "buzz"], rating: 3},
            movie2: {reviews: [], rating: 4},
            movie3: {reviews: ["test1", "test3"], rating: 1},
        }
    }

  render() {
    //This component should render Movie components
    //Those Movie components have their own data
    //At a minimum, this component must render Movies, which will house their own data
    return (
      <div>
        <Movie
          title="Movie1"
          imageURL="Action.png"
          summary="This is a cool Movie"
          alt="Alt1"
          reviews={this.state.movie1.reviews}
          rating={this.state.movie1.rating}
        />
        <Movie
          title="Movie2"
          imageURL="Romance.png"
          summary="Movie 2 is about romance"
          alt="Alt2"
          reviews={this.state.movie2.reviews}
          rating={this.state.movie2.rating}
        />
        <Movie
          title="Movie3"
          imageURL="Funny.png"
          summary="Movie 3 is a comedy movie"
          alt="Alt3"
          reviews={this.state.movie3.reviews}
          rating={this.state.movie3.rating}
        />
      </div>
    );
  }
}
