import React from "react";
import ReviewList from "./review-list";
import ReviewForm from "./review-form";
import Stars from "./stars";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.handleReview = this.handleReview.bind(this);
    this.addReview = this.addReview.bind(this);
    this.state = {
      usernames: [],
      reviews: [],
      ratings: [],
    };
    /**
     * I chose to store the keys of state as arrays, because it is easier to manage and less of a headache compared to dealing with
     * objects containing objects.
     */
  }

  addReview(review) {
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review.reviewText],
      usernames: [...prevState.usernames, review.username],
      ratings: [...prevState.ratings, review.rating],
    }));
    /**
     * One by one, the value of the Movie component's state will be set and the new values are passed in.
     * the use of '...' is the spread operator, and it is integral to making sure old values are retained each time
     * that the state is updated, since they are required for maintaining data.
     * Using push() or unshift() isn't recommended for state since it's mutable, instead using the spread operator is suggested
     *
     * addReview accepts review as a parameter, and because javaScript is loosely typed it is possible for this method
     * to call on properties that we may not be able to guarantee that review has. Should those values not exist,
     * then the state will not be updated properly.
     * For example, if review.rating was instead review.ratings, then the value of the state.ratings would be undefined.
     * This would cause the rendering of review-list to not display the ratings of reviews created by users.
     * Check out this page for some help: https://react.dev/learn/updating-arrays-in-state
     */
  }

  handleReview(review) {
    this.addReview(review);
  }

  render() {
    //This component represents movie data
    //Stuff like cover image, summary, ratings, etc
    //Movie components will be rendered by MovieList
    //Meaning Movie components are children of MovieLists

    //Movies have an image, a title, a summary, a list of reviews, and a review form
    //Review forms are at the bottom of a movie component

    /**
     * Movies must be parents of review-list components and review-form components, so that the state can be shared to both components
     * This is because state needs to be "lifted up" in order to get passed down and shared.
     * React has unidirectional data flow, meaning it is one way. What you pass down can only be passed back up, and nothing extra.
     * This means whatever you want to modify needs to be passed down (preferably with some means to also modify it) if you want to change it
     */
    console.log(this.state);
    return (
      <div className="wrapper">
        <header className="header">
          <h1>{this.props.title} <Stars value={this.props.rating} /></h1>
        </header>
        <article className="main">
          <h2>Summary</h2>
          <p>{this.props.summary}</p>
        </article>
        <aside className="aside image-aside">
          <img
            src={this.props.imageURL}
            width="300px"
            height="450px"
            alt={this.props.alt}
          />
        </aside>
        <aside className="aside review-aside">
          <ReviewForm onSubmit={this.handleReview} />
        </aside>
        <footer className="footer">
          <h3>Reviews</h3>
          <hr/>
          <ReviewList
            reviews={this.state.reviews}
            usernames={this.state.usernames}
            ratings={this.state.ratings}
          />
        </footer>
      </div>
    );
  }
}
