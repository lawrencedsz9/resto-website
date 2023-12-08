import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  //   const handleInputChange = (e) => {
  //     setItem(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the submission here
    console.log("Item:", item);
    setItem("");
    console.log("Price:", price);
    setPrice("");
  };

  return (
    <>
      <div className="flex flex-col items-center p-2 justify-center">
        <h1 className="text-xl font-bold">Add Item</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="rounded p-1 m-1"
            placeholder="Item Name"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded p-1 m-1"
            placeholder="Item Price"
          />
          <input
            type="checkbox"
            value="Bestseller"
            id="bestseller"
            className="p-1 m-1"
          />
          <label htmlFor="bestseller">Bestseller?</label>
          <input
            type="checkbox"
            value="nonveg"
            id="nonveg"
            className="p-1 m-1"
          />
          <label htmlFor="bestseller">Non-Veg?</label>
          {/* <input
            type="checkbox"
            value="nonveg"
            id="nonveg"
            className="p-1 m-1"
          />
          <label htmlFor="bestseller">Bestseller?</label> */}
          <button type="submit" className=" p-1 m-1 rounded bg-slate-50">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
