import React from "react";
import OrderCard from "../components/order-display";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <div className="flex flex-row justify-evenly">
        <button className="btn btn-primary bg-slate-50 p-2 rounded">
          Add Item
        </button>
        <button className="btn btn-primary bg-slate-50 p-2 rounded">
          View All Items
        </button>
      </div>
      <div>
        <h1>Orders</h1>
        <OrderCard />
      </div>
    </div>
  );
};

export default AdminPage;
