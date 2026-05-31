import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function CountUp({ to, suffix = "", duration = 1100 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Section({ id, kicker, title, subtitle, children }) {
  return (
    <section id={id} className="relative max-w-6xl mx-auto px-5 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        {kicker && <div className="font-mono text-xs tracking-[0.35em] uppercase text-cyan-300/80 mb-3">{kicker}</div>}
        <h2 className="font-display text-3xl md:text-5xl font-bold shimmer inline-block">{title}</h2>
        {subtitle && <p className="mt-4 text-slate-300/80 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="rainbow-bar w-40 mx-auto mt-6" />
      </motion.div>
      {children}
    </section>
  );
}

export function Modal({ open, onClose, accent = "#22d3ee", wide = false, children }) {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", esc);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ background: "rgba(3,5,18,.78)", backdropFilter: "blur(6px)" }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className={`glass-strong relative w-full ${wide ? "max-w-5xl" : "max-w-3xl"} max-h-[88vh] overflow-y-auto no-scrollbar p-6 md:p-8`}
            style={{ boxShadow: `0 0 60px ${accent}33, inset 0 0 0 1px ${accent}44` }}
          >
            <button onClick={onClose} aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full grid place-items-center glass hover:scale-110 transition">
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
