import React from "react";
import Stars from "./stars";
import Review from "./review";

export default class ReviewForm extends React.Component {
  //•	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews.
  // When submitted, the review should be added to the movie.
  //All this data can be stored in an array, no networking or database needed for this assignment.

  handleSubmit(){
    return(
        <Review />
    );
  }

  render() {
    return (
      <div className="reviewForm">
        <form>
          <label>
            Username:
            <input
              type="text"
              placeholder="Username here"
              name="username"
            ></input>
          </label>
          <br />

          <input
            type="text"
            placeholder="Review text here"
            name="review"
            size="30"
          ></input>
          <br />
          <Stars />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
