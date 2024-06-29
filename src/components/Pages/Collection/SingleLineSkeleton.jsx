import { createArray } from "../../../helpers/simple.jsx"


const skeletons = createArray(6)

export const SingleLineSkeleton = () => {
  return (
		<div className='layout-placeholder'>
			{/* <div className='padding-horizontal'>
				<div className='media-carousel-placeholder__header-placeholder'>
				</div>
			</div> */}
		
		<div className='media-carousel-placeholder__container'>
			{skeletons.map((item) => (
				<div key={item} className='media-carousel__slide-container-placeholder padding-horizontal padding-top'>
					<div className='media__slide__placeholder-content'></div>
					<div className='title__placeholder'></div>
					<div className='date__placeholder'></div>
				</div>
			))}
		</div>
	</div >
  )
}