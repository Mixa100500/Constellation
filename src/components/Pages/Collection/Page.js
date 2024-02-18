import { CollectionList } from './styled'
import Card from '../../Carousels/MediaCarousel/Card'

export const Page = ({ pageList }) => {
	return (
		<CollectionList>
			{pageList.map((info) => (
				<Card
					film={info}
					key={info.id}
				/>
			))}
		</CollectionList>
	)
}
