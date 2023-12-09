import React, { useState } from "react";

const Payments = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [neftDetails, setNeftDetails] = useState({
    accountNumber: "",
    ifscCode: "",
  });
  const [upiDetails, setUpiDetails] = useState({
    upiId: "",
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCardInputChange = (event) => {
    setCardDetails({
      ...cardDetails,
      [event.target.id]: event.target.value,
    });
  };

  const handleNeftInputChange = (event) => {
    setNeftDetails({
      ...neftDetails,
      [event.target.id]: event.target.value,
    });
  };

  const handleUpiInputChange = (event) => {
    setUpiDetails({
      ...upiDetails,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === "card") {
      // Handle card payment with card details
      console.log("Processing card payment");
      console.log("Card Details:", cardDetails);
      // Add logic to submit card details or process payment
    } else if (selectedOption === "neft") {
      // Handle NEFT payment with NEFT details
      console.log("Processing NEFT payment");
      console.log("NEFT Details:", neftDetails);
      // Add logic to submit NEFT details or process payment
    } else if (selectedOption === "upi") {
      // Handle UPI payment with UPI details
      console.log("Processing UPI payment");
      console.log("UPI Details:", upiDetails);
      // Add logic to submit UPI details or process payment
    } else {
      // Handle form submission for other payment options
      console.log("Selected option:", selectedOption);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Bank Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="paymentOption"
            className="block text-sm font-semibold"
          >
            Select Payment Option:
          </label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={selectedOption}
            onChange={handleOptionChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="">Select...</option>
            <option value="card">Card</option>
            <option value="neft">NEFT</option>
            <option value="upi">UPI</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {selectedOption === "card" && (
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-semibold">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />

            <label
              htmlFor="expirationDate"
              className="block text-sm font-semibold mt-2"
            >
              Expiration Date:
            </label>
            <input
              type="text"
              id="expirationDate"
              value={cardDetails.expirationDate}
              onChange={handleCardInputChange}
              placeholder="MM/YY"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />

            <label htmlFor="cvv" className="block text-sm font-semibold mt-2">
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              value={cardDetails.cvv}
              onChange={handleCardInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        )}

        {selectedOption === "neft" && (
          <div className="mb-4">
            <label
              htmlFor="accountNumber"
              className="block text-sm font-semibold"
            >
              Account Number:
            </label>
            <input
              type="text"
              id="accountNumber"
              value={neftDetails.accountNumber}
              onChange={handleNeftInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />

            <label
              htmlFor="ifscCode"
              className="block text-sm font-semibold mt-2"
            >
              IFSC Code:
            </label>
            <input
              type="text"
              id="ifscCode"
              value={neftDetails.ifscCode}
              onChange={handleNeftInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        )}

        {selectedOption === "upi" && (
          <div className="mb-4">
            <label htmlFor="upiId" className="block text-sm font-semibold">
              UPI ID:
            </label>
            <input
              type="text"
              id="upiId"
              value={upiDetails.upiId}
              onChange={handleUpiInputChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        )}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payments;
