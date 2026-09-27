import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart, Bar, AreaChart, Area, FunnelChart, Funnel, LabelList,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend,
} from "recharts";
import { Truck, Package, Github, Database, Cpu, ExternalLink, Sparkles, Scale } from "lucide-react";
import { Section, Modal } from "./UI";
import { projects, charts } from "../data/content";

const accent = {
  retail: "#22d3ee", supplychain: "#34d399", finance: "#f5c451", marketing: "#fb923c",
  operations: "#a855f7", sql: "#22d3ee", ml: "#a855f7",
  bi: "#f5c451", tableau: "#60a5fa", ecommerce: "#f472b6", case: "#34d399",
};

function RetailViz() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={charts.storeAttainment}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(140,170,255,.1)" />
        <XAxis dataKey="store" stroke="#9fd6ff" fontSize={9} angle={-25} textAnchor="end" height={50} />
        <YAxis stroke="#9fd6ff" fontSize={11} />
        <Tooltip cursor={{ fill: "rgba(34,211,238,.06)" }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={1200}>
          {charts.storeAttainment.map((d, i) => (
            <Cell key={i} fill={d.value >= 95 ? "#22c55e" : d.value >= 85 ? "#3b82f6" : d.value >= 70 ? "#f59e0b" : "#ef4444"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
function SupplyViz() {
  return (
    <div className="relative h-[200px] glass overflow-hidden flex items-center">
      <div className="absolute left-0 right-0 top-1/2 h-[2px]" style={{ background: "repeating-linear-gradient(90deg,#34d399 0 14px,transparent 14px 26px)" }} />
      {[0, 1, 2].map((i) => (<div key={i} className="absolute" style={{ left: `${18 + i * 30}%`, top: "30%" }}><Package size={20} className="text-emerald-300/70" /></div>))}
      <motion.div className="absolute top-1/2 -translate-y-1/2" initial={{ left: "-10%" }}
        animate={{ left: "100%" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
        <Truck size={40} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 10px #34d399)" }} />
      </motion.div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] text-emerald-300/70">
        <span>WAREHOUSE</span><span>IN TRANSIT</span><span>STORE</span>
      </div>
    </div>
  );
}
function FinanceViz() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={charts.cashFlow}>
        <defs><linearGradient id="rev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5c451" stopOpacity={0.6} /><stop offset="100%" stopColor="#f5c451" stopOpacity={0} /></linearGradient></defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(140,170,255,.1)" />
        <XAxis dataKey="month" stroke="#9fd6ff" fontSize={11} /><YAxis stroke="#9fd6ff" fontSize={11} /><Tooltip />
        <Area type="monotone" dataKey="revenue" stroke="#f5c451" fill="url(#rev)" strokeWidth={2} animationDuration={1400} />
        <Area type="monotone" dataKey="cost" stroke="#fb923c" fill="transparent" strokeWidth={2} strokeDasharray="5 4" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
function MarketingViz() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <FunnelChart><Tooltip />
        <Funnel dataKey="value" data={charts.salesFunnel} isAnimationActive animationDuration={1300}>
          <LabelList position="right" fill="#dbe7ff" stroke="none" dataKey="stage" fontSize={11} />
          {charts.salesFunnel.map((d, i) => (<Cell key={i} fill={["#fb923c", "#f5c451", "#34d399", "#22d3ee", "#a855f7"][i]} />))}
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
}
function OperationsViz() {
  const steps = ["Intake", "Process", "Bottleneck", "Optimize", "Deliver"];
  return (
    <div className="h-[200px] glass flex items-center justify-center gap-1.5 px-3 flex-wrap">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1.5">
          <motion.div initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.2 }} className="px-2.5 py-2 rounded-xl text-[10px] text-center"
            style={{ background: i === 2 ? "#f472b633" : "#a855f722", border: `1px solid ${i === 2 ? "#f472b6" : "#a855f7"}66`, color: "#dbe7ff" }}>
            {s}{i === 2 && <div className="text-[8px] text-pink-300 mt-0.5">⚠ flagged</div>}
          </motion.div>
          {i < steps.length - 1 && <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="text-violet-300">→</motion.span>}
        </div>
      ))}
    </div>
  );
}

// SQL database visual — animated tables + query flow
function SqlViz() {
  const tables = ["stores", "reps", "sales", "plans", "customers"];
  return (
    <div className="relative h-[200px] glass overflow-hidden p-4">
      <div className="flex items-center gap-2 mb-3 text-cyan-300/80 font-mono text-[10px]">
        <Database size={14} /> PostgreSQL · 5-table schema
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {tables.map((t, i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="rounded-lg border text-center py-2" style={{ borderColor: "#22d3ee55", background: "#22d3ee12" }}>
            <div className="font-mono text-[9px] text-cyan-200 truncate px-1">{t}</div>
            {[0, 1, 2].map((r) => (
              <div key={r} className="mx-1.5 my-1 h-[3px] rounded" style={{ background: "#22d3ee44" }} />
            ))}
          </motion.div>
        ))}
      </div>
      <div className="mt-3 font-mono text-[9px] text-cyan-300/70 overflow-hidden whitespace-nowrap">
        <motion.div animate={{ x: ["0%", "-40%"] }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}>
          SELECT rep, RANK() OVER (ORDER BY sales DESC) ··· LAG(sales) OVER (PARTITION BY store) ··· NTILE(4) ··· running_total ···
        </motion.div>
      </div>
    </div>
  );
}

// ML neural-net visual — animated nodes + prediction
function MlViz() {
  const layers = [3, 4, 4, 2];
  return (
    <div className="relative h-[200px] glass overflow-hidden p-4">
      <div className="flex items-center gap-2 mb-2 text-violet-300/80 font-mono text-[10px]">
        <Cpu size={14} /> Random Forest · attach-rate prediction
      </div>
      <svg viewBox="0 0 320 140" className="w-full h-[150px]" role="img" aria-label="Neural network predicting attach rate">
        {layers.map((count, li) => {
          const x = 30 + li * 90;
          return [...Array(count)].map((_, ni) => {
            const y = 70 - ((count - 1) * 26) / 2 + ni * 26;
            const next = layers[li + 1];
            return (
              <g key={`${li}-${ni}`}>
                {next && [...Array(next)].map((_, nj) => {
                  const ny = 70 - ((next - 1) * 26) / 2 + nj * 26;
                  return <line key={nj} x1={x} y1={y} x2={x + 90} y2={ny} stroke="#a855f7" strokeWidth="0.6" opacity="0.3" />;
                })}
                <circle cx={x} cy={y} r="6" fill="#a855f722" stroke="#a855f7" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5 + ni * 0.3}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          });
        })}
        <text x="300" y="55" textAnchor="end" fill="#34d399" fontSize="9" fontFamily="monospace">attach ✓</text>
        <text x="300" y="92" textAnchor="end" fill="#f472b6" fontSize="9" fontFamily="monospace">no ✗</text>
      </svg>
    </div>
  );
}

// WEEE! — actual vs plan, the "attainment is fading" story
function BiViz() {
  return (
    <div className="relative h-[200px]">
      <div className="absolute top-0 left-0 z-10 flex items-center gap-2 font-mono text-[10px] text-amber-300/80">
        <Sparkles size={13} /> attainment vs plan · 18 mo
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={charts.weeeAttainment} margin={{ top: 26, right: 6, bottom: 0, left: -18 }}>
          <defs>
            <linearGradient id="weeeFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5c451" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#f5c451" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(140,170,255,.1)" />
          <XAxis dataKey="q" stroke="#9fd6ff" fontSize={9} />
          <YAxis stroke="#9fd6ff" fontSize={10} domain={[92, 122]} />
          <Tooltip formatter={(v, n) => [`${v}%`, n === "actual" ? "Actual" : "Plan"]} />
          <Area type="monotone" dataKey="actual" stroke="#f5c451" fill="url(#weeeFill)" strokeWidth={2.4} animationDuration={1400} />
          <Area type="monotone" dataKey="plan" stroke="#94a3b8" fill="transparent" strokeWidth={1.8} strokeDasharray="5 4" animationDuration={1400} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 right-1 font-mono text-[9px] text-amber-200/60">plan outruns actual from Q1&apos;26 ⚠</div>
    </div>
  );
}

// APPLE — services share climbing
function TableauViz() {
  return (
    <div className="relative h-[200px]">
      <div className="absolute top-0 left-0 z-10 font-mono text-[10px] text-blue-300/80">
        services share of revenue
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={charts.appleServices} margin={{ top: 26, right: 6, bottom: 0, left: -18 }}>
          <defs>
            <linearGradient id="appleFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(140,170,255,.1)" />
          <XAxis dataKey="year" stroke="#9fd6ff" fontSize={9} />
          <YAxis stroke="#9fd6ff" fontSize={10} />
          <Tooltip formatter={(v) => [`${v}%`, "Services"]} />
          <Area type="monotone" dataKey="share" stroke="#60a5fa" fill="url(#appleFill)" strokeWidth={2.4} animationDuration={1500} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// E-COMMERCE — revenue concentration by channel
function EcomViz() {
  const c = ["#f472b6", "#fb923c", "#f5c451", "#34d399", "#22d3ee", "#a855f7"];
  return (
    <div className="relative h-[200px]">
      <div className="absolute top-0 left-0 z-10 font-mono text-[10px] text-pink-300/80">
        revenue by channel · 5,200 txns
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={charts.ecomChannels} layout="vertical" margin={{ top: 26, right: 12, bottom: 0, left: 22 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(140,170,255,.1)" horizontal={false} />
          <XAxis type="number" stroke="#9fd6ff" fontSize={9} />
          <YAxis type="category" dataKey="channel" stroke="#9fd6ff" fontSize={9} width={64} />
          <Tooltip cursor={{ fill: "rgba(244,114,182,.06)" }} formatter={(v) => [`${v}%`, "Revenue"]} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={1300}>
            {charts.ecomChannels.map((d, i) => <Cell key={i} fill={c[i % c.length]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ACG — scenario sensitivity
function CaseViz() {
  return (
    <div className="relative h-[200px]">
      <div className="absolute top-0 left-0 z-10 flex items-center gap-2 font-mono text-[10px] text-emerald-300/80">
        <Scale size={13} /> scenario sensitivity · base = 100
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={charts.acgScenarios} margin={{ top: 26, right: 6, bottom: 0, left: -18 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(140,170,255,.1)" />
          <XAxis dataKey="scenario" stroke="#9fd6ff" fontSize={10} />
          <YAxis stroke="#9fd6ff" fontSize={10} />
          <Tooltip cursor={{ fill: "rgba(52,211,153,.06)" }} />
          <Legend wrapperStyle={{ fontSize: 9, paddingTop: 2 }} iconSize={7} />
          <Bar dataKey="ebitda" name="EBITDA" fill="#34d399" radius={[5, 5, 0, 0]} animationDuration={1200} />
          <Bar dataKey="fcf" name="Free cash flow" fill="#f5c451" radius={[5, 5, 0, 0]} animationDuration={1400} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const viz = {
  retail: RetailViz, supplychain: SupplyViz, finance: FinanceViz, marketing: MarketingViz,
  operations: OperationsViz, sql: SqlViz, ml: MlViz,
  bi: BiViz, tableau: TableauViz, ecommerce: EcomViz, case: CaseViz,
};

export default function ProjectsWorld() {
  const [active, setActive] = useState(null);
  return (
    <Section id="projects" kicker="02 · Projects World" title="Worlds I've Built With Data"
      subtitle="Each project is its own animated world. Click to step inside — the wireless project opens my full live dashboard, and the Tableau worlds load the real vizzes in place.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const Viz = viz[p.type]; const c = accent[p.type];
          const badge = p.hasDashboard ? "live ↗" : p.tableau ? "tableau ↗" : p.github ? "github ↗" : "open ↗";
          return (
            <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
              onClick={() => setActive(p)}
              className={`glass p-5 cursor-pointer group card-glow relative ${p.featured ? "md:col-span-2 featured-ring" : ""}`}
              style={{ "--glow": c }}>

              {p.featured && (
                <div className="absolute -top-3 left-5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.18em] text-slate-900"
                  style={{ background: "linear-gradient(90deg,#f5c451,#fb923c)" }}>
                  <Sparkles size={10} /> Flagship
                </div>
              )}

              <div className="mb-4"><Viz /></div>

              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <span className="text-[10px] font-mono uppercase shrink-0" style={{ color: c }}>{badge}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{p.tagline}</p>

              {p.featured && p.insight && (
                <p className="mt-3 text-[13px] leading-relaxed text-amber-100/80 border-l-2 pl-3" style={{ borderColor: `${c}88` }}>
                  {p.insight}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.stack.map((t) => (<span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: `${c}18`, color: c }}>{t}</span>))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} accent={active && accent[active.type]} wide={!!(active?.hasDashboard || active?.tableau)}>
        {active && (() => {
          const Viz = viz[active.type]; const c = accent[active.type];
          return (
            <div>
              <h3 className="font-display text-2xl font-bold mb-1" style={{ color: c }}>{active.title}</h3>
              <p className="text-sm text-slate-400 mb-5">{active.tagline}</p>
              {!active.hasDashboard && !active.tableau && <div className="mb-5"><Viz /></div>}
              <p className="text-slate-200 leading-relaxed mb-5">{active.desc}</p>

              {active.insight && (
                <div className="mb-5 rounded-2xl p-4" style={{ background: `${c}12`, border: `1px solid ${c}3a` }}>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] mb-2" style={{ color: c }}>Headline finding</div>
                  <p className="text-[15px] leading-relaxed text-slate-100">{active.insight}</p>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {active.impact.map((m) => (<div key={m} className="glass p-3 text-center text-xs font-mono" style={{ borderColor: `${c}44`, color: "#dbe7ff" }}>{m}</div>))}
              </div>

              {active.tableau && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono" style={{ color: `${c}cc` }}>
                    <span className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </span>
                    Tableau Public — live &amp; interactive
                  </div>
                  <iframe
                    src={`${active.tableau}?:showVizHome=no&:embed=true&:toolbar=bottom&:tabs=no`}
                    title={active.title}
                    loading="lazy"
                    className="w-full rounded-xl bg-[#07090f]"
                    style={{ height: "70vh", border: `1px solid ${c}4d` }} />
                  <a href={active.tableau} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-mono hover:underline" style={{ color: c }}>
                    <ExternalLink size={12} /> Open on Tableau Public
                  </a>
                </div>
              )}
              {active.hasDashboard && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-300/80">
                    <span className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </span>
                    Telecom_KPI_Complete_Dashboard — live &amp; interactive
                  </div>
                  <iframe src="/assets/telecom-dashboard.html" title="Telecom KPI Dashboard"
                    className="w-full rounded-xl border border-cyan-400/30 bg-[#07090f]" style={{ height: "70vh" }} />
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-4 items-center">
                {active.stack.map((t) => (<span key={t} className="text-xs px-2.5 py-1 rounded-lg" style={{ background: `${c}18`, border: `1px solid ${c}40` }}>{t}</span>))}
                {active.github && (
                  <a href={active.github} target="_blank" rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-slate-900 hover:scale-105 transition text-sm"
                    style={{ background: `linear-gradient(90deg, ${c}, #a855f7)` }}>
                    <Github size={16} /> View on GitHub
                  </a>
                )}
              </div>
            </div>
          );
        })()}
      </Modal>
    </Section>
  );
}
