import React from "react";

const OrderCard = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-slate-50 rounded-xl p-4 m-2 h-80 w-60">
      <div className="card-body">
        <p className="card-title">Table number:</p>
        <p className="card-text">Item:</p>
        <p className="card-text">Quantity:</p>
        <p className="card-text">Order ID:</p>
      </div>
      <div className="flex flex-row justify-evenly p-2 m-2">
        <button className="btn btn-primary bg-green-400 p-2 rounded">
          Complete
        </button>
        {/* <button className="btn btn-primary bg-slate-50 p-2 rounded">
          Cancel
        </button> */}
      </div>
    </div>
  );
};

export default OrderCard;
