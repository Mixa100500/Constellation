import {
	GENRES_SERIALS_IDS,
	GENRES_SERIALS_OBJECT,
} from '../../../../constants/genres.js'
import { useCloseModal } from '../../../../context/ModalManagerProvider.jsx'
import { LinkHeader, ListGroup, Title } from '../../styled.jsx'


export const SerialsNav = () => {
	const AllIds = GENRES_SERIALS_IDS
	const byId = GENRES_SERIALS_OBJECT
	const SERIALS_URL = '/popular/serials'
	const close = useCloseModal()
	return (
		<>
			<LinkHeader
				to={SERIALS_URL}
				$dark={true}
				onClick={close}
			>
				All serials
			</LinkHeader>
			<ListGroup>
				<Title>Genres</Title>
				{AllIds.map((id) => (
					<LinkHeader
						to={`${SERIALS_URL}?genres=${id}`}
						$dark={true}
						$top={12}
						key={id}
						onClick={close}
					>
						{byId[id]}
					</LinkHeader>
				))}
			</ListGroup>
		</>
	)
}
