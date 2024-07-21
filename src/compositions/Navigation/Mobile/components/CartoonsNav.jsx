import { useCloseModal } from '../../../../context/ModalManagerProvider.jsx'
import { LinkHeader } from '../../styled.jsx'

export const CartoonsNav = () => {
	const CARTOONS_URL = '/popular/movies?genres=16'
	const close = useCloseModal()

	return (
		<>
			<LinkHeader
				to={CARTOONS_URL}
				$dark={true}
				onClick={close}
			>
				All cartoons
			</LinkHeader>
		</>
	)
}
