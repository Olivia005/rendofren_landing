import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import { Cpu } from "lucide-react";

const VIDEO_URL = "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4";

export function CTASection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-24 md:pb-48">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-70 contrast-125 brightness-110 saturate-50"
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black via-black/40 to-accent/30" />
      <div className="accent-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-30" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div 
          {...fadeUp(0)} 
          className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent/20 backdrop-blur-xl border border-accent/30 shadow-2xl shadow-accent/20"
        >
          <Cpu className="h-10 w-10 text-accent" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="mb-6 text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl"
        >
          Power the <span className="text-gradient-accent font-serif-accent">Future</span>
        </motion.h2>

        <motion.p 
          {...fadeUp(0.2)} 
          className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Join 1,200+ node providers and thousands of creators in the world's most 
          efficient decentralized rendering network.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="https://rendofren.vercel.app"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsla(168, 100%, 48%, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-accent px-12 py-5 text-base font-bold text-black shadow-xl transition-all inline-block text-center"
          >
            Launch App
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(0, 245, 196, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-xl border border-white/10 px-12 py-5 text-base font-bold text-white transition-all"
          >
            Read Whitepaper
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
