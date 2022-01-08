import "./App.css";
import Banner from "./components/Banner/index.";
import ConsultPage from "./components/ConsultPage";
import Header from "./components/Header";

function App() {
  return <main className="app">
    <Header />
    <Banner />
    <ConsultPage />
  </main>;
}

export default App;
