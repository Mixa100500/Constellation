import { DatePlaceholder, PlaceholderImg, PlaceholderDescription, TitlePlaceholder, PosterContainer } from "."

const ItemDescription = () => {
  return (
    <PlaceholderDescription style={{ height: '37px' }}>
      <TitlePlaceholder className="title" />
      <DatePlaceholder className="date" />
    </PlaceholderDescription>
  )
}

export const PosterCardPlaceholder = () => {

	return (
			<PosterContainer
				className='padding-horizontal padding-top'
      >
				<PlaceholderImg />
				<ItemDescription/>
			</PosterContainer>
	)
}