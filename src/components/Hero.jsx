import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Download, Linkedin, Volume2, ChevronDown } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  const [speaking, setSpeaking] = useState(false);

  const speak = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(profile.voiceIntro);
    u.rate = 0.98; u.pitch = 1.15;
    const voices = window.speechSynthesis.getVoices();
    const f = voices.find((v) => /female|samantha|victoria|zira|google us english|karen|moira/i.test(v.name));
    if (f) u.voice = f;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  }, []);

  return (
    <header className="relative min-h-[88vh] flex flex-col items-center justify-center px-5 pt-28 pb-16 text-center">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 glass px-4 py-2 mb-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400/70" />
          <span className="relative rounded-full h-2.5 w-2.5 bg-cyan-400" />
        </span>
        <span className="font-mono text-xs text-cyan-200/90">intelligence universe · online</span>
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
        className="font-display font-extrabold leading-none" style={{ fontSize: "clamp(44px,9vw,96px)", letterSpacing: "2px" }}>
        <span className="shimmer">Mehak Saini</span>
      </motion.h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="mt-4 font-display text-lg md:text-2xl text-slate-100 glow-text tracking-wide">
        Business Intelligence Architect
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-3 font-mono text-xs md:text-sm tracking-[3px] text-cyan-200/70">
        ANALYTICS • STRATEGY • OPERATIONS • FINANCE • INNOVATION
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="mt-5 text-slate-300/90 text-sm md:text-base max-w-2xl">
        {profile.tagline}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
        className="mt-9 flex flex-wrap gap-3 justify-center">
        <a href="/Mehak%20Saini_Resume.pdf" target="_blank" rel="noopener noreferrer" download
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-slate-900 transition hover:scale-105"
          style={{ background: "linear-gradient(90deg,#22d3ee,#34d399)" }}>
          <Download size={18} /> Resume
        </a>
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-slate-900 transition hover:scale-105"
          style={{ background: "linear-gradient(90deg,#22d3ee,#34d399)" }}>
          <Download size={18} /> Resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:scale-105 transition">
          <Linkedin size={18} /> LinkedIn
        </a>
        <button onClick={speak}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:scale-105 transition"
          style={{ boxShadow: speaking ? "0 0 24px rgba(168,85,247,.6)" : "none" }}>
          <Volume2 size={18} className="text-violet-300" /> {speaking ? "Speaking…" : "Hear my intro"}
        </button>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="mt-6 font-mono text-xs text-emerald-400/80">● {profile.workAuth}</motion.p>

      <motion.a href="#career"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
        <span className="font-mono text-xs">explore the universe</span>
        <ChevronDown size={18} />
      </motion.a>
    </header>
  );
}
