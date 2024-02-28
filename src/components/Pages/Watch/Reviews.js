import React, { useEffect } from "react";
import {
  fetchReviews,
  selectOpenedMovieReview,
} from "../../../reducers/currentWatchReducer"
import { useDispatch, useSelector } from "react-redux"
import { Review } from "./styled";
import { ScrollLoader } from "../../Pagination/ScrollLoader";
import { useParams } from "react-router-dom";

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
        <p className="review__content">{review.content}</p>
        <p>Rating: {review.author_details.rating}</p>
      </div>
    </Review>
  )
}

const Reviews = (props) => {
  const isMovie = props.isMovie
  const id = useParams().id
  const {list, loaded, error} = useSelector(selectOpenedMovieReview)
  const query = { isMovie, id }
  const dispatch = useDispatch()

  return (
    <div >
        <h2 $paddingTop='xl' $paddingBottom='xl'>Reviews</h2>
        {!loaded ? 
          <ScrollLoader fetchData={fetchReviews} query={query}>
            <div>loading...</div> 
          </ScrollLoader>
          : 
          list.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))
        }
    </div>
  );
};

export default Reviews;
