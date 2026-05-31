import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Section } from "./UI";

export default function AssemblyLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 4300);
    const t3 = setTimeout(() => setStage(3), 5300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [inView]);

  const bars = [["-54", 32, "#22d3ee"], ["-28", 40, "#a855f7"], ["-2", 28, "#f5c451"], ["24", 36, "#34d399"]];

  return (
    <Section id="assembly" kicker="The Process" title="From Raw Data to Decision"
      subtitle="Scattered data becomes a clean pipeline, then a dashboard appears, then a decision.">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass p-4 md:p-6">
        <svg viewBox="0 0 660 240" className="w-full h-auto" role="img" aria-label="Raw data processed into a dashboard and decision">
          <line x1="40" y1="120" x2="620" y2="120" stroke="rgba(140,170,255,.18)" strokeWidth="2" strokeDasharray="6 8" />
          {[...Array(7)].map((_, i) => (
            <circle key={i} r="3.5" fill="#22d3ee" opacity="0.7" cx={55 + Math.random() * 40} cy={92 + Math.random() * 56}>
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${1.5 + Math.random()}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <g transform="translate(150,120)">
            <ellipse cx="0" cy="-22" rx="26" ry="9" fill="#22d3ee22" stroke="#22d3ee" strokeWidth="1.5" />
            <path d="M-26,-22 L-26,18 A26,9 0 0,0 26,18 L26,-22" fill="#22d3ee14" stroke="#22d3ee" strokeWidth="1.5" />
            <ellipse cx="0" cy="18" rx="26" ry="9" fill="#22d3ee22" stroke="#22d3ee" strokeWidth="1.5" />
            <text x="0" y="48" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="monospace">SQL · CLEAN</text>
          </g>
          <g transform="translate(330,120)">
            <circle cx="0" cy="0" r="26" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="10 6">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="14" fill="none" stroke="#f5c451" strokeWidth="2" strokeDasharray="6 4">
              <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="4s" repeatCount="indefinite" />
            </circle>
            <text x="0" y="48" textAnchor="middle" fill="#c4a3f7" fontSize="11" fontFamily="monospace">PYTHON · MODEL</text>
          </g>
          <g transform="translate(520,78)" style={{ opacity: stage >= 2 ? 1 : 0, transition: "opacity .5s" }}>
            <rect x="-62" y="-28" width="124" height="80" rx="6" fill="#0b1030" stroke="#34d399" strokeWidth="1.5" />
            <rect x="-54" y="-20" width="32" height="16" rx="2" fill="#22d3ee33" />
            <rect x="-16" y="-20" width="32" height="16" rx="2" fill="#f5c45133" />
            <rect x="22" y="-20" width="34" height="16" rx="2" fill="#34d39933" />
            {bars.map(([x, h, c], i) => (
              <rect key={i} x={x} y={44 - (stage >= 2 ? h : 0)} width="22" height={stage >= 2 ? h : 0} rx="1" fill={c}
                style={{ transition: `all .55s ${i * 0.12}s` }} />
            ))}
            <text x="0" y="68" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontFamily="monospace">LIVE DASHBOARD</text>
          </g>
          <g transform="translate(520,180)" style={{ opacity: stage >= 3 ? 1 : 0, transition: "opacity .5s" }}>
            <circle cx="0" cy="0" r="14" fill="#f5c45122" stroke="#f5c451" strokeWidth="1.5">
              <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" />
            </circle>
            <path d="M-4,-2 L0,-8 L4,-2 L1,-2 L1,6 L-1,6 L-1,-2 Z" fill="#f5c451" />
            <text x="0" y="34" textAnchor="middle" fill="#f5c451" fontSize="11" fontFamily="monospace">DECISION</text>
          </g>
          {stage >= 1 && (
            <circle r="5.5" fill="#22d3ee" style={{ filter: "drop-shadow(0 0 6px #22d3ee)" }}>
              <animate attributeName="opacity" values="1;1;1;0" dur="4s" fill="freeze" />
              <animateMotion dur="4s" fill="freeze" path="M80,120 L150,120 L330,120 L520,78" />
            </circle>
          )}
        </svg>
      </motion.div>
    </Section>
  );
}
