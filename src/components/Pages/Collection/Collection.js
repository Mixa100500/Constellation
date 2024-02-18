import React, { useEffect } from 'react'
import Layout from '../../Layout'
import { initializeCollection } from '../../../reducers/displayCollectionReducer'
import { useDispatch } from 'react-redux'
import { HeightProvider } from '../../../context/height'
import Article from './Acticle'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { RefProvider } from '../../../context/ref'
import { H2 } from '../../../elements/H2'

const CollectionContainer = styled.div`
	.card-img {
		transition: transform 0.3s;
		transform-origin: bottom;

		max-width: 100%;
		aspect-ratio: 2 / 3;
		border-radius: 8px;
	}
`

const Collection = () => {
	const type = useParams().type

	return (
		<CollectionContainer className='collection'>
			<Layout>
				<H2 $verticalPadding={true} className='padding-horizontal'>{type}</H2>
				<HeightProvider>
					<RefProvider>
						<Article />
					</RefProvider>
				</HeightProvider>
			</Layout>
		</CollectionContainer>
	)
}

export default Collection
