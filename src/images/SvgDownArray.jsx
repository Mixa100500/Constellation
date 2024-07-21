export const SVGDown = ({ fill, className, styled, ...rest }) => {
	const Svg = styled || 'svg'

	return (
		<Svg
			{...rest}
			className={className}
			viewBox='0 0 604 159'
			fill='white'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill={fill}
				d='M304 77L1 1V77L304 158L603 77V1L304 77Z'
				stroke='white'
			/>
		</Svg>
	)
}
