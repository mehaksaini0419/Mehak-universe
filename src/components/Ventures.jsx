import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, CountUp } from "./UI";
import { vikas } from "../data/content";

export default function Ventures() {
  return (
    <Section id="ventures" kicker="03 · Built & Shipped" title="A Live Product I Built"
      subtitle="Beyond analytics — I designed and shipped a real, live website for my family's business.">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass overflow-hidden" style={{ border: "1px solid rgba(245,196,81,.35)" }}>
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: "rgba(0,0,0,.3)" }}>
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </span>
          <span className="font-mono text-xs text-slate-300 ml-2">vikassteeludyog.com</span>
          <span className="ml-auto font-mono text-[10px] text-emerald-400">● LIVE</span>
        </div>
        <div className="grid md:grid-cols-[auto_1fr] gap-6 p-6 items-center">
          <div className="relative mx-auto">
            <div className="absolute inset-0 rounded-2xl" style={{ background: "radial-gradient(circle,#f5c45133,transparent 70%)", filter: "blur(8px)" }} />
            <img src={vikas.logo} alt="Vikas Steel Udyog logo" className="relative w-40 h-40 object-contain rounded-2xl float" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-amber-300/80 mb-1">{vikas.tag}</div>
            <h3 className="font-display text-2xl font-bold" style={{ color: "#f5c451" }}>{vikas.name}</h3>
            <p className="text-slate-300 mt-2 leading-relaxed text-sm">{vikas.desc}</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {vikas.stats.map((s) => (
                <div key={s.label} className="glass p-3 text-center">
                  <div className="font-display text-2xl font-bold" style={{ color: "#f5c451" }}><CountUp to={s.v} suffix={s.suffix} /></div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 items-center">
              {vikas.stack.map((t) => (<span key={t} className="text-[10px] font-mono px-2 py-1 rounded" style={{ background: "#f5c45118", color: "#f5c451" }}>{t}</span>))}
              <a href={vikas.url} target="_blank" rel="noreferrer"
                className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-amber-950 hover:scale-105 transition text-sm"
                style={{ background: "linear-gradient(90deg,#f5c451,#fb923c)" }}>
                Visit live site <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
