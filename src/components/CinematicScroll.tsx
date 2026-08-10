import { useEffect, useRef, useState } from "react";
import svcIng from "@/assets/service-ing-1.jpg";
import svcMedia from "@/assets/service-media-2.jpg";
import svcPub from "@/assets/service-pub-1.jpg";

const panels = [
  {
    image: svcIng,
    kicker: "Ingeniería",
    line1: "Con la precisión",
    line2: "de la técnica.",
  },
  {
    image: svcMedia,
    kicker: "Media",
    line1: "Con el detalle",
    line2: "del sonido.",
  },
  {
    image: svcPub,
    kicker: "Publicidad",
    line1: "Con la fuerza",
    line2: "de la marca.",
  },
];

const CinematicScroll = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const n = panels.length;
  const pos = progress * n; // 0 .. n

  return (
    <section
      ref={wrapRef}
      aria-label="Nuestras capacidades en movimiento"
      className="relative bg-background"
      style={{ height: `${n * 100 + 40}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {panels.map((panel, i) => {
          const d = pos - i; // -inf .. inf, 0..1 is "active"
          const opacity = Math.max(0, 1 - Math.abs(d - 0.4) / 0.85);
          const scale = 1.12 - Math.min(Math.max(d, -0.4), 1.4) * 0.1;
          const textIn = Math.max(0, Math.min(1, (d - 0.05) / 0.25));
          const textOut = Math.max(0, Math.min(1, (d - 0.75) / 0.25));
          const textOpacity = textIn * (1 - textOut);

          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{ opacity, willChange: "opacity" }}
              aria-hidden={opacity < 0.5}
            >
              <img
                src={panel.image}
                alt={panel.kicker}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: `scale(${scale})`, willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background" />

              <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                <p
                  className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-primary mb-6"
                  style={{
                    opacity: textOpacity,
                    transform: `translateY(${(1 - textIn) * 24}px)`,
                  }}
                >
                  {panel.kicker}
                </p>
                <h2
                  className="font-display text-4xl md:text-7xl font-bold text-foreground leading-[1.05] max-w-3xl"
                  style={{
                    opacity: textOpacity,
                    transform: `translateY(${(1 - textIn) * 40}px) scale(${0.96 + textIn * 0.04})`,
                    filter: `blur(${(1 - textIn) * 10}px)`,
                  }}
                >
                  {panel.line1}
                  <br />
                  <span className="text-gradient-gold">{panel.line2}</span>
                </h2>
              </div>
            </div>
          );
        })}

        {/* progress rail */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {panels.map((_, i) => (
            <span
              key={i}
              className="h-[3px] w-10 rounded-full bg-foreground/20 overflow-hidden"
            >
              <span
                className="block h-full bg-gradient-gold"
                style={{
                  transform: `scaleX(${Math.max(0, Math.min(1, pos - i))})`,
                  transformOrigin: "left",
                  transition: "transform 0.1s linear",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinematicScroll;
