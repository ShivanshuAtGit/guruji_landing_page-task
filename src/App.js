import "./App.css";
import Banner from "./components/Banner/index.";
import ChooseGuru from "./components/ChooseGuru";
import ConsultPage from "./components/ConsultPage";
import GuaranteeBlock from "./components/GuaranteeBlock";
import HowWorks from "./components/HowWorks";
import Header from "./components/Header";
import WhyAstrology from "./components/WhyAstrology";
import AstrologerList from "./components/AstrologersList";
import UserRight from "./components/UserRights";
import NewsContainer from "./components/NewsContainer";
import TalkUs from "./components/TalkUs";

function App() {
  return <main className="app">
    <Header />
    <Banner />
    <ConsultPage />
    <WhyAstrology />
    <ChooseGuru />
    <GuaranteeBlock />
    <HowWorks />
    <AstrologerList />
    <UserRight />
    <NewsContainer />
    <TalkUs />
  </main>;
}

export default App;
