import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Card from "./components/card/Card";
import Blog from "./components/pages/Blog";
import Modal from "./components/modals/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="home">
      <Header openModal={openModal} />
      {isOpen && <Modal closeModal={closeModal} />}
      {/* <Hero />
      <Categories />
      <div className="card__section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}

export default App;
