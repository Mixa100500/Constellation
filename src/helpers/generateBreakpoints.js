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

const scrollbarWidth = getScrollbarWidth()

function generateBreakpoints(start, end, step, slidesIncrement, slidesToShow = 1, isCentered = false) {
  const breakpoints = [];
  for (let i = start + 18; i <= end; i += step, slidesToShow += slidesIncrement) {
    breakpoints.push({
      breakpoint: i,
      settings: {
        slidesToShow: slidesToShow,
      },
    });
  }
  return breakpoints;
}

export default generateBreakpoints;