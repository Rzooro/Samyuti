import React, { useState } from "react";
import Header from "./Header.jsx";
import EventSection from "./EventSection.jsx";
import usePreventIframeScroll from "./usePreventIframeScroll";

function App() {
  const [formLoaded, setFormLoaded] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  usePreventIframeScroll();

  const microsoftFormUrl =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=vOOLNLOpdUel8NOiEjo_Mwj5KIY3m59CiLB3eRlQVhRUNVk5NVU1TDFLNVNCNEZOWFNLVTBTU05VQy4u";

  const handleModalRegister = () => {
    setActiveEvent(null);
    setTimeout(() => {
      const section = document.getElementById("registration");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#002855] font-['Inter'] scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 text-center bg-white border-b border-gray-100">
        <h1 className="text-6xl md:text-8xl font-libre font-bold mb-6 tracking-tight uppercase">
          SAMYUTI <span className="text-[#C5941C]">2026</span>
        </h1>
        <p className="text-[#C5941C] text-sm md:text-lg font-semibold tracking-[0.5em] uppercase max-w-3xl mx-auto leading-relaxed opacity-90">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24 border-2 border-[#C5941C] rounded-xl overflow-hidden shadow-xl bg-white">
          <InfoBox label="Event Dates" value="MARCH 28 - 31, 2026" />
          <InfoBox label="Primary Venue" value="GLOBAL CAMPUS, CU" border />
          <InfoBox label="Registration" value="BY MARCH 10, 2026" />
        </div>

        <EventSection onOpenModal={(event) => setActiveEvent(event)} />

        {/* ELEGANT REMODELED MODAL */}
        {activeEvent && (
          <div className="fixed inset-0 z-[100] hidden md:flex items-center justify-center p-4 bg-[#002855]/70 backdrop-blur-md transition-all duration-300">
            <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden border border-gray-100 animate-in zoom-in duration-300">
              {/* Header */}
              <div className="bg-[#002855] p-10 text-white border-b-4 border-[#C5941C] flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5941C] mb-2">
                    {activeEvent.theme}
                  </p>
                  <h3 className="text-4xl font-libre font-bold tracking-wide">
                    {activeEvent.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveEvent(null)}
                  className="text-[#C5941C] hover:rotate-90 cursor-pointer transition-transform duration-300 p-3 bg-white/5 rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Body Content */}
              <div className="p-12 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#C5941C] scrollbar-track-gray-50">
                <div className="grid md:grid-cols-2 gap-6 text-[#002855]">
                  <div className="space-y-8">
                    <div>
                      <strong className="uppercase text-[10px] font-black tracking-widest block mb-3 text-gray-400">
                        Context
                      </strong>
                      <p className="text-md leading-relaxed opacity-90">
                        {activeEvent.context}
                      </p>
                    </div>
                    <div>
                      <strong className="uppercase text-[10px] font-black tracking-widest block mb-4 text-gray-400">
                        Guidelines
                      </strong>
                      <ul className="space-y-4">
                        {activeEvent.rules.map((rule, i) => (
                          <li
                            key={i}
                            className="flex gap-4 text-sm font-medium items-start">
                            <span className="text-[#C5941C] flex-shrink-0 mt-1">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                              </svg>
                            </span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8 border-l border-gray-100 pl-6">
                    <div>
                      <p className="font-black uppercase tracking-widest opacity-40 mb-4 text-[10px]">
                        Coordinators
                      </p>
                      <div className="space-y-4">
                        {activeEvent.leads.map((lead, i) => (
                          <div key={i}>
                            <p className="text-md font-bold">{lead}</p>
                            <p className="text-xs font-mono text-[#C5941C]">
                              {activeEvent.phones[i]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-black uppercase tracking-widest opacity-40 mb-4 text-[10px]">
                        Official Channel
                      </p>
                      <p className="font-mono text-xs text-[#002855] bg-gray-50 p-3 rounded border border-gray-100 break-all">
                        {activeEvent.emails[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* REMODELED FOOTER: Balanced Action Bar */}
              <div className="bg-gray-50 p-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 px-12">
                <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-gray-200 shadow-sm">
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    Total Pool
                  </span>
                  <span className="text-[#002855] font-libre font-bold text-3xl">
                    {activeEvent.prize}
                  </span>
                </div>

                <button
                  onClick={handleModalRegister}
                  className="w-full cursor-pointer md:w-auto bg-[#002855] text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#C5941C] transition-all duration-500 shadow-[0_10px_20px_rgba(80,110,140,0.3)] hover:shadow-none active:scale-95 border-2 border-[#C5941C]">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Form Section */}
        <section
          id="registration"
          className="group bg-white rounded-[2.5rem] shadow-2xl border border-gray-200 overflow-hidden mb-32">
          <div className="bg-[#002855] px-8 md:px-16 py-12 text-white flex justify-between items-center border-b-8 border-[#C5941C]">
            <div>
              <h2 className="text-4xl md:text-5xl font-libre font-bold tracking-wide">
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
              <div className="absolute inset-0 flex justify-center items-center bg-white z-10 text-[#002855] font-bold tracking-[0.5em] animate-pulse">
                ESTABLISHING CONNECTION...
              </div>
            )}
            <iframe
              src={microsoftFormUrl}
              className="absolute inset-0 w-full h-full"
              onLoad={() => setFormLoaded(true)}
              title="Registration"
            />
          </div>
        </section>

        {/* Logistics */}
        <section className="flex flex-col lg:flex-row gap-8 mb-32">
          <div className="flex-1 bg-[#002855] text-white p-12 rounded-[2.5rem] shadow-xl border-b-8 border-[#C5941C] flex flex-col justify-center">
            <h2 className="text-4xl font-libre font-bold mb-8 border-b border-white/10 pb-4 tracking-tighter">
              Campus Logistics
            </h2>
            <div className="space-y-10">
              <div>
                <p className="text-[#C5941C] text-[10px] font-black uppercase tracking-widest mb-3">
                  Support
                </p>
                <p className="text-xl font-bold">
                  iic@chanakyauniversity.edu.in
                </p>
              </div>
              <div>
                <p className="text-[#C5941C] text-[10px] font-black uppercase tracking-widest mb-3">
                  Campus
                </p>
                <p className="text-lg font-light leading-relaxed opacity-80">
                  Chanakya University Global Campus, NH-648, Haraluru -
                  Polanahalli, Bengaluru, Karnataka - 562165
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1.4] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4981.483529394125!2d77.75307791156612!3d13.222808509265352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d1a987e305f%3A0x554a8703996500f!2sChanakya%20University!5e1!3m2!1sen!2sin!4v1772159570501!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#002855] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5941C] to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-[#C5941C] font-black uppercase tracking-[1em] mb-10 opacity-80">
            Rooted in Ideals • Ascending with Ideas
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <span className="text-3xl font-libre font-bold uppercase">
              SAMYUTI 2026
            </span>
            <div className="hidden md:block h-6 w-px bg-white/20" />
            <span className="text-lg opacity-60 tracking-widest uppercase">
              CHANAKYA UNIVERSITY
            </span>
          </div>
          <p className="text-sm opacity-40">
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
    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
      {label}
    </h4>
    <p className="text-xl font-libre font-bold text-[#002855] tracking-tight">
      {value}
    </p>
  </div>
);

export default App;
