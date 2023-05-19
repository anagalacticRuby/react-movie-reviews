//MovieList - A container for all the movie components and their data

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
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
        />
        <Movie
          title="Movie2"
          imageURL="Romance.png"
          summary="Movie 2 is about romance"
          alt="Alt2"
        />
        <Movie
          title="Movie3"
          imageURL="Funny.png"
          summary="Movie 3 is a comedy movie"
          alt="Alt3"
        />
      </div>
    );
  }
}
