import React, { useEffect } from 'react'
import Layout from '../../UI/Layout'
import { initializeCollection } from '../../../reducers/displayCollectionReducer'
import { useDispatch, useSelector } from 'react-redux'
import { HeightProvider } from '../../context/height'
import Article from './Acticle'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const CollectionContainer = styled.div`
	.card-img {
		transition: transform 0.3s;
		transform-origin: bottom;

		max-width: 100%;
		aspect-ratio: 2 / 3;
		border-radius: 8px;
	}
`

const CollectionHeader = styled.h2`
	padding-left: 8px;

	@media screen and (min-width: 1101px) {
		padding-left: 12px;
	}
`

const Collection = () => {
	const dispatch = useDispatch()
	const type = useParams().type

	useEffect(() => {
		dispatch(initializeCollection(type))
	}, [])

	return (
		<CollectionContainer className='collection'>
			<Layout dark={true}>
				<CollectionHeader>{type}</CollectionHeader>
				<HeightProvider>
					<Article />
				</HeightProvider>
			</Layout>
		</CollectionContainer>
	)
}

export default Collection
