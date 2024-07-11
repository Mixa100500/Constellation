import Page from '../../../compositions/Collection/Page.jsx'
import { ShowSectionProvider } from "../../../context/ShowSectionProvider.jsx";


export const FirstPage = () => {
  return (
    <ShowSectionProvider>
      <Page
        index={1}
      />
    </ShowSectionProvider>
  );
};
