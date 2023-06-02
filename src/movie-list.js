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
        <div className="introduction">
          <h1>Welcome to Movie Reviews!</h1>
          <p>
            This website allows users to view info on some movies and leave
            reviews on them. <br />
            <i>Movie info obtained from themoviedb.org</i>
          </p>
        </div>
        <Movie
          title="The Matrix"
          imageURL="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
          summary="Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."
          alt="A poster for The Matrix movie"
          rating={5}
        />
        <Movie
          title="Beauty and the Beast"
          imageURL="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6DDJ8o2d6T4fpGWECLF4xBGTyAM.jpg"
          summary="The Beauty and the Beast is about a woman named Belle who falls in love with a prince who has been cursed to become a beast. As she spends more time in his castle, Belle learns a valuable lesson -- that true beauty comes from within."
          alt="A poster for the movie Beauty and the Beast"
          rating={4}
        />
        <Movie
          title="Shrek 2"
          imageURL="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg"
          summary="Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage."
          alt="A poster for Shrek 2 the movie"
          rating={3}
        />
      </div>
    );
  }
}
