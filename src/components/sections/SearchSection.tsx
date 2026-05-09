import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";
import { Monitor, Shield, Coins } from "lucide-react";
import BorderGlow from "../BorderGlow";

const platforms = [
  {
    name: "Distributed Rendering",
    icon: Monitor,
    description:
      "Distribute rendering workloads across multiple GPU nodes for parallel high-speed rendering.",
  },
  {
    name: "Encrypted Workloads",
    icon: Shield,
    description:
      "Blend files are encrypted before distribution, ensuring secure decentralized rendering execution.",
  },
  {
    name: "GPU Reward Network",
    icon: Coins,
    description:
      "GPU providers earn rewards by contributing compute power to rendering tasks across the network.",
  },
];

export function SearchSection() {
  return (
    <section id="infrastructure" className="relative px-6 pt-32 pb-32 md:px-0">
      {/* Background Ambient Glow */}
      <div className="accent-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-10" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <motion.span 
            {...fadeUp(0)}
            className="mb-6 block text-xs font-bold uppercase tracking-[4px] text-accent"
          >
            Core Infrastructure
          </motion.span>
          <motion.h2
            {...fadeUp(0.05)}
            className="mb-8 text-4xl font-medium tracking-[-2px] text-white md:text-6xl lg:text-7xl"
          >
            Rendering has <span className="text-gradient-accent font-serif-accent">changed.</span> <br /> 
            <span className="text-gradient-accent">Have you?</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="mx-auto max-w-2xl text-medium text-muted-foreground md:text-xl leading-relaxed"
          >
            The way we render 3D workloads has fundamentally shifted. Distributed
            GPU networks are replacing local render farms, offering unprecedented 
            scale and performance for creators worldwide.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              {...fadeUp(0.15 + i * 0.1)}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="168 100 48"
                backgroundColor="#000000"
                borderRadius={24}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#00f5c4', '#05b4b7ff', '#38bdf8']}
                className="h-full"
              >
                <div className="liquid-glass group h-full rounded-[22px] p-6 md:p-8 transition-all duration-500">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/2 border border-accent/10 transition-colors group-hover:bg-accent/5">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    >
                      <platform.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight">{platform.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {platform.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-20 flex flex-col items-center justify-center gap-2 text-center"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <p className="text-sm font-medium tracking-[4px] uppercase text-accent">
            The future is distributed
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}