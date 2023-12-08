import React,{useEffect,useState} from "react";
import Food from '../../public/food.jpg'
import { CgAdd } from "react-icons/cg";
import { FaMinus } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";



const Displaycard = () => {
    const [food, setFood] = useState([]);
    const getData = async () => {
        await fetch("http://localhost:3000/getdata")
            .then((res) => {
                res.json().then((data) => {
                    setFood(data.data)
                    console.log(data.data)
            })
        })
        
    }
    useEffect(() => {
        getData();
    },[])
   
    return (
        <>
            {food?.map((items) => {
                return (
                    <>
                             <div key={items.name} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img key={items.name} className="w-full h-48 object-cover object-center" src={Food} alt={name} />
      <div key={items.name} className="p-4">
        <h2 key={items.name} className="text-gray-900 font-bold text-xl mb-2">{items.f_name}</h2>
        <p key={items.name} className="text-gray-700 font-semibold text-lg mb-2">${items.f_price}</p>
        <button key={items.name} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
                </div>
                    </>
                );
            })}
        </>
    );
};

export default Displaycard;
