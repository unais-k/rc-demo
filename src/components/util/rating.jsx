import React from 'react';
import RatingStars from 'react-rating-stars-component';

const RatingComponent = () => {
  return (
    <RatingStars
      count={5}
      onChange={(newRating) => console.log(newRating)}
      size={15}
      color="#ffd700"
      activeColor="#faad14"
      isHalf={true}
      value={2.5}
      spacing={15}
      
    />
  );
};

export default RatingComponent;
