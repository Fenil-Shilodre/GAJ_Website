import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GeneratedHeroVideo from "@/components/GeneratedHeroVideo";
import { motion } from "framer-motion";

const projectImages = Array.from({ length: 10 }).map((_, idx) => {
  const n = String(idx + 1).padStart(2, "0");
  return {
    src: `/projects/project-${n}.png`,
    alt: `GAJ project ${idx + 1}`,
  };
});

export default function Projects() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GeneratedHeroVideo className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/25 via-teal/10 to-black/25" />
        </div>

        <div className="relative z-10 section-container text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Our Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            <span className="gradient-text">Built to Perform</span>
            <br />
            <span className="text-foreground">Engineered to Last</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
          >
            A curated showcase of fabrication, vessels, exchangers, structures, and industrial builds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/#contact" className="btn-primary">
              Request a Quote
            </a>
            <a href="/#services" className="btn-outline">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 blueprint-bg">
        <div className="section-container">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">Gallery</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">Project Highlights</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                Scroll through recent builds and shop-floor deliveries. Tap any image to view in full size.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((img, i) => (
              <motion.a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="card-industrial group overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="btn-primary text-xs">Open</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

