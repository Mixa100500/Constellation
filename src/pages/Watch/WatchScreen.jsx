import { Suspense, lazy } from "react";
import { WatchScreenSkeleton } from "./WatchScreenSkeleton.jsx";

const Component = lazy(lazyComponent)

function lazyComponent() {
  return   import(
    './Watch.jsx'
  )
}

export const WatchScreen = () => {

  const skeleton = <WatchScreenSkeleton />
  // return skeleton
  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};