import Page from "../../../compositions/Collection/Page.jsx"
import { useLocation } from "react-router-dom";


export const FirstPage = () => {
  useLocation()
  return (
    <Page
      index={1}
    />
  );
};
