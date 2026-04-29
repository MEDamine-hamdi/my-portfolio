"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-8 h-14 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,11,0.92)] backdrop-blur-md border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <span className="font-mono text-[13px] text-[#d4f06c] tracking-[0.05em]">
        amine.dev
      </span>
      <div className="flex gap-8">
        {["about", "projects", "skills", "contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="font-mono text-[13px] text-[#888885] hover:text-[#f0f0ee] transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
