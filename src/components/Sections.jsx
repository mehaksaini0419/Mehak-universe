import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Download, Linkedin, Mail, Phone, Sparkles, Github } from "lucide-react";
import { Section, CountUp } from "./UI";
import Icon from "./Icon";
import { tools, strengths, experience, education, certifications, recruiterKpis, profile } from "../data/content";

// ---------- TOOLS GALAXY ----------
export function ToolsGalaxy() {
  const [hover, setHover] = useState(null);
  const ring1 = tools.slice(0, 6), ring2 = tools.slice(6);
  return (
    <Section id="tools" kicker="04 · AI & Tools Galaxy" title="My Orbit of Tools"
      subtitle="The platforms and AI I work with, orbiting like planets. Hover any tool to see how I use it.">
      <div className="relative h-[460px] md:h-[520px] flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full grid place-items-center glass-strong z-10 text-center">
          <span className="font-display font-bold shimmer text-sm leading-tight px-2">DATA<br />CORE</span>
        </div>
        <Ring radius={150} duration={42} list={ring1} onHover={setHover} />
        <Ring radius={230} duration={64} reverse list={ring2} onHover={setHover} />
        <motion.div key={hover?.name || "none"} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 glass px-5 py-3 max-w-md text-center">
          {hover ? (<><span className="font-display font-semibold" style={{ color: hover.color }}>{hover.name}</span><span className="text-slate-300 text-sm"> — {hover.use}</span></>)
            : (<span className="text-slate-400 text-sm font-mono">hover a planet to learn more</span>)}
        </motion.div>
      </div>
    </Section>
  );
}
function Ring({ radius, duration, reverse, list, onHover }) {
  return (
    <div className="absolute rounded-full border border-white/5"
      style={{ width: radius * 2, height: radius * 2, animation: `${reverse ? "spinSlow" : "spin"} ${duration}s linear infinite` }}>
      {list.map((t, i) => {
        const a = (i / list.length) * 2 * Math.PI;
        const x = radius + radius * Math.cos(a) - 26, y = radius + radius * Math.sin(a) - 26;
        return (
          <motion.div key={t.name} className="absolute w-[52px] h-[52px] rounded-full grid place-items-center cursor-pointer"
            style={{ left: x, top: y, background: `${t.color}22`, border: `1px solid ${t.color}77`, boxShadow: `0 0 18px ${t.color}55`,
              animation: `${reverse ? "spin" : "spinSlow"} ${duration}s linear infinite` }}
            whileHover={{ scale: 1.3 }} onMouseEnter={() => onHover(t)} onMouseLeave={() => onHover(null)}>
            <span className="font-mono text-[9px] text-center leading-tight px-1" style={{ color: t.color }}>{t.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ---------- KNOWLEDGE GARDEN ----------
export function KnowledgeGarden() {
  return (
    <Section id="garden" kicker="05 · Knowledge Garden" title="Where Strengths Take Root"
      subtitle="Each tree is a strength I've grown — over mountains of work, under a rainbow of disciplines.">
      <div className="relative">
        <svg viewBox="0 0 1000 220" className="w-full h-auto mb-[-40px] opacity-90" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#f472b6" /><stop offset="0.25" stopColor="#fb923c" /><stop offset="0.5" stopColor="#f5c451" />
              <stop offset="0.7" stopColor="#34d399" /><stop offset="0.85" stopColor="#22d3ee" /><stop offset="1" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3b4a8a" /><stop offset="1" stopColor="#0b1030" /></linearGradient>
          </defs>
          <path d="M120,210 A380,380 0 0,1 880,210" fill="none" stroke="url(#rainbow)" strokeWidth="6" opacity="0.55" />
          <path d="M0,220 L180,80 L320,200 L470,60 L640,210 L780,100 L1000,220 Z" fill="url(#mtn)" />
          <path d="M0,220 L150,140 L300,220 L460,150 L620,220 L820,160 L1000,220 Z" fill="#0b1030" opacity="0.7" />
        </svg>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
        {strengths.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }} className="glass p-5 text-center">
            <div className="relative w-14 h-16 mx-auto mb-3">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full float grid place-items-center"
                style={{ background: "radial-gradient(circle,#34d39955,#22d3ee22)", border: "1px solid #34d39966", boxShadow: "0 0 18px #34d39944" }}>
                <Icon name={s.icon} size={22} className="text-emerald-200" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-5 rounded-full bg-amber-700/70" />
            </div>
            <div className="font-display font-semibold">{s.name}</div>
            <p className="text-xs text-slate-400 mt-1.5 leading-snug">{s.note}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------- TIMELINE ----------
export function Timeline() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="experience" kicker="06 · Experience Timeline" title="The Journey So Far"
      subtitle="Click any milestone to expand its achievements, tools, and impact.">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ background: "linear-gradient(180deg,#22d3ee,#a855f7,#34d399)" }} />
        {experience.map((e, i) => {
          const left = i % 2 === 0, isOpen = open === i;
          return (
            <motion.div key={i} initial={{ opacity: 0, x: left ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className={`relative mb-6 pl-12 md:pl-0 md:w-1/2 ${left ? "md:pr-10" : "md:pl-10 md:ml-auto"}`}>
              <div className="absolute left-4 md:left-auto top-5 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                style={{ [left ? "right" : "left"]: "-8px", background: "#22d3ee", boxShadow: "0 0 14px #22d3ee" }} />
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="glass p-5 w-full text-left hover:border-cyan-400/40 transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display font-semibold text-lg">{e.role}</div>
                    <div className="text-sm text-cyan-200/80">{e.company}</div>
                    <div className="text-xs text-slate-400">{e.location}</div>
                  </div>
                  <ChevronDown size={18} className={`shrink-0 mt-1 transition ${isOpen ? "rotate-180" : ""}`} />
                </div>
                <div className="font-mono text-xs text-amber-300/80 mt-2">{e.period}</div>
                <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
                  <ul className="mt-3 space-y-1.5">
                    {e.achievements.map((a, j) => (<li key={j} className="text-sm text-slate-300 flex gap-2"><span className="text-cyan-400 mt-0.5">▹</span>{a}</li>))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.tools.map((t) => (<span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/15 text-violet-200">{t}</span>))}
                  </div>
                </motion.div>
              </button>
            </motion.div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-3xl mx-auto">
        <div className="glass p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-300/80 mb-3">Education</div>
          {education.map((ed) => (
            <div key={ed.degree} className="mb-3">
              <div className="font-display font-semibold text-sm" style={{ color: "#f5c451" }}>{ed.degree}</div>
              <div className="text-sm text-slate-300">{ed.school}</div>
              <div className="text-xs font-mono text-cyan-300/70">{ed.period} · {ed.detail}</div>
            </div>
          ))}
        </div>
        <div className="glass p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-300/80 mb-3">Certifications</div>
          <ul className="space-y-2">
            {certifications.map((c) => (<li key={c} className="text-sm text-slate-300 flex gap-2"><span className="text-amber-400">✦</span>{c}</li>))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

// ---------- RECRUITER ----------
export function Recruiter() {
  return (
    <Section id="hire" kicker="07 · Recruiter Dashboard" title="Let's Build Something Together" subtitle={profile.blurb}>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">
        {recruiterKpis.map((k, i) => (
          <motion.div key={k.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -6, scale: 1.04 }} className="glass p-4 text-center">
            <Icon name={k.icon} size={22} className="mx-auto mb-2 text-cyan-300" />
            <div className="font-display text-2xl font-bold shimmer"><CountUp to={k.value} suffix="%" /></div>
            <div className="text-[11px] text-slate-400 mt-1">{k.label}</div>
            <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#22d3ee,#a855f7)" }}
                initial={{ width: 0 }} whileInView={{ width: `${k.value}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.06 }} />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="glass-strong p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute -inset-20 opacity-30" style={{ background: "radial-gradient(circle at 30% 20%,#22d3ee,transparent 50%),radial-gradient(circle at 70% 80%,#a855f7,transparent 50%)" }} />
        <div className="relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 mb-5 text-xs font-mono text-cyan-200"><Sparkles size={14} /> Open to full-time analyst roles</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready when you are.</h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-2">{profile.location}</p>
          <p className="font-mono text-xs text-emerald-400/80 mb-7">● {profile.workAuth}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/Mehak%20Saini_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-slate-900 hover:scale-105 transition" style={{ background: "linear-gradient(90deg,#22d3ee,#34d399)" }}><Download size={18} /> Download Resume</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:scale-105 transition"><Linkedin size={18} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:scale-105 transition"><Github size={18} /> View all my code</a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:scale-105 transition"><Mail size={18} /> {profile.email}</a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:scale-105 transition"><Phone size={18} /> {profile.phone}</a>
          </div>
        </div>
      </motion.div>
      <p className="text-center text-xs font-mono text-slate-500 mt-10">© {new Date().getFullYear()} {profile.name} · Built with React · Tailwind · Framer Motion · Recharts</p>
    </Section>
  );
}

// ---------- NAV ----------
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [["Career", "career"], ["Projects", "projects"], ["Ventures", "ventures"], ["Tools", "tools"], ["Journey", "experience"], ["Hire Me", "hire"]];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? "glass-strong" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#top" className="font-display font-bold shimmer text-lg">Mehak Saini</a>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          {links.map(([l, id]) => (<a key={id} href={`#${id}`} className="hover:text-cyan-300 transition">{l}</a>))}
        </div>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden glass-strong px-5 py-4 flex flex-col gap-3">
          {links.map(([l, id]) => (<a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-slate-200">{l}</a>))}
        </div>
      )}
    </nav>
  );
}
