import "./App.css";
import Banner from "./components/Banner/index.";
import ConsultPage from "./components/ConsultPage";
import Header from "./components/Header";
import WhyAstrology from "./components/WhyAstrology";

function App() {
  return <main className="app">
    <Header />
    <Banner />
    <ConsultPage />
    <WhyAstrology />
  </main>;
}

export default App;
