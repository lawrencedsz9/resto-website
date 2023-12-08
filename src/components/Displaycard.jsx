import React from "react";
import Food from '../../public/food.jpg'
import { CgAdd } from "react-icons/cg";
import { FaMinus } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";


const Displaycard = (props) => {
    return (
        <>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img className="w-full h-48 object-cover object-center" src={Food} alt={name} />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-xl mb-2">{props.name}</h2>
        <p className="text-gray-700 font-semibold text-lg mb-2">${props.price}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
        </>
    );
};

export default Displaycard;
