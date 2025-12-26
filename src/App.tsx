import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FoodCard from "./components/foodcard";
import "./App.css";

const foodItems = [
  {
    name: "Greys Vage",
    discount: 15,
    daysRemaining: 6,
    image: "/images/Flash Deal card.png",
  },
  {
    name: "Greys Vage",
    discount: 10,
    daysRemaining: 6,
    image: "/images/foodcard1.png",
  },
  {
    name: "Greys Vage",
    discount: 25,
    daysRemaining: 7,
    image: "/images/foodcard2.png",
  },
  {
    name: "Greys Vage",
    discount: 20,
    daysRemaining: 8,
    image: "/images/foodcard3.png",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="food-cards-container">
        {foodItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
