import Layout from '../../Layout/Layout'
import Article from './Article'
import { useParams } from 'react-router-dom'
import { H2 } from '../../../elements/H2'
import { Filter } from '../../../compositions/Filter/Filter'

const Collection = () => {
	const type = useParams().type

	return (
		<Layout>
			<Filter />
			<H2 $paddingTop='xl' $paddingBottom='xl' className='padding-horizontal'>{type}</H2>
			<Article />
		</Layout>
	)
}


export default Collection
