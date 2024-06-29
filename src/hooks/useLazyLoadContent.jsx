import React from "react"
import { ScrollLoader } from "../compositions/Pagination/ScrollLoader.jsx"

export const useLazyLoadContent = ({renderContent, loadingContent, isLoaded, fetchData, fallbackContent}) => {

	if(!isLoaded && fetchData) {
		return <ScrollLoader fetchData={fetchData}>
			{loadingContent()}
		</ScrollLoader>
	}
	
	if(!isLoaded) {
		return loadingContent()
	}
	
	if(!fallbackContent) {
		return renderContent()
	}
	
	const content = renderContent()
	const contentCount = React.Children.count(content)
	
  if (contentCount > 0) {
    return content
  }

  return fallbackContent()
}