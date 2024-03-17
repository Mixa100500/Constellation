import { DatePlaceholder, PlaceholderImg, PlaceholderDescription, TitlePlaceholder, PosterContainer } from "."

const ItemDesription = () => {
  return (
    <PlaceholderDescription>
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
				<ItemDesription/>
			</PosterContainer>
	)
}