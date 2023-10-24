import React, { useState } from "react";
import "./App.css";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-[35em] flex flex-col items-center mx-auto justify-center rounded-xl bg-gray-300 m-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-transparent border border-gray-500 rounded-xl w-[35em] p-3"
      >
        <h2
          style={{ fontFamily: "Kanit" }}
          className="text-2xl font-extrabold text-center mt-10"
        >
          Sign up
        </h2>
        <label
          style={{ fontFamily: "Poppins" }}
          className="text-md tracking-wide relative top-16 font-semibold"
        >
          Username:
        </label>
        <AiOutlineUser className="relative top-[3.2rem] left-2" />
        <input
          className="bg-gray-200 p-2 rounded-xl pl-8"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <div className="flex relative w-full -top-4">
          <div className="flex flex-col">
            <label
              style={{ fontFamily: "Poppins" }}
              className="text-md tracking-wide relative top-0 font-semibold"
            >
              First Name:{" "}
            </label>
            <AiOutlineUser className="absolute top-9 left-2" />
            <input
              className="bg-gray-200 p-2 rounded w-[120%] pl-8"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col relative left-16">
            <label
              style={{ fontFamily: "Poppins" }}
              className="text-md tracking-wide relative top-0 font-semibold"
            >
              Last Name:
            </label>
            <AiOutlineUser className="absolute top-9 left-2" />
            <input
              className="bg-gray-200 p-2 rounded float-right w-[111%] pl-8"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            style={{ fontFamily: "Poppins" }}
            className="text-md tracking-wide relative -top-8 font-semibold"
          >
            Email Address:{" "}
          </label>
          <input
            className="bg-gray-200 p-2 -top-7 rounded pl-8 relative"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
          />
          <AiOutlineMail className="absolute bottom-[18.4rem] left-[31.2%]"/>
        </div>

        <div className="flex flex-col -top-11 relative">
          <label
            style={{ fontFamily: "Poppins" }}
            className="text-md tracking-wide relative top-0 font-semibold"
          >
            Password:
          </label>
          <AiOutlineLock className="absolute bottom-3 left-3" />
          <input
            className="bg-gray-200 p-2 rounded pl-8"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="font-semibold bg-[blue] text-[#eee] relative -top-6 w-full h-[2.8rem] rounded-xl"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
