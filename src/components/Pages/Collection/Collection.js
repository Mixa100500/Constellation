import React, { useEffect } from 'react'
import Layout from '../../Layout/Layout'
import { HeightProvider } from '../../../context/height'
import Article from './Acticle'
import { useParams } from 'react-router-dom'
import { RefProvider } from '../../../context/ref'
import { H2 } from '../../../elements/H2'

const Collection = () => {
	const type = useParams().type

	return (
		<Layout>
			<H2 $paddingTop='xl' $paddingBottom='xl' className='padding-horizontal'>{type}</H2>
			<HeightProvider>
				<RefProvider>
					<Article />
				</RefProvider>
			</HeightProvider>
		</Layout>
	)
}

export default Collection
