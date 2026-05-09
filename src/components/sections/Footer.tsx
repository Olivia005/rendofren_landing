import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { Globe } from "lucide-react";
import { MailCheck } from "lucide-react";
import { FolderGit2 } from "lucide-react";
import { MessageCircleCheck } from "lucide-react";


const footerLinks = {
  platform: [
    { name: "GPU Marketplace", href: "#" },
    { name: "Parallel Rendering", href: "#" },
    { name: "Secure Nodes", href: "#" },
    { name: "API Reference", href: "#" },
  ],
  ecosystem: [
    { name: "Whitepaper", href: "#" },
    { name: "Tokenomics", href: "#" },
    { name: "Governance", href: "#" },
    { name: "Staking", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Community", href: "#" },
    { name: "Support", href: "#" },
    { name: "Blog", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="ecosystem" className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-[#38bdf8] flex items-center justify-center shadow-lg shadow-accent/20">
                <div className="h-4 w-4 border-2 border-white rounded-sm" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">RendoFren</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
              The world's most powerful decentralized GPU network for high-performance 3D rendering. Powering the next generation of digital creators.
            </p>
            <div className="flex gap-4">
              {[MessageCircleCheck, FolderGit2, Link, MailCheck].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="h-10 w-10 rounded-full bg-accent/5 flex items-center justify-center text-accent transition-all border border-white/5 hover:bg-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Platform</h4>
              <ul className="space-y-4">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="inline-block text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Ecosystem</h4>
              <ul className="space-y-4">
                {footerLinks.ecosystem.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="inline-block text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="inline-block text-muted-foreground hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Globe className="h-3 w-3" />
            <span>Network Status:</span>
            <span className="flex items-center gap-1.5 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Operational
            </span>
          </div>
          <div className="flex gap-8">
            <span className="text-xs text-muted-foreground/60">
              &copy; 2026 RendoFren Protocol.
            </span>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-xs text-muted-foreground/60 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}