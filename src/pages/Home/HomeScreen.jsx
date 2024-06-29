import { Suspense, lazy } from "react";
import { HomeScreenSkeleton } from "./HomeScreenSkeleton.jsx";

const Component = lazy(() =>
  import(
    './Home.jsx'
  )
);

export const HomeScreen = () => {
  
  const skeleton = <HomeScreenSkeleton />;

  return (
    <Suspense fallback={skeleton}>
      <Component />
    </Suspense>
  );
};
