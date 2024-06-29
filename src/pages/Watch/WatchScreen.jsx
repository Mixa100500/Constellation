import { Suspense, lazy } from "react";
import { WatchScreenSkeleton } from "./WatchScreenSkeleton.jsx";

const Component = lazy(() =>
  import(
    './Watch.jsx'
  )
);

export const WatchScreen = () => {
  
  const skeleton = <WatchScreenSkeleton />;

  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};