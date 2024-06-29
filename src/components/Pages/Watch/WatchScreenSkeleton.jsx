import "./WatchScreenSkeleton.css";

export const WatchScreenSkeleton = () => {
  return (
  <div className='layout__placeholder padding-vertical--md'>
    <div className="screen__wrapper">
        <div className='poster__placeholder'></div>
      <div className="player__wrapper">
        <div className='player__placeholder'></div>
      </div>
    </div>
  </div>
  );
};
