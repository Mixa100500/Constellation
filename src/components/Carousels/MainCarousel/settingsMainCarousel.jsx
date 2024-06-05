import { brakePointsMainCarouselPlaceHolder, getPopularCarouselBreakpoints } from "../../../helpers/generateBreakpoints";

export const settingMain = {
	dots: true,
	infinite: true,
	speed: 500,
	autoplaySpeed: 5000,
	centerMode: true,
	// autoplay: true,
	lazyLoad: true,
	// cssEase: 'linear',
	swipeToSlide: true,
	initialSlide: 10,
	slidesToShow: 2,
	slidesToScroll: 3,
	pauseOnHover: true,
	responsive: getPopularCarouselBreakpoints(),
}

export const settingMainPlaceHolder = {
  // dots: true,
	// infinite: true,
	// speed: 500,
	// autoplaySpeed: 5000,
	// centerMode: true,
	// autoplay: true,
	// lazyLoad: true,
	// cssEase: 'linear',
	// swipeToSlide: true,
	// initialSlide: 10,
	// slidesToShow: 2,
	// slidesToScroll: 3,
	// pauseOnHover: true,
	slidesToShow: 2,
	// centerPadding: '20px',
	// responsive: brakePointsMainCarouselPlaceHolder
}