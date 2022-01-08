import "./App.css";
import Banner from "./components/Banner/index.";
import ChooseGuru from "./components/ChooseGuru";
import ConsultPage from "./components/ConsultPage";
import Header from "./components/Header";
import WhyAstrology from "./components/WhyAstrology";

function App() {
  return <main className="app">
    <Header />
    <Banner />
    <ConsultPage />
    <WhyAstrology />
    <ChooseGuru/>
  </main>;
}

export default App;
