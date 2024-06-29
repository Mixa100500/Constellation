import { useLocation } from "react-router-dom";
import Page from '../../compositions/Collection/Page.jsx'


export const FirstPage = () => {
  useLocation()
  return (
    <Page
      index={1}
    />
  );
};
