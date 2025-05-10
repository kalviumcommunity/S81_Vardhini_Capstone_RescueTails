import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-white">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-rose-900">
          <Link to="/">PetCare</Link>
        </div>
        <div>
          <Link
            to="/login"
            className="text-white bg-rose-900 px-4 py-2 rounded-full hover:bg-rose-800 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-rose-900">Welcome to PetCare</h1>
        <p className="text-lg text-gray-700 mt-4">
          Give a loving home to a pet in need. Adopt, donate, or volunteer today!
        </p>
        <div className="mt-6">
          <Link
            to="/donate"
            className="bg-rose-900 text-white px-6 py-3 rounded-full hover:bg-rose-800 transition"
          >
            Donate Now
          </Link>
        </div>
      </header>

      {/* Featured Pets */}
      <section className="px-6 md:px-12 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Featured Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example pet card */}
          <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
            <img
              src="https://placekitten.com/300/200"
              alt="Fluffy the cat"
              className="rounded-xl mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-rose-900">Fluffy</h3>
            <p className="text-gray-600">2-year-old playful kitten looking for a home</p>
            <Link
              to="/pets/fluffy"
              className="mt-4 inline-block text-rose-800 hover:underline"
            >
              View Profile →
            </Link>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
