import React, { useState, useEffect } from "react";
import Chats from "../components/chats";
import Marquee from "react-fast-marquee";

const Card = ({ title, description, addToCart, price }) => {
  const [quantity, setQuantity] = useState(0);
  const [money, setMoney] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    setMoney(money + price);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setMoney(money - price);
    }
  };

  const handleAddToCart = () => {
    addToCart({ title, price });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 relative">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-red-500 font-bold mt-2">₹{price}</p>
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
      <p className="text-green-500 font-bold mt-2">Total Money: ₹{money}</p>
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
    const res = await fetch("http://localhost:3000/getdata");
    const data = await res.json();
    setCards(data.data);
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
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setIsOrderConfirmed(true);
    if (isOrderConfirmed) {
      // Redirect to payment page
      window.location.href = "/payment";
    }
    console.log("Confirm Order");
    console.log("Total Price:", totalPrice.toFixed(2));
  };

  const handleAddOnsChange = (event) => {
    setAddOns(event.target.value);
  };

  return (
    <div className="flex flex-row overflow-auto p-10 items-center justify-center h-full bg-[url('../../public/wallpaper.jpg')] w-full  ">
      <div className="flex flex-col justify-center items-center w-2/3 bg-transparent  p-8 m-1 rounded-lg shadow-md md:mr-4">
        <div className="h-20 w-full font-semibold font-lg text-white">
          <Marquee>The home of pizza and pastries</Marquee>
        </div>
        <h1 className="text-4xl font-bold mb-4 w-fill text-white">
          Welcome to Our Restaurant
        </h1>
        <div className="  w-2/3 text-center">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.f_name}
              description={card.description}
              price={card.f_price}
              addToCart={addToCart}
              className="w-1/3"
            />
          ))}
        </div>
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
        {isOrderConfirmed ? (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h3 className="text-xl font-bold">Order Details</h3>
            <section>
              <h4 className="text-lg font-bold">List of Items</h4>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <p>{item.title}</p>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                </div>
              ))}
            </section>
            <section className="mt-4">
              <h4 className="text-lg font-bold">Add-ons</h4>
              <p>{addOns}</p>
            </section>
            <section className="mt-4">
              <h4 className="text-lg font-bold">Name</h4>
              <p>{name}</p>
            </section>
            <section className="mt-4">
              <h4 className="text-lg font-bold">Phone Number</h4>
              <p>{phoneNumber}</p>
            </section>
            <section className="mt-4">
              <h4 className="text-lg font-bold">Total Price</h4>
              <p>
                ₹
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </p>
            </section>
          </div>
        ) : (
          <>
            <section className="mt-4">
              <h3 className="text-xl font-bold">List of Items</h3>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <p>{item.title}</p>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                </div>
              ))}
            </section>
            <section className="mt-4">
              <h3 className="text-xl font-bold">Add-ons</h3>
              <input
                type="text"
                placeholder="Add-ons"
                value={addOns}
                onChange={handleAddOnsChange}
                className="border border-gray-300 rounded-md p-2 mt-2"
              />
            </section>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Name</h3>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Phone Number</h3>
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mt-2"
              />
            </div>
          </>
        )}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green mt-4"
          onClick={handleCheckout}
        >
          {isOrderConfirmed ? "Confirm Order" : "Checkout"}
        </button>
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
