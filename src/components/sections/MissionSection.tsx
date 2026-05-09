import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph1 =
  "We're building a decentralized rendering infrastructure where creators can securely distribute rendering workloads across global GPU nodes — reducing costs, increasing speed, and unlocking unused compute power worldwide.";
const highlightWords1 = new Set(["decentralized", "rendering", "GPU", "secure", "worldwide"]);

function Word({
  children,
  progress,
  range,
  isHighlight,
}: {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
  isHighlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{
        opacity,
        color: isHighlight
          ? "hsl(var(--accent))"
          : "hsl(var(--hero-subtitle))",
      }}
    >
      {children}
    </motion.span>
  );
}

export function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.05", "end 0.8"],
  });

  const words1 = paragraph1.split(" ");

  return (
    <section id="protocol" ref={containerRef} className="relative px-6 pb-20 pt-0 md:pb-24">
      {/* Ambient Light */}
      <div className="accent-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] opacity-10" />

      <div className="relative z-10 mx-auto mb-5 flex max-w-5xl justify-center">
        {/* Cinematic Highlighting Glows */}
        <div className="absolute inset-0 z-20 shadow-[inset_0_0_150px_rgba(0,0,0,1)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[400px] w-[400px] bg-[#38bdf8]/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[250px] w-[250px] bg-white/10 blur-[80px] rounded-full pointer-events-none" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[650px] w-full object-cover brightness-125 contrast-110"
          style={{ 
            maskImage: 'radial-gradient(ellipse closest-side at center, black 30%, transparent 100%)', 
            WebkitMaskImage: 'radial-gradient(ellipse closest-side at center, black 30%, transparent 100%)' 
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center gap-4"
        >
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-accent/80">Mission</span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>

        <p className="text-xl font-medium leading-relaxed tracking-tight text-white/90 md:text-3xl lg:text-4xl">
          {words1.map((word, i) => {
            const cleanWord = word.replace(/[—,.\u2014]/g, "");
            const start = i / words1.length;
            const end = start + 1 / words1.length;
            return (
              <span key={i} className="inline-block">
                <Word
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlight={highlightWords1.has(cleanWord)}
                >
                  {word}&nbsp;
                </Word>
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}