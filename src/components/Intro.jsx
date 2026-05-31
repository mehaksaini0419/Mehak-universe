import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { profile } from "../data/content";

export default function Intro({ onEnter }) {
  const fogRef = useRef(null);
  const sceneRef = useRef(null);
  const planetRef = useRef(null);
  const copyRef = useRef(null);
  const raysRef = useRef(null);
  const flashRef = useRef(null);
  const [entering, setEntering] = useState(false);

  // female AI voice
  const speak = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance("Welcome to the intelligence universe of Mehak Saini.");
      u.rate = 0.96; u.pitch = 1.12;
      const voices = window.speechSynthesis.getVoices();
      const f = voices.find((v) => /female|samantha|victoria|zira|google us english|karen|moira/i.test(v.name));
      if (f) u.voice = f;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }, []);

  // fog + particles canvas
  useEffect(() => {
    const cv = fogRef.current, ctx = cv.getContext("2d");
    let raf, W, H, blobs = [], dust = [];
    const resize = () => {
      W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight;
      blobs = Array.from({ length: 7 }, (_, i) => ({
        x: Math.random() * W, y: Math.random() * H, r: 160 + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.14,
        c: ["rgba(90,70,180,", "rgba(60,90,190,", "rgba(150,110,60,", "rgba(120,60,150,"][i % 4],
      }));
      dust = Array.from({ length: 48 }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3, vy: -Math.random() * 0.3 - 0.05, a: Math.random(),
        c: ["#f5c451", "#a855f7", "#9fc0ff", "#f472b6"][(Math.random() * 4) | 0],
      }));
    };
    resize(); window.addEventListener("resize", resize);
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (const b of blobs) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -250) b.x = W + 250; if (b.x > W + 250) b.x = -250;
        if (b.y < -250) b.y = H + 250; if (b.y > H + 250) b.y = -250;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.c + ".10)"); g.addColorStop(1, b.c + "0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 6.3); ctx.fill();
      }
      for (const p of dust) {
        p.x += p.vx; p.y += p.vy; p.a += 0.012;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        const o = 0.25 + Math.abs(Math.sin(p.a)) * 0.55;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.3);
        ctx.fillStyle = p.c; ctx.globalAlpha = o * 0.75;
        ctx.shadowColor = p.c; ctx.shadowBlur = 9; ctx.fill(); ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  // parallax
  useEffect(() => {
    const scene = sceneRef.current;
    const move = (e) => {
      const r = scene.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
      if (planetRef.current) planetRef.current.style.transform = `translate(-50%,-50%) translate(${dx * 34}px,${dy * 34}px)`;
      if (copyRef.current) copyRef.current.style.transform = `translateY(-50%) translate(${dx * -16}px,${dy * -10}px)`;
      if (raysRef.current) raysRef.current.style.transform = `translate(${dx * 18}px,${dy * 12}px)`;
    };
    const leave = () => {
      if (planetRef.current) planetRef.current.style.transform = "translate(-50%,-50%)";
      if (copyRef.current) copyRef.current.style.transform = "translateY(-50%)";
    };
    scene.addEventListener("mousemove", move);
    scene.addEventListener("mouseleave", leave);
    return () => { scene.removeEventListener("mousemove", move); scene.removeEventListener("mouseleave", leave); };
  }, []);

  const enter = () => {
    if (entering) return;
    setEntering(true);
    speak();
    if (planetRef.current) {
      planetRef.current.style.transition = "transform 1.1s cubic-bezier(.7,0,.3,1)";
      planetRef.current.style.transform = "translate(-50%,-50%) scale(12)";
    }
    if (flashRef.current) { flashRef.current.style.opacity = "0.95"; }
    setTimeout(() => onEnter && onEnter(), 1100);
  };

  // build surface analytics + ring dots via JSX below
  const gridV = []; for (let x = 70; x <= 270; x += 22) gridV.push(x);
  const gridH = []; for (let y = 70; y <= 280; y += 22) gridH.push(y);
  const pts = [[80, 230], [110, 196], [140, 210], [170, 150], [200, 176], [230, 120], [260, 150]];
  const bars = [[95, -34, "#a855f7"], [120, -52, "#22d3ee"], [145, -26, "#f5c451"], [170, -60, "#34d399"], [195, -40, "#f472b6"]];

  return (
    <motion.div
      ref={sceneRef}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}
      className="fixed inset-0 z-[100] overflow-hidden cursor-pointer"
      style={{ background: "linear-gradient(125deg,#040308 0%,#070a1e 38%,#0d0a26 62%,#120a2e 100%)" }}
      onClick={enter}
    >
      <canvas ref={fogRef} className="absolute inset-0 w-full h-full z-[1]" />
      <div ref={raysRef} className="absolute inset-0 z-[2] opacity-50"
        style={{ background: "conic-gradient(from 200deg at 70% 45%, transparent 0deg, rgba(168,140,255,.10) 14deg, transparent 28deg, rgba(245,196,81,.08) 50deg, transparent 70deg, rgba(120,150,255,.08) 120deg, transparent 160deg)", mixBlendMode: "screen" }} />

      {/* planet */}
      <div ref={planetRef} className="absolute top-1/2 z-[3]"
        style={{ left: "72%", transform: "translate(-50%,-50%)", transition: "transform .2s ease-out" }}>
        <div className="relative w-[260px] h-[260px] md:w-[360px] md:h-[360px]">
          <div className="absolute -inset-16 rounded-full"
            style={{ background: "radial-gradient(circle at 40% 38%, rgba(245,196,81,.30), rgba(168,85,247,.16) 42%, transparent 68%)", filter: "blur(10px)" }} />
          <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="pl" cx="36%" cy="34%" r="72%">
                <stop offset="0%" stopColor="#fff7e6" /><stop offset="22%" stopColor="#f7cd6a" />
                <stop offset="48%" stopColor="#b079d6" /><stop offset="74%" stopColor="#5b3f9c" /><stop offset="100%" stopColor="#1c1340" />
              </radialGradient>
              <radialGradient id="term" cx="64%" cy="60%" r="74%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" /><stop offset="60%" stopColor="rgba(8,5,22,0)" /><stop offset="100%" stopColor="rgba(5,3,16,.95)" />
              </radialGradient>
              <radialGradient id="atm" cx="50%" cy="50%" r="50%">
                <stop offset="78%" stopColor="rgba(245,196,81,0)" /><stop offset="93%" stopColor="rgba(245,196,81,.5)" /><stop offset="100%" stopColor="rgba(168,85,247,0)" />
              </radialGradient>
              <clipPath id="pc"><circle cx="170" cy="170" r="120" /></clipPath>
            </defs>
            <circle cx="170" cy="170" r="132" fill="url(#atm)" />
            <circle cx="170" cy="170" r="120" fill="url(#pl)" />
            <g clipPath="url(#pc)">
              {gridV.map((x) => <line key={"v" + x} x1={x} y1="60" x2={x} y2="280" stroke="#fff" strokeWidth="0.4" opacity="0.08" />)}
              {gridH.map((y) => <line key={"h" + y} x1="60" y1={y} x2="280" y2={y} stroke="#fff" strokeWidth="0.4" opacity="0.08" />)}
              {pts.slice(0, -1).map((p, i) => <line key={"l" + i} x1={p[0]} y1={p[1]} x2={pts[i + 1][0]} y2={pts[i + 1][1]} stroke="#22d3ee" strokeWidth="2" opacity="0.9" />)}
              {pts.map((p, i) => <circle key={"d" + i} cx={p[0]} cy={p[1]} r="2.6" fill="#f5c451"><animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite" /></circle>)}
              {bars.map((b, i) => <rect key={"b" + i} x={b[0]} y={250 + b[1]} width="10" height={-b[1]} fill={b[2]} opacity="0.5" rx="1" />)}
            </g>
            <circle cx="170" cy="170" r="120" fill="url(#term)" />
            <circle cx="170" cy="170" r="120" fill="none" stroke="#ffe9b0" strokeWidth="1.5" opacity="0.5" />
          </svg>
          {/* orbiting rings */}
          <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full" style={{ animation: "spin 30s linear infinite", transformOrigin: "center" }}>
            <ellipse cx="170" cy="170" rx="150" ry="58" fill="none" stroke="rgba(34,211,238,.4)" strokeWidth="1" strokeDasharray="3 10" />
            <circle cx="320" cy="170" r="3" fill="#22d3ee" />
          </svg>
          <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full" style={{ animation: "spinSlow 44s linear infinite", transformOrigin: "center" }}>
            <ellipse cx="170" cy="170" rx="158" ry="150" fill="none" stroke="rgba(168,85,247,.35)" strokeWidth="1" strokeDasharray="2 12" />
            <circle cx="170" cy="20" r="2.5" fill="#a855f7" />
          </svg>
          <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full" style={{ animation: "spin 38s linear infinite", transformOrigin: "center" }}>
            <ellipse cx="170" cy="170" rx="120" ry="155" fill="none" stroke="rgba(245,196,81,.3)" strokeWidth="1" strokeDasharray="2 14" />
            <circle cx="170" cy="15" r="2.5" fill="#f5c451" />
          </svg>
        </div>
      </div>

      {/* leader silhouette */}
      <div className="absolute left-[5%] bottom-0 z-[3] opacity-50 hidden md:block">
        <svg viewBox="0 0 200 360" width="150" height="280" style={{ overflow: "visible" }}>
          <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7aa0ff" stopOpacity=".5" /><stop offset="1" stopColor="#a855f7" stopOpacity="0" /></linearGradient></defs>
          <ellipse cx="100" cy="60" rx="30" ry="34" fill="url(#lg)" />
          <path d="M58,360 Q56,180 74,140 Q100,118 126,140 Q144,180 142,360 Z" fill="url(#lg)" />
        </svg>
      </div>

      {/* copy */}
      <div ref={copyRef} className="absolute left-[7%] top-1/2 z-[4] max-w-[86%] md:max-w-[42%]"
        style={{ transform: "translateY(-50%)", transition: "transform .2s ease-out" }}>
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 1.1 }}>
          <div className="font-display text-white leading-none" style={{ fontWeight: 300, letterSpacing: "8px", fontSize: "clamp(34px,7vw,52px)", textShadow: "0 0 30px rgba(160,170,255,.4)" }}>
            MEHAK<br />SAINI
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1.1 }} className="mt-6">
          <div style={{ fontSize: "13px", letterSpacing: "5px", color: "#f5c451" }}>BUSINESS INTELLIGENCE ARCHITECT</div>
          <div style={{ height: 1, width: 80, background: "linear-gradient(90deg,#f5c451,transparent)", margin: "14px 0" }} />
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#b9c4e8", fontWeight: 300 }}>ANALYTICS &nbsp;•&nbsp; STRATEGY &nbsp;•&nbsp; OPERATIONS &nbsp;•&nbsp; FINANCE &nbsp;•&nbsp; INNOVATION</div>
          <div style={{ fontSize: "13px", color: "#8b9bc8", marginTop: "18px", fontStyle: "italic", fontWeight: 300, maxWidth: 320, lineHeight: 1.6 }}>
            Transforming complexity into intelligent business decisions.
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 right-[7%] z-[4] font-mono text-[11px] tracking-[2px] text-slate-300/80">
        ✦ tap the planet to enter ✦
      </motion.div>

      <div ref={flashRef} className="absolute inset-0 pointer-events-none z-[6]"
        style={{ background: "radial-gradient(circle at 72% 50%,#fff,#e9d8ff)", opacity: 0, transition: "opacity .6s" }} />
    </motion.div>
  );
}
