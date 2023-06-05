import React from "react";

export default class ReviewForm extends React.Component {
  //•	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews.
  // When submitted, the review should be added to the movie.
  //All this data can be stored in an array, no networking or database needed for this assignment.

  /* First, Movie component passes down its state information to review-form as props.
  Movie component also passes down onSubmit, which will be accessed as this.props.onSubmit
  Information will be returned by passing arguments into a call of this.props.onSubmit

  State is set for review-form so that this component can track changes in the form element
  And store them locally, and later pass the collected data as an argument to this.props.onSubmit
  It is important that this form does not refresh the page upon submission, otherwise everything is lost.
  
  Once data is passed back up to the Movie component, it can then use it to re-render and modify the review-list compontent.
  So in this sense, review-form AND review-list are children of Movie, because state is lifted to the common ancestor component
  Which in this case is Movie. 
  
  The following articles helped me out the most while creating the code for this component:
  https://legacy.reactjs.org/docs/forms.html (Do NOT go to the modern page, if you are using class components)
  https://legacy.reactjs.org/docs/lifting-state-up.html (Useful for class or functional components to understand state more)
  */

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      reviewText: "",
      rating: "",
    };
    this.handleReview = this.handleReview.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    /**
     * handleInputChange is called whenever the value of any input is changed within a form.
     * Then, the state of the review-form component is set to the new value of whatever the user has input, one by one.
     * It may look strange but the reason variables are spread out like this is because not all of the input types are the same.
     *
     * Using event handlers for onChange makes this component a controlled component
     */
  }

  handleReview() {
    console.log(this.state);
    console.log("returning a review...");
    this.props.onSubmit(this.state);
    /* It must be noted that this.props.onSubmit refers to the event handler passed to this component as props
    Even though you may think that the onSubmit being passed down refers to the onSubmit of a form,
    They are two different functions.
    Here, the current value of the state of the review-form component will be returned up to the parent component, Movie.
    The value of state is being returned as an object with string values that correlate to properties of a review.
    This is done intentionally so the flow of information is more clear to read and so that it's more consistent. */
  }

  render() {
    return (
      <div className="reviewForm">
        <h3>Create a review</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault(); //preventDefault makes sure the page doesn't refresh when the form is submitted
            this.handleReview(); //then, after preventDefault is called, handleReview() is called once the form is submitted
          }}
        >
          <label htmlFor="username">Username:&nbsp;</label>
          <input
            type="text"
            placeholder="Username here"
            name="username"
            id="username"
            value={this.state.value}
            onChange={this.handleInputChange}
            required
          ></input>
          <br />
          <label htmlFor="reviewtext">Review Text:</label>
          <textarea
            placeholder="Review text here"
            name="reviewText"
            rows="5"
            id="reviewtext"
            value={this.state.value}
            onChange={this.handleInputChange}
            required
          ></textarea>
          <br />
          <label htmlFor="rating">Movie Rating: (1-5 only)</label>
          <br />
          <input
            type="number"
            min="1"
            max="5"
            name="rating"
            id="rating"
            value={this.state.value}
            onChange={this.handleInputChange}
            required
          ></input>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
