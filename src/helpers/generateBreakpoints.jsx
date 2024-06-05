function getScrollbarWidth() {
  const div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);

  const scrollbarWidth = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);
  return scrollbarWidth;
}

export const scrollbarWidth = getScrollbarWidth()


function generateBreakpointsByPopularCarousel(start, end, step) {
	const breakpoints = []
	let padding = 276
	const width = 1048;
	const widthPhoto = width / 2;
	let isStart = true
	for (let i = start; i <= end; i += step) {
		if (!isStart) {
			padding += 200
		}
		const containers = Math.floor((i - 400) / width)
		breakpoints.push({
			breakpoint: i,
			settings: {
				slidesToShow: containers * 2,
				slidesToScroll: containers * 2,
				centerPadding: padding - (containers - 1) * widthPhoto + 'px',
			},
		})
		isStart = false
	}
	return breakpoints
}

export const brakePointsMainCarouselPlaceHolder = [
	{
		breakpoint: 400,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerPadding: '20px',
		},
	},
	{
		breakpoint: 552 + 17,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerPadding: '20px',
		},
	},
	{
		breakpoint: 1100,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			centerPadding: '20px',
		},
	},
	{
		breakpoint: 1200,
		settings: {
			centerPadding: '76px',
			slidesToScroll: 2,
			slidesToShow: 2,
		},
	},
]

export function getPopularCarouselBreakpoints() {

	
	return brakePointsMainCarouselPlaceHolder.concat(generateBreakpointsByPopularCarousel(1600, 10100, 400))
}

export function generateContainerStyles() {
	const baseWidth = 1200
	const step = 400
	const maxWidth = 10100

	let styles = ''

	for (let width = baseWidth; width <= maxWidth; width += step) {
		styles += `
      @media screen and (min-width: ${width + 1}px) {
				width: calc(${width + 400}px);
				position: relative;
				left: calc((${width + 400}px / 2 - (100vw - ${scrollbarWidth}px) / 2) * -1);
      }
    `
	}

	return styles
}