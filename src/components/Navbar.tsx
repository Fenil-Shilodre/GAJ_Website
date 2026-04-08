import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/gaj-logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "Services", to: "/#services" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const mobileOpenRef = useRef(mobileOpen);
  const hideTimerRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    };

    const scheduleHide = (ms: number) => {
      clearHideTimer();
      hideTimerRef.current = window.setTimeout(() => {
        if (!mobileOpenRef.current) setVisible(false);
      }, ms);
    };

    const onScroll = () => {
      const y = window.scrollY || 0;
      setVisible(true);

      const last = lastScrollYRef.current;
      lastScrollYRef.current = y;

      const scrollingDown = y > last;
      scheduleHide(scrollingDown ? 900 : 1400);
    };

    // Hide by default at page load.
    setVisible(false);
    lastScrollYRef.current = window.scrollY || 0;

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navShown = visible || mobileOpen;

  return (
    <motion.nav
      initial={false}
      animate={{ y: navShown ? 0 : -110, opacity: navShown ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navShown ? "pointer-events-auto" : "pointer-events-none"
      } ${navShown ? "bg-white/95 backdrop-blur-md border-b border-border/60" : "bg-transparent"}`}
      style={navShown ? { boxShadow: "var(--shadow-navbar)" } : {}}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <Link to="/#home" className="flex items-center gap-2">
          <img src={logo} alt="GAJ Manufacturing Works" className="h-10 lg:h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === "/projects" && link.to === "/projects" ? "page" : undefined}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn-primary text-xs px-5 py-2.5">
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-card/98 backdrop-blur-lg border-b border-border"
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-accent py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center text-xs mt-2">
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
