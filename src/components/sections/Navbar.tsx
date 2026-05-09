import { motion } from "framer-motion";
import { FolderGit2, MessageCircleCheck, Link, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["Infrastructure", "Platform", "Protocol", "Ecosystem"];

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {

      // Check if scrolled to the absolute bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection("ecosystem");
        return;
      }

      // Get all sections and their current distance from top of viewport
      const sectionsData = navLinks
        .map((link) => {
          const id = link.toLowerCase();
          const element = document.getElementById(id);
          return element ? { id, top: element.getBoundingClientRect().top } : null;
        })
        .filter((item): item is {id: string, top: number} => item !== null)
        .sort((a, b) => a.top - b.top); // Sort by vertical position on page

      if (sectionsData.length === 0) return;

      // Default to the first section on the page if none have reached the middle
      let currentActive = sectionsData[0].id;
      
      // Find the last section that has scrolled past the middle of the screen
      for (const section of sectionsData) {
        if (section.top <= window.innerHeight / 2) {
          currentActive = section.id;
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-8 py-6 md:px-28">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-2xl shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-md shadow-accent/40">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="h-5 w-5 text-black" />
            </motion.div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">RendoFren</span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();
            const isHighlighted = hoveredLink === link || (hoveredLink === null && isActive);
            
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                {isHighlighted && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 z-0 rounded-lg bg-white/5 backdrop-blur-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${isHighlighted ? 'text-white' : 'text-white/50'}`}>
                  {link}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: FolderGit2, label: "GitHub" },
            { Icon: MessageCircleCheck, label: "Discord" },
            { Icon: Link, label: "LinkedIn" },
          ].map(({ Icon, label }) => (
            <motion.button
              key={label}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#06a787ff" }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-white/5 transition-all"
              aria-label={label}
            >
              <Icon className="h-4 w-4 text-white/50 hover:text-white" />
            </motion.button>
          ))}
          <motion.a
            href="https://rendofren.vercel.app"
            whileHover={{ 
              boxShadow: "0 0 40px hsla(168, 100%, 48%, 0.6)",
              scale: 1.05,
              backgroundColor: "#00f5c4"
            }}
            animate={{
              boxShadow: [
                "0 0 20px hsla(168, 100%, 48%, 0.2)",
                "0 0 35px hsla(168, 100%, 48%, 0.4)",
                "0 0 20px hsla(168, 100%, 48%, 0.2)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileTap={{ scale: 0.98 }}
            className="relative ml-4 hidden overflow-hidden rounded-xl bg-accent px-6 py-2.5 text-sm font-bold text-black transition-all md:block inline-block"
          >
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
              }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
            <span className="relative z-10">Launch App</span>
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
}
