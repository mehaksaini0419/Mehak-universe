import { motion } from "framer-motion";
import { useState } from "react";
import { Section, Modal } from "./UI";
import Icon from "./Icon";
import { careerPaths } from "../data/content";

export default function CareerUniverse() {
  const [active, setActive] = useState(null);
  return (
    <Section id="career" kicker="01 · Career Universe" title="Seven Domains, One Strategist"
      subtitle="Each orb is a domain I work across. Click to open the deeper layer — skills, tools, projects, and the story.">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {careerPaths.map((p, i) => (
          <motion.button key={p.id} onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.07, type: "spring", stiffness: 90 }}
            whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="glass p-6 flex flex-col items-center text-center group relative overflow-hidden">
            <div className="absolute -inset-10 opacity-0 group-hover:opacity-40 transition duration-500"
              style={{ background: `radial-gradient(circle at center, ${p.color}, transparent 60%)` }} />
            <div className="relative w-16 h-16 rounded-full grid place-items-center mb-4 float"
              style={{ background: `${p.color}22`, border: `1px solid ${p.color}66`, boxShadow: `0 0 24px ${p.color}44` }}>
              <Icon name={p.icon} size={28} style={{ color: p.color }} />
            </div>
            <div className="font-display font-semibold text-lg">{p.title}</div>
            <p className="text-xs text-slate-400 mt-1.5 leading-snug">{p.summary}</p>
            <span className="mt-3 text-[10px] font-mono uppercase tracking-widest" style={{ color: p.color }}>open ↗</span>
          </motion.button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} accent={active?.color}>
        {active && (
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl grid place-items-center"
                style={{ background: `${active.color}22`, border: `1px solid ${active.color}66` }}>
                <Icon name={active.icon} size={26} style={{ color: active.color }} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold" style={{ color: active.color }}>{active.title}</h3>
                <p className="text-sm text-slate-400">{active.summary}</p>
              </div>
            </div>
            <div className="glass p-4 mb-5 text-sm text-slate-200 leading-relaxed" style={{ borderColor: `${active.color}44` }}>
              <span className="font-mono text-[10px] uppercase tracking-widest block mb-1.5" style={{ color: active.color }}>The story</span>
              {active.story}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Panel label="Skills" items={active.skills} color={active.color} />
              <Panel label="Tools" items={active.tools} color={active.color} />
              <Panel label="Projects" items={active.projects} color={active.color} />
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}

function Panel({ label, items, color }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest mb-2 text-slate-400">{label}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="text-xs px-2.5 py-1 rounded-lg"
            style={{ background: `${color}18`, border: `1px solid ${color}40`, color: "#dbe7ff" }}>{it}</span>
        ))}
      </div>
    </div>
  );
}
