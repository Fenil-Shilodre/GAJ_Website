import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const clientLogos = Array.from({ length: 18 }).map((_, idx) => {
  const n = String(idx + 1).padStart(2, "0");
  return {
    src: `/clients/client-${n}.png`,
    alt: `Client logo ${idx + 1}`,
  };
});

const ClientsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 bg-white overflow-hidden blueprint-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Trusted By</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-3">Our Clients</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {clientLogos.map((logo) => (
            <div
              key={logo.src}
              className="h-16 sm:h-18 lg:h-20 rounded-xl bg-card border border-border/50 flex items-center justify-center px-4 overflow-hidden"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-10 sm:max-h-11 lg:max-h-12 w-auto object-contain transition-transform duration-300 ease-out hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
