import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [best, setBest] = useState(false);
  const [nonveg, setNonveg] = useState(false);

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  //   const handleInputChange = (e) => {
  //     setItem(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item != "" && price != "") {
      sendDataToBackEnd(e);
    } else {
      console.log("Error");
    }
  };

  const sendDataToBackEnd = async (e) => {
    try {
      const data = {
        item: item,
        price: price,
        best: best,
        nonveg: nonveg,
        desc: desc,
      };
      console.log(data);
      fetch(`${SERVER_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }

    // Add your logic to handle the submission here
    console.log("Item:", item);
    setItem("");
    console.log("Price:", price);
    setPrice("");
    console.log("Best:", best);
    console.log("Nonveg:", nonveg);
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
          <textarea
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="rounded p-1 m-1"
            placeholder="Item Description"
          />
          <input
            type="checkbox"
            value={best}
            onChange={(e) => setBest(e.target.checked)}
            id="bestseller"
            className="p-1 m-1"
          />

          <label htmlFor="bestseller">Bestseller?</label>
          <input
            type="checkbox"
            value={nonveg}
            onChange={(e) => setNonveg(e.target.checked)}
            id="nonveg"
            className="p-1 m-1"
          />
          <label htmlFor="nonveg">Non-Veg?</label>
          {/* <input
            type="checkbox"
            value="nonveg"
            id="nonveg"
            className="p-1 m-1"
          />
          <label htmlFor="bestseller">Bestseller?</label> */}
          <button
            type="submit"
            // onClick={handleAddItem}
            className=" p-1 m-1 rounded bg-slate-50"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
