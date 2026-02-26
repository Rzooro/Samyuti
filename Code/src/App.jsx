import React, { useState } from "react";
import Header from "./Header.jsx";

// Note: Ensure these are in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

function App() {
  const [formLoaded, setFormLoaded] = useState(false);

  // Updated URL
  const microsoftFormUrl =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=vOOLNLOpdUel8NOiEjo_Mwj5KIY3m59CiLB3eRlQVhRUNVk5NVU1TDFLNVNCNEZOWFNLVTBTU05VQy4u";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#002855] font-['Inter'] pt-32 md:pt-24">
      {/* Top Accent Bar */}
      <div className="h-5 bg-[#C5941C]" />

      <Header />

      <main className="mx-auto px-[10%] py-12">
        {/* Infobox Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 border-2 border-[#C5941C] rounded-xl overflow-hidden shadow-lg">
          <InfoBox label="Event Dates" value="MARCH 28 - 31, 2026" />
          <InfoBox label="Primary Venue" value="CHANAKYA UNIVERSITY" border />
          <InfoBox label="Registration" value="BY MARCH 10, 2026" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Registration Portal Section */}
          <section className="lg:col-span-9 group bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#002855] px-8 md:px-12 py-10 text-white flex justify-between items-center border-b-4 border-[#C5941C]">
              <div>
                <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-wide">
                  Registration Portal
                </h2>
                <p className="text-[#C5941C] text-xs md:text-sm font-semibold uppercase mt-3 tracking-[0.4em]">
                  Official Delegate Entry 2026
                </p>
              </div>
              {/* Animated Accent Square */}
              <div className="h-12 w-12 border-2 border-[#C5941C] rotate-45 group-hover:bg-[#C5941C] group-hover:rotate-[135deg] transition-all duration-500 hidden md:block" />
            </div>

            <div className="relative min-h-[800px] md:min-h-[75vh] bg-gray-50">
              {!formLoaded && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-white z-10">
                  <div className="w-16 h-16 border-4 border-[#002855]/10 border-t-[#C5941C] rounded-full animate-spin"></div>
                  <p className="mt-8 text-xs font-bold tracking-[0.4em] text-gray-400 uppercase">
                    Loading University Portal
                  </p>
                </div>
              )}

              <iframe
                src={microsoftFormUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                onLoad={() => setFormLoaded(true)}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  formLoaded ? "opacity-100" : "opacity-0"
                }`}
                title="Cultural Fest Registration"
                allowFullScreen>
                Loading...
              </iframe>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-[#002855]">
              <h3 className="text-2xl font-['Playfair_Display'] font-bold mb-8 border-b border-gray-100 pb-4">
                Fest Tracks
              </h3>
              <ul className="space-y-6 text-base font-semibold">
                <EventItem name="Performing Arts" color="#C5941C" />
                <EventItem name="Creative Exhibits" color="#C5941C" />
                <EventItem name="Literary Events" color="#C5941C" />
                <EventItem name="Tech Innovations" color="#C5941C" />
              </ul>
            </div>

            <div className="p-10 bg-[#002855] text-white rounded-2xl shadow-xl">
              <p className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#C5941C]">
                Contact Secretariat
              </p>
              <p className="text-sm font-light opacity-80 leading-relaxed mb-6">
                Direct all queries regarding team slots and campus logistics
                here:
              </p>
              <p className="font-bold border-t border-white/10 pt-6 text-base break-words">
                iisc@chanakyauniversity.edu.in
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-24 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 font-black uppercase tracking-[0.7em] mb-8">
            Rooted in Ideals • Ascending with Ideas
          </p>
          <p className="text-lg text-[#002855] font-['Playfair_Display'] font-bold">
            © 2026 Chanakya University Cultural Committee
          </p>
        </div>
      </footer>
    </div>
  );
}

const InfoBox = ({ label, value, border }) => (
  <div
    className={`p-6 bg-white text-center flex flex-col justify-center ${border ? "md:border-x-2 border-[#C5941C]" : ""}`}>
    <h4 className="text-[10px] md:text-xs font-['Inter'] font-bold uppercase tracking-widest text-gray-400 mb-4">
      {label}
    </h4>
    <p className="text-lg md:text-xl font-['Playfair_Display'] font-bold text-[#002855] tracking-tight">
      {value}
    </p>
  </div>
);

const EventItem = ({ name, color }) => (
  <li className="flex justify-between items-center group cursor-default">
    <span className="group-hover:text-[#C5941C] transition-colors duration-300 tracking-tight">
      {name}
    </span>
    <div
      className="h-2 w-2 rounded-sm rotate-45 transition-all group-hover:scale-150 group-hover:bg-[#002855]"
      style={{ backgroundColor: color }}
    />
  </li>
);

export default App;
