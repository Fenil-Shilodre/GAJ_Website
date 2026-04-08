import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { img: "/projects/project-01.png", title: "Shell & Tube Assembly", cat: "Heat Exchanger" },
  { img: "/projects/project-02.png", title: "Twin Shaft Mixer", cat: "Material Handling" },
  { img: "/projects/project-03.png", title: "Large Storage Vessel", cat: "Process Equipment" },
  { img: "/projects/project-04.png", title: "Industrial Tanks", cat: "Fabrication" },
  { img: "/projects/project-05.png", title: "Tube Bundle Bank", cat: "Thermal Systems" },
  { img: "/projects/project-06.png", title: "Filter Press System", cat: "Solid-Liquid Separation" },
];

const ProductsSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="projects" className="py-24 lg:py-32 blueprint-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">Our Projects</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Recent Builds
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Shop-floor deliveries and industrial builds engineered for performance, durability, and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-industrial group overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="/projects" className="btn-primary text-xs">View Gallery</a>
                </div>
              </div>
              <div className="p-5">
                <span className="text-accent text-xs font-medium">{p.cat}</span>
                <h3 className="font-heading text-base font-bold text-foreground mt-1">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="/projects" className="btn-outline">
            See all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
