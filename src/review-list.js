import React from "react";
import Review from "./review";
import Stars from "./stars";

export default class ReviewList extends React.Component {
  //Store the reviews in an array for this project
  //Reviews are created using the review-form component
  constructor(props) {
    super(props);
    //if the movie component passes down the review array as state, then it becomes props for reviewlist
  }

   reviewItems = this.props.reviews.map(items =>
    <li>
        <Review reviewtext={items.reviews}/>
    </li>);
  render() {
    return (
      <ul>
        {console.log(this.props.reviews)}
        {this.reviewItems}
        <Review reviewtext={this.props.reviews} />
      </ul>
    );
  }
}
