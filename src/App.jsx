import React, { useState } from "react";
import Header from "./Header.jsx";

/**
 * Samyuti 2026: Official Portal
 * Designed for Chanakya University
 */

function App() {
  const [formLoaded, setFormLoaded] = useState(false);

  const microsoftFormUrl =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=vOOLNLOpdUel8NOiEjo_Mwj5KIY3m59CiLB3eRlQVhRUNVk5NVU1TDFLNVNCNEZOWFNLVTBTU05VQy4u";

  const samyutiEvents = [
    {
      title: "AI Storytelling",
      theme: "Celebrating Historical Indian Women",
      prize: "₹10,000",
      context:
        "Craft original AI-assisted stories highlighting unsung historical Indian women like Ahalyabai Holkar.",
      rules: ["Use only Perplexity AI", "Max 2000 words", "1-hour duration"],
      coordinators: "Sourabha, Amartya, Vidhu",
      contact: "sourabha.std@chanakya.edu.in",
    },
    {
      title: "IKS Hackathon",
      theme: "Integrating Indian Knowledge Systems with AI",
      prize: "₹60,000",
      context:
        "Develop creative tech solutions inspired by ancient Indian Knowledge Systems (IKS).",
      rules: [
        "Teams of 2-4",
        "Public Git repo required",
        "Live demo on campus",
      ],
      coordinators: "Prithvi Hegde, Suprajna, Ayush",
      contact: "prithvi.std@chanakya.edu.in",
    },
    {
      title: "Hardware Hackathon",
      theme: "Transforming Raw Components",
      prize: "₹60,000",
      context:
        "A 72-hour high-energy marathon building functional gadgets or robotics from scratch.",
      rules: ["Offline only", "No pre-built kits", "Stay on-site for 72 hours"],
      coordinators: "Vaibhav, Abhilash, Srivatsa",
      contact: "vaibhav.std@chanakya.edu.in",
    },
    {
      title: "Gaming: Code the Past",
      theme: "Chanakya's Mandala & Chakravyuh",
      prize: "₹10,000",
      context:
        "Build 2D prototypes based on ancient Indian strategy or survival concepts.",
      rules: [
        "Teams of 2-4",
        "Unity/Godot/Gdevelop allowed",
        "On-site Mod Rounds",
      ],
      coordinators: "Sarvesh Patil, Yashas, Akshaya",
      contact: "sarvesh.std@chanakya.edu.in",
    },
    {
      title: "Treasure Hunt",
      theme: "Logic-Driven Engineering Tasks",
      prize: "₹30,000",
      context:
        "A challenge involving engineering tasks, lab experiments, and IKS clues.",
      rules: [
        "No internet allowed",
        "No AI assistance",
        "Real-time problem solving",
      ],
      coordinators: "Prateek, Abhishek, Shivam",
      contact: "prateek.std@chanakya.edu.in",
    },
    {
      title: "Culture Speaks AI",
      theme: "Traditional Attire with AI Narration",
      prize: "₹22,500",
      context:
        "Showcase cultural identity through attire while AI narrates its significance.",
      rules: [
        "Solo or Group",
        "AI voice narration",
        "Full dance not permitted",
      ],
      coordinators: "Neha, Shyama",
      contact: "neha.std@chanakya.edu.in",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#002855] font-['Inter'] scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 text-center bg-white border-b border-gray-100">
        <h1 className="text-6xl md:text-8xl font-libre font-bold mb-6 tracking-tight">
          SAMYUTI <span className="text-[#C5941C]">2026</span>
        </h1>
        <p className="text-[#C5941C] text-sm md:text-lg font-semibold tracking-[0.5em] uppercase max-w-3xl mx-auto leading-relaxed">
          Integrating Heritage, Celebrating Innovation
        </p>
        <div className="mt-12 flex justify-center gap-4">
          <div className="h-1 w-20 bg-[#C5941C]" />
          <div className="h-1 w-4 bg-[#002855]" />
          <div className="h-1 w-20 bg-[#C5941C]" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Infobox Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24 border-2 border-[#C5941C] rounded-xl overflow-hidden shadow-2xl bg-white">
          <InfoBox label="Event Dates" value="MARCH 28 - 31, 2026" />
          <InfoBox label="Primary Venue" value="GLOBAL CAMPUS, CU" border />
          <InfoBox label="Registration" value="BY MARCH 10, 2026" />
        </div>

        {/* Event Grid */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-5xl font-libre font-bold mb-16 text-center">
            Event Tracks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {samyutiEvents.map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
          </div>
        </section>

        {/* Registration Portal */}
        <section
          id="registration"
          className="group bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-32">
          <div className="bg-[#002855] px-8 md:px-16 py-12 text-white flex justify-between items-center border-b-8 border-[#C5941C]">
            <div>
              <h2 className="text-4xl font-libre font-bold tracking-wide">
                Registration Portal
              </h2>
              <p className="text-[#C5941C] text-sm font-semibold uppercase mt-4 tracking-[0.5em]">
                Official Delegate Entry 2026
              </p>
            </div>
            <div className="h-16 w-16 border-2 border-[#C5941C] rotate-45 group-hover:bg-[#C5941C] group-hover:rotate-[135deg] transition-all duration-300 hidden md:block" />
          </div>
          <div className="relative min-h-[900px] bg-gray-50">
            {!formLoaded && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-white z-10">
                <div className="w-16 h-16 border-4 border-[#002855]/10 border-t-[#C5941C] rounded-full animate-spin"></div>
                <p className="mt-8 text-xs font-bold tracking-[0.5em] text-gray-400 uppercase">
                  Synchronizing...
                </p>
              </div>
            )}
            <iframe
              src={microsoftFormUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${formLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setFormLoaded(true)}
              title="Registration Form"
            />
          </div>
        </section>

        {/* Campus Logistics & Map */}
        <section className="grid lg:grid-cols-2 gap-10 mb-32">
          <div className="bg-[#002855] text-white p-12 rounded-2xl shadow-xl flex flex-col justify-center border-b-8 border-[#C5941C]">
            <h2 className="text-4xl font-libre font-bold mb-8 border-b border-[#C5941C]/30 pb-4">
              Campus Logistics
            </h2>
            <div className="space-y-10">
              <div>
                <p className="text-[#C5941C] text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                  Reach the Secretariat
                </p>
                <p className="text-xl font-bold">
                  iic@chanakyauniversity.edu.in
                </p>
              </div>
              <div>
                <p className="text-[#C5941C] text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                  Address
                </p>
                <p className="text-lg font-light leading-relaxed opacity-80">
                  Chanakya University Global Campus,
                  <br />
                  NH-648, Haraluru - Polanahalli,
                  <br />
                  Bengaluru, Karnataka - 562165
                </p>
              </div>
            </div>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4981.483529394125!2d77.75307791156612!3d13.222808509265352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d1a987e305f%3A0x554a8703996500f!2sChanakya%20University!5e1!3m2!1sen!2sin!4v1772159570501!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Campus Map"
            />
          </div>
        </section>
      </main>

      {/* Premium Reverted Footer */}
      <footer className="bg-[#002855] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5941C] to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] text-[#C5941C] font-black uppercase tracking-[1em] mb-10 opacity-80">
            Rooted in Ideals • Ascending with Ideas
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <span className="text-2xl font-libre font-bold">SAMYUTI 2026</span>
            <div className="hidden md:block h-6 w-px bg-white/20" />
            <span className="text-sm opacity-60 tracking-widest">
              CHANAKYA UNIVERSITY
            </span>
          </div>
          <p className="text-xs opacity-40">
            © 2026 Chanakya University IIC. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const InfoBox = ({ label, value, border }) => (
  <div
    className={`p-10 bg-white text-center flex flex-col justify-center ${border ? "md:border-x-2 border-[#C5941C]" : ""}`}>
    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4">
      {label}
    </h4>
    <p className="text-xl font-libre font-bold text-[#002855]">{value}</p>
  </div>
);

const EventCard = ({
  title,
  theme,
  prize,
  coordinators,
  rules,
  context,
  contact,
}) => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div
      onClick={() => setIsTapped(!isTapped)}
      className="relative h-[450px] bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl md:hover:-translate-y-3 border-l-8 border-l-[#C5941C]">
      <div className="p-10 h-full flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-black text-[#C5941C] uppercase tracking-[0.4em] mb-4">
            {theme}
          </p>
          <h3 className="text-4xl font-libre font-bold text-[#002855] leading-tight mb-6">
            {title}
          </h3>
        </div>
        <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
          <span className="text-lg font-bold text-[#002855]">
            Prize: {prize}
          </span>
          <span className="text-[10px] text-gray-400 font-bold italic tracking-wider">
            {isTapped ? "Tap to close" : "Hover for Info →"}
          </span>
        </div>
      </div>

      {/* OVERLAY WITH GOLD THREAD SCROLLBAR */}
      <div
        className={`absolute inset-0 bg-[#002855] p-10 transition-transform duration-300 ease-in-out flex flex-col z-20 
        ${isTapped ? "translate-y-0" : "translate-y-full md:group-hover:translate-y-0"}`}>
        <h4 className="text-[#C5941C] font-libre font-bold text-2xl mb-6 border-b border-[#C5941C]/30 pb-3">
          Event Intel
        </h4>
        <div
          className="flex-1 overflow-y-auto pr-3 space-y-6 text-white/90 text-sm 
          scrollbar-thin scrollbar-thumb-[#C5941C] scrollbar-track-transparent">
          <p>
            <strong className="text-[#C5941C] text-[10px] uppercase block mb-1">
              Objective:
            </strong>
            {context}
          </p>
          <div>
            <strong className="text-[#C5941C] text-[10px] uppercase block mb-2">
              Rules:
            </strong>
            <ul className="space-y-2 text-xs opacity-80">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#C5941C] mr-2">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-[10px] text-[#C5941C] font-black uppercase mb-1">
            Lead Coordinators
          </p>
          <p className="text-xs text-white font-bold">{coordinators}</p>
          <p className="text-[11px] text-[#C5941C] mt-2 font-mono bg-black/30 p-2 rounded tracking-wider">
            {contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
