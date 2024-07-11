import Layout from "../../components/Layout/Layout.jsx";
import { Filter } from '../../compositions/Filter/Filter.jsx'
import { HeaderCollection } from './Composition/HeaderCollection.jsx'
import { CollectionPathReset } from './Composition/CollectionPathReset.jsx'
import { FirstPage } from './Composition/FirstPage.jsx'
import { ResizeProvider } from '../../context/ResizeProvider.jsx'
import PaginationCollection from '../../compositions/Pagination/PaginationCollection.jsx'
import { LazyParamsProvider } from "../../context/PageSearchParamProvider.jsx";

const Collection = () => {
	return (
		<Layout>
			<Filter />
			<HeaderCollection />
			<ResizeProvider>
				<LazyParamsProvider>
					<FirstPage />
					<PaginationCollection />
					<CollectionPathReset />
				</LazyParamsProvider>
			</ResizeProvider>
		</Layout>
	)
}



export default Collection
