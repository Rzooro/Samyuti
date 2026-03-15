import React, { useState } from "react";

const samyutiEvents = [
  {
    title: "Smrithi Mandaara",
    theme: "Celebrating Historical Indian Women",
    prize: "₹10,000",
    date: "March 28, 2026",
    context:
      "Craft original AI-assisted stories highlighting the courage and contributions of iconic historical Indian women.",
    rules: ["Use Perplexity AI", "Max 2000 words", "1-hour duration"],
    leads: ["Sourabha B N", "V Vidhu Krishna"],
    phones: ["+91 94801 44714", "+91 96008 60002"],
    emails: [
      "sourabhabn.ecs24@chanakyauniversity.edu.in",
      "vidhuk.ema24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQBTSM0NRasKRZ74miFhRUz9AQwQjepdty4wQZ6oJ1GCXlA?e=IkdTVp",
  },
  {
    title: "Vastra Verse",
    theme: "Traditional Attire & AI Narration",
    prize: "₹24,000",
    date: "March 28, 2026",
    context:
      "Walk the runway while an AI narrates the cultural significance of your traditional attire.",
    rules: [
      "AI prompts (50-80 words)",
      "Solo (45s-3m) | Group (2m-3m)",
      "Full dance not permitted",
    ],
    leads: ["Shyama Rai", "Neha Rajkumar"],
    phones: ["+91 76949 95982", "+91 91083 71116"],
    emails: [
      "shyamar.eai24@chanakyauniversity.edu.in",
      "nehar.eai24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQAcvXjPTowCRJqzWV4kaladAdcKHgyNwFcFxLlnzmLxDbQ?e=mgq53V",
  },
  {
    title: "IKS Online Hackathon",
    theme: "Heritage & Tech Innovation",
    prize: "₹60,000",
    date: "March 18 - 25, 2026",
    context:
      "An open-stack innovation event centered on integrating Indian Knowledge Systems (IKS) with modern AI.",
    rules: [
      "Teams of 2-4",
      "Video pitch & Git repository",
      "Live demo for finalists in Campus",
    ],
    leads: ["Prithvi S Hegde", "Suprajna S"],
    phones: ["+91 70195 38181", "+91 97315 77988"],
    emails: [
      "prithvih.ecs24@chanakyauniversity.edu.in",
      "suprajnah.eai24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQARg7KldsUZTozRG2SsY1pfATFXfeiBjFrTeXuR6jUdqx4?e=VzoW37",
  },
  {
    title: "Hardware Hackathon",
    theme: "IoT & Sustainability",
    prize: "₹1,20,000",
    date: "March 28 - 30, 2026",
    context:
      "This hackathon is designed to engage participants in solving real-world problems through a hardware-focused, problem-solving approach. Teams will be allocated 48 hours to address a real-world problem and develop a functional prototype. It is expected that teams will utilise innovative methods to resolve these challenges.",
    rules: [
      "Stay on-site for 48 hours",
      "No pre-built kits",
      "Build from scratch on-site",
    ],
    leads: ["Abhilash N S Reddy", "Vaibhav K Joshi"],
    phones: ["+91 81473 82695", "+91 88501 79947"],
    emails: [
      "abhilashr.eai24@chanakyauniversity.edu.in",
      "vaibhavkj.ecs24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      " https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQCjDJNYilXcRrxD_mLyybSjAWrcKDgMOmmYxP3c9cxKJzc?e=8I9V3I",
  },
  {
    title: "Indic Game Jam",
    theme: "Strategy & Survival Prototypes",
    prize: "₹20,000",
    date: "March 30, 2026",
    context:
      "Build 2D games based on ancient themes like Chanakya's Mandala or The Chakravyuh.",
    rules: [
      "Teams of 2-4",
      "Live modification rounds",
      "Teams are allowed to use any platform, language, or engine to build the game",
    ],
    leads: ["Yashas G Hombal", "Sarvesh A Patil"],
    phones: ["+91 99860 62018", "+91 63611 65646"],
    emails: [
      "yashasgb.eai24@chanakyauniversity.edu.in",
      "sarveshap.eec@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQDkZTWz4h7TS5jHDb-s_GEmAa9HN6JP8X2yvMU6LMeTgMs?e=08Ra5a",
  },
  {
    title: "Treasure Hunt",
    theme: "Logic, clues & engineering",
    prize: "₹15,000",
    date: "March 30, 2026",
    context:
      "A logic-driven event challenging participants through engineering tasks and IKS clues.",
    rules: [
      "Teams of 2-4",
      "Extra clues with penalties",
      "No internet or AI allowed",
    ],
    leads: ["Prateek Joshi", "Abhishek Yadav K"],
    phones: ["+91 95289 83012", "+91 94834 23550"],
    emails: [
      "prateekj.eve24@chanakyauniversity.edu.in",
      "abhishekyk.ema25@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQAJe-zt9FjGTpRaNfG6RktSAVhR39tYzCjRcK_OVYNPvZw?e=83KS7f",
  },
  {
    title: "E-Sports (Valorant)",
    theme: "Tactical 5v5 Tournament",
    prize: "₹12,000",
    date: "March 28, 2026",
    context: "5v5 tactical shooter tournament played on Mumbai servers.",
    rules: [
      "Bring Your Own Laptop format",
      "5 players per team",
      "Best of 3 for finals",
    ],
    leads: ["Dheeraj V Gowda", "Adith Aiyanna"],
    phones: ["+91 93537 47945", "+91 74839 26420"],
    emails: [
      "dheerajvg.eai24@chanakyauniversity.edu.in",
      "adithk.ema24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQC15YVTFiaISIzzcjzSKOTMAe_3PzeaMTLWn4FgmXdMsmY?e=YquN9G",
  },
  {
    title: "Dhristi Manthan",
    theme: "Social Awareness",
    prize: "₹18,000",
    date: "March 28, 2026",
    context:
      "Create impactful short videos highlighting meaningful real-world challenges.",
    rules: [
      "Creative presentation",
      "Impactful visual expression",
      "Influence positive change",
    ],
    leads: ["Nikith K", "Mohammed Tanzeel J M"],
    phones: ["+91 93984 91930", "+91 79752 84313"],
    emails: [
      "nikithk.eai24@chanakyauniversity.edu.in",
      "mohammedjm.eve24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQCJ5Scr6YdPQrjpnjHlJNMXAUAx63Nwycnc-ENQCgDCM1E?e=4G2xE7",
  },
  {
    title: "IKS Quiz",
    theme: "Heritage & Wisdom",
    prize: "₹9,000",
    date: "March 30, 2026",
    context:
      "A dynamic quiz testing multidisciplinary knowledge and Indian Knowledge Systems.",
    rules: [
      "Written qualifier round",
      "High-stakes buzzer round",
      "Individual or teams of two",
    ],
    leads: ["Darshan Venkatesh", "Vamshi Kanithi"],
    phones: ["+91 80887 93889", "+91 93467 95738"],
    emails: [
      "darshanv.eec24@chanakyauniversity.edu.in",
      "vamshik.eec24@chanakyauniversity.edu.in",
    ],
    pdfUrl:
      "https://chanakyauniversity-my.sharepoint.com/:b:/g/personal/iic_chanakyauniversity_edu_in/IQAbJexHEfXzQ6PUwWk3n5GWAW6NU6YDS22Vn-lw_1EmC0w?e=lpz313",
  },
];

export default function EventSection({ onOpenModal }) {
  return (
    <section className="mb-32">
      <div className="flex items-center gap-6 mb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-libre font-bold text-[#002855]">
          Event Tracks
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#C5941C] to-transparent opacity-30" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
        {samyutiEvents.map((event, idx) => (
          <EventCard
            key={idx}
            event={event}
            onOpen={() => onOpenModal(event)}
          />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event, onOpen }) {
  const [isTapped, setIsTapped] = useState(false);
  const handleInteraction = () => {
    window.innerWidth < 768 ? setIsTapped(!isTapped) : onOpen();
  };

  return (
    <div
      onClick={handleInteraction}
      className="relative h-105 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 md:hover:-translate-y-3 md:hover:shadow-2xl border-l-8 border-l-[#C5941C] p-10 flex flex-col justify-between group will-change-transform transform-gpu">
      <div>
        <p className="text-[10px] font-black text-[#C5941C] uppercase tracking-[0.4em] mb-4">
          {event.theme}
        </p>
        <h3 className="text-4xl font-libre font-bold text-[#002855] leading-tight md:group-hover:text-[#C5941C] transition-colors">
          {event.title}
        </h3>
      </div>
      <div className="pt-6 border-t border-gray-50 flex justify-between items-center font-bold text-[#002855]">
        <span className="text-lg">Prize Pool: {event.prize}</span>
        <span className="text-[10px] uppercase tracking-widest text-[#C5941C]">
          Explore +
        </span>
      </div>

      <div
        className={`absolute inset-0 bg-[#002855] p-10 transition-transform duration-300 ease-in-out flex flex-col z-20 md:hidden ${isTapped ? "translate-y-0" : "translate-y-full"}`}>
        <h4 className="text-[#C5941C] font-libre font-bold text-2xl mb-4 border-b border-[#C5941C]/30 pb-3">
          Event Intel
        </h4>
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 text-white/90 text-sm scrollbar-thin scrollbar-thumb-[#C5941C] scrollbar-track-transparent">
          <div>
            <strong className="text-[#C5941C] text-[10px] uppercase block mb-1">
              Schedule:
            </strong>
            {event.date}
          </div>
          <p>
            <strong className="text-[#C5941C] text-[10px] uppercase block mb-1">
              Context:
            </strong>
            {event.context}
          </p>
          <div>
            <strong className="text-[#C5941C] text-[10px] uppercase block mb-2">
              Rules:
            </strong>
            <ul className="space-y-2 text-xs opacity-80">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#C5941C] mr-2">•</span> {rule}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={event.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-[#C5941C] font-bold text-[10px] uppercase tracking-widest bg-white/5 p-3 rounded-xl border border-[#C5941C]/20 shadow-sm active:scale-95 transition-transform">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Guidelines PDF
          </a>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-[10px] text-[#C5941C] font-black uppercase mb-1">
            Lead Contact
          </p>
          <p className="text-xs text-white font-bold">{event.leads[0]}</p>
          <p className="text-[11px] text-[#C5941C] mt-2 font-mono bg-black/30 p-2 rounded tracking-wider">
            {event.phones[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
