import { Suspense, lazy } from 'react'
import { MobileNaVScreenSkeleton } from './Skeleton.jsx'

const Component = lazy(() => import('./Component.jsx'))

export const MobileNavScreen = () => {
	const skeleton = <MobileNaVScreenSkeleton />
	
	return (
		<Suspense fallback={skeleton}>
			<Component />
		</Suspense>
	)
}
