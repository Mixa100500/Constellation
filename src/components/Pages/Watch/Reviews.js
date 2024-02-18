import React, { useEffect } from "react";
import {
  selectOpenedMovieReview,
} from "../../../reducers/currentWatchReducer"
import { useSelector } from "react-redux"
import { Review } from "./styled";

const ReviewItem = ({ review }) => {
  return (
    <Review className="review">
      <div className="review__icon-contrainer">
        <div className="review__icon-content">
          <div className="review__icon">
          </div>
          <div className="review__icon-text">
            {review.author[0]}
          </div>
        </div>
      </div>
      <div className="review__text">
        <h3 className="review__author">{review.author}</h3>
        <p>{review.content}</p>
        <p>Rating: {review.author_details.rating}</p>
      </div>
    </Review>
  )
}

const Reviews = () => {
  const {list, loading, error} = useSelector(selectOpenedMovieReview)

  if(loading) {
    return <div>loading...</div>
  }

  return (
    <div >
      <h2>Reviews</h2>
      {list.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
