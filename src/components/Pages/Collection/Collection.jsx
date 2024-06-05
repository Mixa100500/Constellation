import Layout from '../../Layout/Layout'
import PaginationCollection from './PaginationCollection'
import { useParams } from 'react-router-dom'
import { H2 } from '../../../elements/H2'
import { Filter } from '../../../compositions/Filter/Filter'
import { ResizeProvider } from '../../../context/ResizeProvider'

const Collection = () => {
	const type = useParams().type

	return (
		<Layout>
			<Filter />
			<H2 $paddingTop='xl' $paddingBottom='xl' className='padding-horizontal'>{type}</H2>
			<ResizeProvider>
				<PaginationCollection />
			</ResizeProvider>
		</Layout>
	)
}


export default Collection
