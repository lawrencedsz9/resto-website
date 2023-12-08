import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-md md:mr-4">
        <div className="h-20"></div> {/* BEGIN: Add space for wallpaper */}
        <h1 className="text-4xl font-bold mb-4 w-fill">
          Welcome to Our Restaurant
        </h1>
        <section className="mt-6 welcome-section">
          <h2 className="text-2xl font-bold">Popular Dishes</h2>
          <p className="text-gray-600">
            Check out our most loved dishes that keep our customers coming back
            for more.
          </p>
          {/* Add popular dishes here */}
        </section>
        <p className="text-gray-600">
          Explore our delicious menu and enjoy a delightful dining experience.
        </p>
        {/* <section className="mt-6">
                    <h2 className="text-2xl font-bold">Online Ordering</h2>
                    <p className="text-gray-600">
                        Order your favorite dishes online and have them delivered to your
                        doorstep.
                    </p>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mt-4"
                        onClick={() => {
                            // Add logic for online ordering here
                            console.log("Online ordering clicked");
                        }}
                    >
                        Order Now
                    </button> 
                 </section> */}
        <section className="mt-6">
          <h2 className="text-2xl font-bold">Veg Menu</h2>
          <p className="text-gray-600">
            Explore our delicious vegetarian dishes.
          </p>
          {/* Add veg menu items here */}
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-bold">Non-Veg Menu</h2>
          <p className="text-gray-600">
            Explore our delicious non-vegetarian dishes.
          </p>
          {/* Add non-veg menu items here */}
        </section>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md mt-4 md:mt-0 add-to-cart-section">
        <h2 className="text-2xl font-bold">Add to Cart</h2>
        <section className="mt-4">
          <h3 className="text-xl font-bold">List of Items</h3>
          {/* Add list of items here */}
        </section>
        <section className="mt-4">
          <h3 className="text-xl font-bold">Add-ons</h3>
          {/* Add addons here */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue mt-4"
            onClick={() => {
              // Add logic for adding addons to cart here
              console.log("Add-ons clicked");
            }}
          >
            Add Add-ons
          </button>
        </section>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green mt-4"
          onClick={() => {
            // Add logic for checkout here
            console.log("Checkout clicked");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Home;
