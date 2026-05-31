import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart, Bar, AreaChart, Area, FunnelChart, Funnel, LabelList,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import { Truck, Package } from "lucide-react";
import { Section, Modal } from "./UI";
import { projects, charts } from "../data/content";

const accent = { retail: "#22d3ee", supplychain: "#34d399", finance: "#f5c451", marketing: "#fb923c", operations: "#a855f7" };

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
const viz = { retail: RetailViz, supplychain: SupplyViz, finance: FinanceViz, marketing: MarketingViz, operations: OperationsViz };

export default function ProjectsWorld() {
  const [active, setActive] = useState(null);
  return (
    <Section id="projects" kicker="02 · Projects World" title="Worlds I've Built With Data"
      subtitle="Each project is its own animated world. Click to step inside — the wireless project opens my full live dashboard.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const Viz = viz[p.type]; const c = accent[p.type];
          return (
            <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
              className="glass p-5 cursor-pointer group" onClick={() => setActive(p)}>
              <div className="mb-4"><Viz /></div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <span className="text-[10px] font-mono uppercase" style={{ color: c }}>{p.hasDashboard ? "live ↗" : "open ↗"}</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{p.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.stack.map((t) => (<span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: `${c}18`, color: c }}>{t}</span>))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} accent={active && accent[active.type]} wide={active?.hasDashboard}>
        {active && (() => {
          const Viz = viz[active.type]; const c = accent[active.type];
          return (
            <div>
              <h3 className="font-display text-2xl font-bold mb-1" style={{ color: c }}>{active.title}</h3>
              <p className="text-sm text-slate-400 mb-5">{active.tagline}</p>
              {!active.hasDashboard && <div className="mb-5"><Viz /></div>}
              <p className="text-slate-200 leading-relaxed mb-5">{active.desc}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {active.impact.map((m) => (<div key={m} className="glass p-3 text-center text-xs font-mono" style={{ borderColor: `${c}44`, color: "#dbe7ff" }}>{m}</div>))}
              </div>
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
              <div className="flex flex-wrap gap-2 mt-4">
                {active.stack.map((t) => (<span key={t} className="text-xs px-2.5 py-1 rounded-lg" style={{ background: `${c}18`, border: `1px solid ${c}40` }}>{t}</span>))}
              </div>
            </div>
          );
        })()}
      </Modal>
    </Section>
  );
}
