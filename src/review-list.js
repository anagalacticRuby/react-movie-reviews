import React from "react";
import Review from "./review";
import Stars from "./stars";

export default class ReviewList extends React.Component {
  //Store the reviews in an array for this project
  //Reviews are created using the review-form component
  //if the movie component passes down the review array as state, then it becomes props for reviewlist

    reviewMap = this.props.reviews.map(function(element, index) {
        return(<li key={index}>
            <Review key={index} reviewtext={element}/>
        </li>);
    })
//    reviewItems = this.props.reviews.map(items =>
//     <li>
//         <Review key={items} reviewtext={items}/>
//     </li>);
  render() {
    return (
      <ul>
        {console.log(this.props.reviews)}
        {/* {this.reviewItems} */}
        {this.reviewMap}
      </ul>
    );
  }
}
