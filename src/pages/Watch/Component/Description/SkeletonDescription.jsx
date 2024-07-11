import { DescriptionHeader } from '../../styled.jsx'

export const SkeletonDescription = () => {
	return (
		<>
			<DescriptionHeader>episodes:</DescriptionHeader>
			<div>loading</div>
			<DescriptionHeader>seasons:</DescriptionHeader>
			<div>loading</div>
			<DescriptionHeader>runtime:</DescriptionHeader>
			<div>loading min</div>
		</>
	)
}