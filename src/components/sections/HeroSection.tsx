import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import { SplitText } from "../ui/SplitText";

export function HeroSection() {
  return (
    <section className="relative flex h-[150vh] min-h-[1100px] flex-col items-center overflow-hidden pt-32 md:pt-48">
      {/* Background Video - Positioned to show more at the bottom */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 top-64 bottom-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
            type="video/mp4"
          />
        </video>
        {/* Deep blend overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      {/* Content shifted higher up */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          {...fadeUp(0)}
          className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md"
        >
          <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-black uppercase">
            Live
          </span>
          <span className="text-[11px] font-medium tracking-wide text-white/80">
            1,240+ Active GPU Nodes Globally
          </span>
        </motion.div>

        <div className="mb-6 flex flex-wrap justify-center gap-x-4 text-5xl font-medium tracking-[-3px] text-white md:text-7xl lg:text-8xl">
          <SplitText 
            text="Render" 
            className="text-white" 
            delay={200}
          />
          <SplitText 
            text="Without" 
            className="text-gradient-accent font-serif-accent italic drop-shadow-[0_0_20px_hsla(168,100%,48%,0.6)] drop-shadow-[0_0_50px_hsla(168,100%,48%,0.3)]"
            delay={400}
          />
          <SplitText 
            text="Limits" 
            className="text-white" 
            delay={600}
          />
        </div>

        <motion.p
          {...fadeUp(0.2)}
          className="mb-10 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Join our decentralized GPU network for high-performance rendering. 
          The future of compute is distributed and secure.
        </motion.p>

        {/* Action Buttons */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col gap-9 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsla(168, 100%, 48%, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-accent px-10 py-4 text-base font-bold text-black shadow-xl transition-all"
          >
            {"Start Render".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.6 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full border border-accent/50 px-10 py-4 text-base font-bold text-white transition-all hover:border-accent"
          >
            {"Earn Rewards".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.03, duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.button>
        </motion.div>
      </div>

      {/* Ambient Glow behind text */}
      <motion.div 
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="accent-glow absolute top-1/4 h-[400px] w-[600px] pointer-events-none" 
      />
    </section>
  );
}
