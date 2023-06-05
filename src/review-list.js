import React from "react";
import Review from "./review";

export default class ReviewList extends React.Component {
  //Store the reviews in an array for this project
  //Reviews are created using the review-form component
  //if the movie component passes down the review array as state, then it becomes props for reviewlist

  //1. Get reviewtext as props (this.props.reviews)
  //2. Get username as props (this.props.usernames)
  //3. Get star rating as props (this.props.ratings)

  //4. Store the data in some fashion
  //5 Use .map() to transform an array of data into list elements, which house a unique Review component
  //5a. Make sure to give the list elements a key attribute, since React needs them and it could be useful later
  //5b. For quick key values the index of an array could be used
  //6. Make sure that the .map() transformation happens within render() so that every rendering of this component will display all Reviews

  /* reviewMap = this.props.reviews.map(function (element, index) {
    return (
      <li key={index}>
        <Review
          key={index}
          reviewtext={element}
          username={this.props.usernames[index]}
          stars={this.props.ratings[index]}
        />
      </li>
    );
  }); */

  /* reviewMap is a later staged attempt to create a list of Review components,
  using all the data passed into review-list as props.
  HOWEVER, this code does not work because of how anonymous functions behave in javascript.
  Once the compiler enters the anonymous function, the keyword 'this' changes from whatever initially called the object into the GLOBAL 'this'.
  Meaning that it will call 'this' dot Window, because Window is the topmost level to call to.
  The result of this is that an error is thrown, since Window is not passing down any props to review-list.
  Therefore, the value will be undefined and when this component is rendered (or attempted to be rendered), errors will throw.
   See this article to get a better idea: https://stackoverflow.com/questions/8670877/this-value-in-javascript-anonymous-function
  */

  /*  reviewItems = this.props.reviews.map(items =>
      <li>
          <Review key={items} reviewtext={items}/>
      </li>); */

  //reviewItems no longer works because the props for review-list are initially empty
  //Meaning since this is outside of render() nothing gets created, since the review props are empty

  /* makeList(reviews, usernames, ratings) {
    for (var i=0; i <= reviews.length ;i++) {
      console.log(reviews[i] + " " + usernames[i] + " " + ratings[i] + "Length of array: " + reviews.length);
      return(
        <li key={i} className="REVIEW ITEM">
          <Review
            reviewtext={reviews[i]}
            username={usernames[i]}
            stars={ratings[i]}
          />
        </li>
      );
    }
  } */

  /* 
  The above block of code might be one way you can 'try' to render a list of Review objects,
  but upon running it you will realize that the page will only render the first object created by makeList.
  This is because the function will return before the counter variable 'i' gets incremented.
  Meaning it will always start at 0, and never increase.
  And as such, only the very first rating, username, and review text are pulled and used to create a Review component.
  */

  render() {
    let rating = this.props.ratings;
    let username = this.props.usernames;

    /* If we store the data in a variable in the render() method, they can be used later
    The reason this is relevant that the variables are initalized to the values passed down as props is because their values will update
    whenever a Movie component passes down new data as props to the review-list component 
    Later, an anonymous function is used for a map() array transformation, so I want my data to be stored somewhere
    while I am able to use 'this' to refer to the values currently being passed as props.*/

    return (
      <>
        {console.log(this.props.reviews)}
        {/* {this.reviewItems} */}
        {/* {this.reviewMap} */}

        {/* {this.makeList(this.props.reviews, this.props.usernames, this.props.ratings)} */}
        {this.props.reviews.map(function (element, index) {
          return (
            <div key={index}>
              <Review
                reviewtext={element}
                stars={rating[index]}
                username={username[index]}
              />
            </div>
          );
        })}
        {/* Because reviews are created with a username,rating, and text correlating to them,
         their index values will match between all three arrays. */}
        {console.log(this.props.ratings)}
      </>
    );
  }
}
