import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import BorderGlow from "../BorderGlow";
import { Box, Lock, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    title: "GPU Marketplace",
    icon: Box,
    description: "Connect creators with distributed GPU providers worldwide through our automated marketplace.",
  },
  {
    title: "Secure Rendering",
    icon: Lock,
    description: "End-to-end encrypted rendering pipeline with multi-layer asset protection.",
  },
  {
    title: "Parallel Processing",
    icon: Zap,
    description: "Scale your rendering across hundreds of nodes simultaneously for near-instant results.",
  },
  {
    title: "Performance Analytics",
    icon: BarChart3,
    description: "Real-time tracking of render progress, node health, and reward distribution.",
  },
];

export function SolutionSection() {
  return (
    <section id="platform" className="relative px-6 pt-0 pb-20 md:pt-0 md:pb-24 -mt-10 md:-mt-16">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp(0)} className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="flex-1 h-[40vh]">
            <span className="mb-6 block text-xs font-bold uppercase tracking-[4px] text-accent">
              THE SOLUTION
            </span>
            <h2 className="text-4xl font-medium tracking-[-2px] md:text-6xl lg:text-7xl">
              The platform for <br />
              <span className="text-gradient-accent font-serif-accent">distributed</span> rendering
            </h2>
            <p className="mt-6 text-xs font-bold uppercase tracking-[2px] text-white/30 leading-relaxed">
              Unlocking borderless high-performance compute infrastructure for <br /> the next generation of global digital creators
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-64 w-64 shrink-0 md:h-[400px] md:w-[400px] md:-translate-x-24 md:translate-y-12"
          >
            <div className="accent-glow absolute inset-0 opacity-20 blur-3xl" />
            <motion.img
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              src="https://static.vecteezy.com/system/resources/previews/048/690/805/non_2x/3d-graphics-card-isolated-on-transparent-background-free-png.png"
              alt="High Performance GPU"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(0,245,196,0.3)]"
            />
          </motion.div>
        </motion.div>

        {/* <motion.div 
          {...fadeUp(0.15)} 
          className="relative mb-24 aspect-[21/9] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-accent/5"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/854182/854182-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-10 left-10 flex items-center gap-4">
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/80 backdrop-blur-md">
                <div className="h-4 w-4 rounded-sm border-2 border-white animate-pulse" />
             </div>
             <span className="text-sm font-medium text-white/90">Live Network Stream</span>
          </div>
        </motion.div> */}

        <div className="grid gap-8 md:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.2 + i * 0.08)}>
              <BorderGlow
                edgeSensitivity={30}
                glowColor="168 100 48"
                backgroundColor="#000000"
                borderRadius={20}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#00f5c4', '#05b4b7ff', '#38bdf8']}
                className="h-full"
              >
                <div className="liquid-glass bg-black/40 group h-full rounded-2xl p-6 transition-all duration-500">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 border border-accent/10 transition-colors group-hover:bg-accent/5">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}