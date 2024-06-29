import Layout from "../../components/Layout/Layout.jsx";
import { Filter } from '../../compositions/Filter/Filter.jsx'
import { HeaderCollection } from './HeaderCollection.jsx'
import { CollectionPathReset } from './CollectionPathReset.jsx'
import { FirstPage } from './FirstPage.jsx'
import { ResizeProvider } from '../../context/ResizeProvider.jsx'
import PaginationCollection from '../../compositions/Pagination/PaginationCollection.jsx'

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
