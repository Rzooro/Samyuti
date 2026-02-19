import React, { useState } from "react";
import logo from "./assets/logo.png";
import Header from "./Header.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // later when backend added
    // await fetch(...)

    setTimeout(() => {
      setLoading(false);
      alert("Registered successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#002855] font-serif pt-36 md:pt-28">
      {/* T`op` Accent Bar */}
      <div className="h-4 bg-[#C5941C]" />

      {/* Header with Logo Space */}
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Info Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 border border-[#C5941C] rounded-lg overflow-hidden">
          <InfoBox label="Event Dates" value="March 28 - 31, 2026" />
          <InfoBox label="Primary Venue" value="University Auditorium" border />
          <InfoBox label="Registration Deadline" value="March 10, 2024" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <section className="lg:col-span-8 group bg-white rounded-xl shadow-2xl shadow-blue-900/5 border border-gray-300 overflow-hidden">
            <div className="bg-[#002855] px-8 py-5 text-white flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold tracking-wide">
                  Registration Portal
                </h2>
                <p className="text-[#C5941C] text-xs font-sans uppercase mt-1 tracking-wider">
                  Official Entry Form
                </p>
              </div>
              {/* Decorative element instead of emoji */}
              <div className="h-8 w-8 border-2 border-[#C5941C] rotate-45 group-hover:bg-[#C5941C] group-hover:rotate-135 transition-all duration-300" />
            </div>

            <div className="relative min-h-175 bg-gray-50">
              <div className="bg-gray-50 p-8">
                <form className="space-y-6 font-sans">
                  {/* Name */}
                  <div>
                    <label className="block text-sm mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                      required
                    />
                  </div>

                  {/* College / Department */}
                  <div>
                    <label className="block text-sm mb-1">
                      College / Department
                    </label>
                    <input
                      type="text"
                      name="college"
                      placeholder="Enter your college"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                    />
                  </div>

                  {/* Event Selection */}
                  <div>
                    <label className="block text-sm mb-1">Select Event</label>
                    <select
                      name="event"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                      required>
                      <option value="">Choose an event</option>
                      <option>Solo Singing</option>
                      <option>Group Dance</option>
                      <option>Dramatics</option>
                      <option>Fine Arts</option>
                      <option>Photography</option>
                      <option>Literary Symposium</option>
                    </select>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-sm mb-1">
                      Team Size (if applicable)
                    </label>
                    <input
                      type="number"
                      name="teamSize"
                      placeholder="Enter team size"
                      min="1"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Anything we should know?"
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#C5941C]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#002855] text-white py-3 rounded-md w-full cursor-pointer hover:bg-white hover:text-[#002855] hover:ring-2 hover:ring-[#002855] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "Submitting..." : "Submit Registration"}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Right Column: Event List & Details */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-xl border-l-4 border-[#C5941C] shadow-sm">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-2">
                Performing Arts
              </h3>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex justify-between items-center">
                  <span>Solo Singing (Classical/Western)</span>
                  <div className="h-1.5 w-1.5 bg-[#C5941C]" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Group Dance Showcase</span>
                  <div className="h-1.5 w-1.5 bg-[#C5941C]" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Theatrical Dramatics</span>
                  <div className="h-1.5 w-1.5 bg-[#C5941C]" />
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-[#002855] shadow-sm">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-2">
                Creative Exhibits
              </h3>
              <ul className="space-y-4 font-sans text-sm">
                <li className="flex justify-between items-center">
                  <span>Fine Arts Exhibition</span>
                  <div className="h-1.5 w-1.5 bg-[#002855]" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Digital Photography</span>
                  <div className="h-1.5 w-1.5 bg-[#002855]" />
                </li>
                <li className="flex justify-between items-center">
                  <span>Literary Symposium</span>
                  <div className="h-1.5 w-1.5 bg-[#002855]" />
                </li>
              </ul>
            </div>

            <div className="p-6 bg-[#002855] text-white rounded-xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] mb-2 text-[#C5941C]">
                Questions?
              </p>
              <p className="font-sans text-sm">
                contact@chanakyauniversity.edu.in
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center font-sans">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            Rooted in Ideals • Ascending with Ideas
          </p>
          <p className="mt-4 text-sm text-[#002855] font-medium">
            © 2024 Chanakya University. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const InfoBox = ({ label, value, border }) => (
  <div
    className={`p-6 bg-white text-center ${border ? "md:border-x border-[#C5941C]" : ""}`}>
    <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">
      {label}
    </h4>
    <p className="font-bold text-[#002855]">{value}</p>
  </div>
);

export default App;
