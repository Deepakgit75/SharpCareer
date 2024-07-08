import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdOutlineLocationOn, MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

const API_URL = "https://sharpcareer-1.onrender.com/api";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to the server using fetch API

    if (!name || !email || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div>
      <Header />
      <section className=" py-10 bg-gradient-to-b from-blue-200">
        <div className="container mx-auto flex flex-col items-center justify-center ">
          <h1 className="text-4xl mr-10 font-bold mb-4">Contact Us</h1>
          <div className="flex flex-row w-[60%] justify-between mb-5">
            <div className="w-[25%] flex flex-col items-center">
              <div className="bg-blue-700 rounded-md w-10 h-10 flex justify-center items-center ">
                <MdOutlineLocationOn className="text-2xl font-light text-white" />
              </div>
              <p className="font-semibold text-lg">Office</p>
              <p className="text-center">
                68 Street North-west, Halifax, ab, Canada
              </p>
            </div>
            <div className="w-[25%] flex flex-col items-center">
              <div className="bg-blue-700 rounded-md w-10 h-10 flex justify-center items-center">
                <FiPhoneCall className="text-2xl font-light text-white" />
              </div>
              <p className="font-semibold text-lg">Make a call</p>
              <p>(866) 934-5887</p>
            </div>
            <div className="w-[25%] flex flex-col items-center">
              <div className="bg-blue-700 rounded-md w-10 h-10 flex justify-center items-center">
                <MdMailOutline className="text-2xl font-light text-white" />
              </div>
              <p className="font-semibold text-lg">Send me email</p>
              <p>info@example.com</p>
            </div>
          </div>
          <form className=" p-6 w-[60%]">
            <div className="mb-4 flex flex-row gap-5 justify-between">
              <div className="w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="my-6 flex flex-row gap-5 justify-between">
              <div className="w-full">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="my-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Send to WhatsApp
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
