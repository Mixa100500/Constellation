import { Suspense, lazy } from "react";
import { WatchScreenSkeleton } from "./WatchScreenSkeleton";

const Component = lazy(() =>
  import(
    './Watch'
  )
);

export const WatchScreen = () => {
  
  const skeleton = <WatchScreenSkeleton />;
  // return (
  //   skeleton
  // )
  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};