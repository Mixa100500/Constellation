import { Suspense, lazy } from "react";
import { HomeScreenSkeleton } from "./HomeScreenSkeleton.jsx";

const Component = lazy(() =>
  import(
    './Home.jsx'
  )
);

export const HomeScreen = () => {
  
  const skeleton = <HomeScreenSkeleton />;
  // return <div>hello</div>
  // return skeleton
  // return skeleton
  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};
