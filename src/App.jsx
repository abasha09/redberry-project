import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Card from "./components/card/Card";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Categories />
      <div className="card__section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
