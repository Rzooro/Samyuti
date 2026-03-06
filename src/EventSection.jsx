import React, { useState } from "react";

const samyutiEvents = [
  {
    title: "AI Storytelling",
    theme: "Celebrating Historical Indian Women",
    prize: "₹10,000",
    context:
      "Craft original AI-assisted stories highlighting the courage and contributions of iconic historical Indian women.",
    rules: ["Use Perplexity AI", "Max 2000 words", "1-hour duration"],
    leads: ["Sourabha B N", "V Vidhu Krishna"],
    phones: ["+91 94801 44714", "+91 96008 60002"],
    emails: [
      "sourabhabn.ecs24@chanakyauniversity.edu.in",
      "vidhuk.ema24@chanakyauniversity.edu.in",
    ],
  },
  {
    title: "Culture Speaks AI",
    theme: "Traditional Attire & AI Narration",
    prize: "₹22,500",
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
  },
  {
    title: "IKS Hackathon",
    theme: "Heritage & Tech Innovation",
    prize: "₹60,000",
    context:
      "An open-stack innovation event integrating Indian Knowledge Systems (IKS) with modern AI.",
    rules: [
      "Teams of 2-4",
      "Video pitch & Git repo",
      "Live demo for finalists",
    ],
    leads: ["Prithvi S Hegde", "Suprajna S"],
    phones: ["+91 70195 38181", "+91 97315 77988"],
    emails: [
      "prithvih.ecs24@chanakyauniversity.edu.in",
      "suprajnah.eai24@chanakyauniversity.edu.in",
    ],
  },
  {
    title: "Hardware Hackathon",
    theme: "72-Hour Build Marathon",
    prize: "₹1,20,000",
    context:
      "Transform raw components into real-world solutions through an on-site continuous 72-hour marathon.",
    rules: [
      "Stay on-site for 72 hours",
      "No pre-built kits",
      "Build from scratch on-site",
    ],
    leads: ["Abhilash N S Reddy", "Vaibhav K Joshi"],
    phones: ["+91 81473 82695", "+91 88501 79947"],
    emails: [
      "abhilashr.eai24@chanakyauniversity.edu.in",
      "vaibhavkj.ecs24@chanakyauniversity.edu.in",
    ],
  },
  {
    title: "Gaming: Code the Past",
    theme: "Strategy & Survival Prototypes",
    prize: "₹10,000",
    context:
      "Build 2D prototypes based on ancient themes like Chanakya's Mandala or The Chakravyuh.",
    rules: [
      "Teams of 2-4",
      "Live modification rounds",
      "Unity, Godot, Gdevelop allowed",
    ],
    leads: ["Yashas G Hombal", "Sarvesh A Patil"],
    phones: ["+91 99860 62018", "+91 63611 65646"],
    emails: [
      "yashasgb.eai24@chanakyauniversity.edu.in",
      "sarveshap.eec@chanakyauniversity.edu.in",
    ],
  },
  {
    title: "Treasure Hunt",
    theme: "Logic & Engineering Challenges",
    prize: "₹30,000",
    context:
      "A logic-driven event challenging participants through engineering tasks and IKS clues.",
    rules: [
      "No internet or AI allowed",
      "Real-time lab solving",
      "Fastest completion wins",
    ],
    leads: ["Prateek Joshi", "Abhishek Yadav K"],
    phones: ["+91 95289 83012", "+91 94834 23550"],
    emails: [
      "prateekj.eve24@chanakyauniversity.edu.in",
      "abhishekyk.ema25@chanakyauniversity.edu.in",
    ],
  },
  {
    title: "E-Sports (Valorant)",
    theme: "Tactical 5v5 Tournament",
    prize: "₹15,500",
    context:
      "Five-versus-five tactical shooter tournament played on Mumbai servers.",
    rules: [
      "BYO Laptop format",
      "Engineering quiz map select",
      "Fair-play protocols apply",
    ],
    leads: ["Dheeraj V Gowda", "Adith Aiyanna"],
    phones: ["+91 93537 47945", "+91 74839 26420"],
    emails: [
      "dheerajvg.eai24@chanakyauniversity.edu.in",
      "adithk.ema24@chanakyauniversity.edu.in",
    ],
  },
  {
    title: "Video Creation",
    theme: "Social Awareness",
    prize: "₹10,000",
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
  },
  {
    title: "IKS Quiz",
    theme: "Heritage & Wisdom",
    prize: "₹6,000",
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
      className="relative h-[420px] bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 md:hover:-translate-y-3 md:hover:shadow-2xl border-l-8 border-l-[#C5941C] p-10 flex flex-col justify-between group">
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
        <h4 className="text-[#C5941C] font-libre font-bold text-2xl mb-6 border-b border-[#C5941C]/30 pb-3">
          Event Intel
        </h4>
        <div className="flex-1 overflow-y-auto pr-3 space-y-6 text-white/90 text-sm scrollbar-thin scrollbar-thumb-[#C5941C] scrollbar-track-transparent">
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
