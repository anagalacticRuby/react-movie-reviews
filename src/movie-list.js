//MovieList - A container for all the movie components and their data

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
  render() {
    //This component should render Movie components
    //Those Movie components have their own data
    //At a minimum, this component must render Movies, which will house their own data

    /**
     * Movie-Lists are the topmost parent for this React website
     * Their direct children are Movie components, since a movie list will render Movie components.
     * The ratings, summary, imageURL, and title are hard coded because it was easier to manage and get started with
     * Future iterations of a project like this could have functionality 
     * for users to add more movies to the list of movies, or delete them???
     */
    return (
      <div>
        <Movie
          title="Movie1"
          imageURL="Action.png"
          summary="This is a cool Movie"
          alt="Alt1"
          rating={3}
        />
        <Movie
          title="Movie2"
          imageURL="Romance.png"
          summary="Movie 2 is about romance"
          alt="Alt2"
          rating={4}
        />
        <Movie
          title="Movie3"
          imageURL="Funny.png"
          summary="Movie 3 is a comedy movie"
          alt="Alt3"
          rating={3}
        />
      </div>
    );
  }
}
