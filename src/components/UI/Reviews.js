import React, { useEffect } from "react";
import "./Review.css";
import {
  fetchReviews,
  fetchReviewsFailure,
  fetchReviewsStart,
  fetchReviewsSuccess,
  selectOpenedMovieReview,
} from "../../reducers/currentWatchReducer"
import { useDispatch, useSelector } from "react-redux"
import { getReviews, getReviewsByFilm, getReviewsBySerial } from "../../services/request/reviews"
import { useParams } from "react-router-dom"

const Review = ({ review }) => {
  const imageUrl = review.author_details.avatar_path
  
  return (
    <div className="review">
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
    </div>
  )
}

const Reviews = ({ movie }) => {
  const dispatch = useDispatch()
  const id = useParams().id

  useEffect(() => {
    dispatch(fetchReviews(movie, id))
  }, []);

  const {list, loading, error} = useSelector(selectOpenedMovieReview)

  if(loading) {
    return <div>loading...</div>
  }
  return (
    <div >
      <h2>Reviews</h2>
      {list.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
