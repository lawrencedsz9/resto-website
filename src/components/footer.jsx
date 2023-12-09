import React, { useState } from "react";

const Footer = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Form submitted with values:", formValues);
    // You can send the form data to your backend or perform other actions
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <footer className="bg-gray-900 p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="card-style bg-gray-300 p-4">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="text-left w-full mb-2 text-lg text-gray-700 font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input-style"
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="text-left w-full mb-2 text-lg text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="input-style"
              onChange={handleChange}
            />

            <label
              htmlFor="message"
              className="text-left w-full mb-2 text-lg text-gray-700 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Feedback"
              className="input-style"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="btn-style bg-green-500 hover:bg-green-600"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Thank you for your valuable feedback.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
