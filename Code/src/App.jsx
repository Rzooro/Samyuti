import React, { useState } from "react";
import Header from "./Header.jsx";

// Ensure these Google Fonts are in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

function App() {
  const [formLoaded, setFormLoaded] = useState(false);

  const microsoftFormUrl =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=vOOLNLOpdUel8NOiEjo_Mwj5KIY3m59CiLB3eRlQVhRUNVk5NVU1TDFLNVNCNEZOWFNLVTBTU05VQy4u";

  return (
    <div className="h-screen flex flex-col bg-[#FAFAFA] text-[#002855] font-['Inter'] overflow-hidden">
      {/* Top Accent Bar */}
      <div className="h-5 bg-[#C5941C] flex-shrink-0" />

      {/* Header Section - Pinned to Top */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* Main Workspace - Fills the remaining screen height */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 flex flex-col min-h-0">
        {/* Infobox Ribbon - Restored font-libre */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10 border-2 border-[#C5941C] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <InfoBox label="Event Dates" value="MARCH 28 - 31, 2026" />
          <InfoBox label="Primary Venue" value="CHANAKYA UNIVERSITY" border />
          <InfoBox label="Registration" value="BY MARCH 10, 2026" />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-10 min-h-0">
          {/* Main Registration Portal Container */}
          <section className="flex-[3] flex flex-col group bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#002855] px-12 py-8 text-white flex justify-between items-center border-b-4 border-[#C5941C] flex-shrink-0">
              <div>
                <h2 className="text-4xl font-libre font-bold tracking-wide">
                  Registration Portal
                </h2>
                <p className="text-[#C5941C] text-sm font-semibold uppercase mt-3 tracking-[0.4em]">
                  Official Delegate Entry 2026
                </p>
              </div>
              {/* Restored 300ms Rotate-135 animation */}
              <div className="h-12 w-12 border-2 border-[#C5941C] rotate-45 group-hover:bg-[#C5941C] group-hover:rotate-[135deg] transition-all duration-300 hidden md:block" />
            </div>

            {/* Iframe Viewport - Internal Scroll only */}
            <div className="flex-1 relative bg-gray-50">
              {!formLoaded && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-white z-10">
                  <div className="w-16 h-16 border-4 border-[#002855] border-t-[#C5941C] rounded-full animate-spin"></div>
                  <p className="mt-8 text-sm font-bold tracking-[0.4em] text-gray-400 uppercase">
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
          <aside className="lg:w-80 flex flex-col space-y-8 overflow-y-auto pr-2 custom-scrollbar">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-[#002855]">
              <h3 className="text-2xl font-libre font-bold mb-8 border-b border-gray-100 pb-4">
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
              <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-[#C5941C]">
                Contact Secretariat
              </p>
              <p className="text-base font-light opacity-80 leading-relaxed mb-6">
                Direct all queries regarding team slots and campus logistics
                here:
              </p>
              <p className="font-bold border-t border-blue-900 pt-6 text-lg break-all">
                fest@chanakyauniversity.edu.in
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Slim Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 font-black uppercase tracking-[0.7em] mb-4">
            Rooted in Ideals • Ascending with Ideas
          </p>
          <p className="text-lg text-[#002855] font-libre font-bold">
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
    <h4 className="text-sm font-['Inter'] font-bold uppercase tracking-widest text-gray-400 mb-4">
      {label}
    </h4>
    <p className="text-xl md:text-2xl font-libre font-bold text-[#002855] tracking-tight">
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
