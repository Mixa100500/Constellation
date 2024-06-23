import Layout from '../../Layout/Layout.jsx'
import PaginationCollection from './PaginationCollection.jsx'
import { Filter } from '../../../compositions/Filter/Filter.jsx'
import { ResizeProvider } from '../../../context/ResizeProvider.jsx'
import { HeaderCollection } from './HeaderCollection.jsx'
import { CollectionPathReset } from './CollectionPathReset.jsx'
import { FirstPage } from './FirstPage.jsx'

const Collection = () => {
	return (
		<Layout>
			<Filter />
			<HeaderCollection />
			<ResizeProvider>
				<FirstPage />
				<PaginationCollection />
			</ResizeProvider>
			<CollectionPathReset />
		</Layout>
	)
}


export default Collection
