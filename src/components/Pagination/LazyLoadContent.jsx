import React from "react"
import { ScrollLoader } from "./ScrollLoader"

export const LazyLoadContent = ({hello, renderContent, loadingContent, isLoaded, fetchData, fallbackContent}) => {
	
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
	console.log('log', hello, contentCount)
	
  if (contentCount > 0) {
		console.log('content', content)
    return content
  }

  return fallbackContent()
}