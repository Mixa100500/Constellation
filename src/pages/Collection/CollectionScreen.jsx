import { Suspense, lazy } from "react";
import { CollectionScreenSkeleton } from "./CollectionScreenSkeleton.jsx";

const Component = lazy(() =>
  import(
    './Collection.jsx'
  )
)

export const CollectionScreen = () => {
  const skeleton = <CollectionScreenSkeleton />;
  
  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};