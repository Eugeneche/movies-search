import React from 'react';
import StarRatings from 'react-star-ratings';
 
class Bar extends React.Component {
  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        numberOfStars={10}
        starDimension="13px"
        starSpacing="1px"
        starRatedColor="#ffd700"
        starEmptyColor="#69696991"
      />
    );
  }
}

export default Bar;