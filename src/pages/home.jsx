import React, { useState } from "react";
import Chat from "../components/chat";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cards] = useState([
    {
      title: "Popular Dishes",
      description: "Check out our most loved dishes...",
    },
    {
      title: "Veg Menu",
      description: "Explore our delicious vegetarian dishes.",
    },
    {
      title: "Non-Veg Menu",
      description: "Explore our delicious non-vegetarian dishes.",
    },
  ]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-md md:mr-4">
        <div className="h-20"></div>
        <h1 className="text-4xl font-bold mb-4 w-fill">
          Welcome to Our Restaurant
        </h1>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Unified Cart Section */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white p-8 rounded-lg shadow-md w-full md:w-1/3 ${
          isCartOpen ? "block" : "hidden"
        } transition-all duration-300 overflow-y-auto`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={toggleCart}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 className="text-2xl font-bold">Add to Cart</h2>
        <section className="mt-4">
          <h3 className="text-xl font-bold">List of Items</h3>
        </section>
        <section className="mt-4">
          <h3 className="text-xl font-bold">Add-ons</h3>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mt-4"
            onClick={() => {
              console.log("Add-ons clicked");
            }}
          >
            Add Add-ons
          </button>
        </section>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green mt-4"
          onClick={() => {
            console.log("Checkout clicked");
          }}
        >
          Checkout
        </button>
      </div>

      {/* <Chat /> */}

      {/* Cart Button */}
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          onClick={toggleCart}
        >
          Open Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
