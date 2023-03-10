import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Hero />
    </div>
  );
}

export default App;
