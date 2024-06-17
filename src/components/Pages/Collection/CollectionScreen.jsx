import { Suspense, lazy } from "react";
import { CollectionScreenSkeleton } from "./CollectionScreenSkeleton";

const Component = lazy(() =>
  import(
    './Collection'
  )
);

export const CollectionScreen = () => {
  
  const skeleton = <CollectionScreenSkeleton />;
  
  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};