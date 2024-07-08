import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const API_URL = "https://sharpcareer-1.onrender.com/api";

const Book = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !service) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, service }),
      });

      if (response.ok) {
        toast.success("Booking confirmed");
        setName("");
        setEmail("");
        setPhone("");
        setService("");
      } else {
        alert("Failed to confirm booking");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div>
      <Header />
      <main className="p-8 bg-blue-200 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Book Services</h1>
        <p className="text-xl mb-8">
          We offer a range of services to meet your needs, including
          installation, maintenance, and repair of AC units.
        </p>
        <form className="w-[30%]  mx-40">
          <div className="mb-3">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md border-gray-300"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2  border rounded-md border-gray-300"
              required
            />
          </div>
          <div className="mb-3 mt-9">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-2 border rounded-md border-gray-300"
              required
            >
              <option value="">Select a service</option>
              <option value="AC-Repairing-Service">AC Repairing Service</option>
              <option value="Refrigerator-Service">Refrigerator Service</option>
              <option value="Washing-Machine-Service">
                Washing Machine Service
              </option>
              <option value="LED-Service">LED Service</option>
            </select>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button
                type="submit"
                className="bg-blue-600 rounded-md text-white p-2 px-3"
                onClick={handleBooking}
            >
                Book Now
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
