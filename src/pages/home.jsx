import React, { useState, useEffect } from "react";
import Chats from "../components/chats";
import BG from "../../public/wallpaper.jpg";

const Card = ({ title, description, addToCart, price }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ title, price });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 relative">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {/* Money Text */}
      <p className="text-red-500 font-bold mt-2">${price}</p>

      {/* Quantity and Add Option */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <button
            className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
          onClick={() => addToCart({ title, price, remove: true })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Digital Clock</h2>
      <p className="text-gray-600">{time.toLocaleTimeString()}</p>
    </div>
  );
};

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addOns, setAddOns] = useState("");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const getData = async () => {
    await fetch("http://localhost:3000/getdata").then((res) => {
      res.json().then((data) => {
        setCards(data.data);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item) => {
    if (item.remove) {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.title !== item.title
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleCheckout = () => {
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // Display confirmation message
    setIsOrderConfirmed(true);
    console.log("Confirm Order");
    console.log("Total Price:", totalPrice.toFixed(2));
  };

  const handleAddOnsChange = (event) => {
    setAddOns(event.target.value);
  };

  return (
    <div className="flex flex-row overflow-auto p-10 items-center justify-center h-full bg-[url('../../public/wallpaper.jpg')] w-full ">
      <div className="bg-white overflow-scroll p-8 m-1 rounded-lg shadow-md md:mr-4">
        <div className="h-20"></div>
        <h1 className="text-4xl font-bold mb-4 w-fill">
          Welcome to Our Restaurant
        </h1>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.f_name}
            description={card.description}
            price={card.f_price}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Digital Clock Section */}
      <div className="bg-white p-8 m-1 rounded-lg shadow-md md:mr-4">
        <DigitalClock />
      </div>

      {/* Unified Cart Section */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white p-8 rounded-lg shadow-md w-full md:w-1/3 ${
          isCartOpen ? "block" : "hidden"
        } transition-all duration-300 overflow-y-auto`}
        style={{
          opacity: isCartOpen ? 0.8 : 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* ... */}
      </div>

      {/* Chat Component */}
      <Chats />

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
