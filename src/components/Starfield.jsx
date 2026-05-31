import { useEffect, useRef } from "react";

export default function Starfield() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext("2d");
    let raf, W, H, stars = [], shooters = [];
    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
      const count = Math.min(220, Math.floor((W * H) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(), s: Math.random() * 0.02 + 0.004,
        c: Math.random() > 0.85 ? ["#22d3ee", "#a855f7", "#f5c451"][(Math.random() * 3) | 0] : "#ffffff",
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnShooter = () => {
      if (Math.random() < 0.012 && shooters.length < 2) {
        shooters.push({ x: Math.random() * W, y: Math.random() * H * 0.4, len: 0, max: 120 + Math.random() * 80, sp: 6 + Math.random() * 4 });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const st of stars) {
        st.a += st.s;
        const o = 0.35 + Math.abs(Math.sin(st.a)) * 0.65;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = st.c === "#ffffff" ? `rgba(255,255,255,${o})` : st.c;
        ctx.globalAlpha = st.c === "#ffffff" ? 1 : o * 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      spawnShooter();
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += s.sp; s.y += s.sp * 0.5; s.len += s.sp;
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.5);
        grad.addColorStop(0, "rgba(255,255,255,.9)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.len, s.y - s.len * 0.5); ctx.stroke();
        if (s.len > s.max || s.x > W) shooters.splice(i, 1);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas id="starfield" ref={ref} />;
}
