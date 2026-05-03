"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      // Always show near the top; hide on scroll-down, reveal on scroll-up.
      // Don't hide while the mobile menu is open.
      if (currentY < 60) {
        setNavVisible(true);
      } else if (!isOpen) {
        setNavVisible(currentY < lastScrollY.current);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const useLightText = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#0D0D0D]/90 backdrop-blur-md shadow-sm border-b border-soft-gray"
          : "bg-transparent"
      } ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 lg:gap-4" aria-label="Bhardwaj Travels">
            <Image
              src="/logo.svg"
              alt="Bhardwaj Travels"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 80px, 64px"
              className="h-16 w-16 lg:h-20 lg:w-20 shrink-0"
              priority
            />
            <span
              className={`hidden min-[380px]:block font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-[0.15em] uppercase transition-colors ${
                useLightText ? "text-white" : "text-foreground"
              }`}
            >
              Bhardwaj Travels
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === link.href
                    ? "text-primary"
                    : useLightText
                    ? "text-white/90 hover:text-white"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:+919417566648"
              className="inline-flex items-center gap-2 bg-primary text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              useLightText ? "text-white" : "text-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mounted && createPortal(
        <>
          {/* Mobile Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 30 }}
              />
            )}
          </AnimatePresence>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                style={{ backgroundColor: '#171717', position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(288px, 85vw)', zIndex: 50, borderLeft: '1px solid #262626', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)' }}
              >
                <div className="flex items-center justify-between p-4 border-b border-soft-gray" style={{ backgroundColor: '#171717' }}>
                  <div className="flex items-center gap-2.5">
                    <Image src="/logo.svg" alt="Bhardwaj Travels" width={1024} height={1024} sizes="32px" className="h-8 w-8 shrink-0" />
                    <span className="font-display font-bold text-sm tracking-[0.18em] uppercase text-foreground">
                      Bhardwaj Travels
                    </span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-soft-gray text-foreground" aria-label="Close menu">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col p-4 gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted hover:bg-soft-gray hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="tel:+919417566648"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-primary text-black px-5 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </nav>
  );
}
