import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Cog, Factory, Shield, Settings, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Process Equipment Manufacturing",
    desc: "We manufacture and supply process equipment for Chemical, Dyes, and Pharmaceutical industries  fabricated in Stainless Steel and Mild Steel, compliant with ASME Section VIII Division 1 and customer specifications.",
  },
  {
    icon: Cog,
    title: "Reactor Vessels & Storage Tanks",
    desc: "Custom-built reactor vessels, storage tanks, mixing vessels, and pressure vessels designed for safe, reliable operation in chemical and pharma process plants.",
  },
  {
    icon: Settings,
    title: "Heat Exchanger Retubing",
    desc: "Specialised retubing and reconditioning of shell & tube heat exchangers, restoring thermal efficiency and extending equipment life with minimal downtime.",
  },
  {
    icon: RefreshCw,
    title: "Reactor Lantern & Jacket Replacement",
    desc: "Expert replacement of reactor lanterns and jackets for chemical and pharmaceutical process plants, carried out by trained personnel following defined safety procedures.",
  },
  {
    icon: Wrench,
    title: "Gearbox Repairing",
    desc: "Comprehensive gearbox inspection, repair, and reconditioning services to minimise downtime and restore equipment to peak operational performance.",
  },
  {
    icon: Shield,
    title: "Industrial Maintenance & Safety Compliance",
    desc: "All maintenance activities are executed by trained personnel in accordance with defined procedures, safety norms, and customer-specific requirements  with a strong focus on minimising downtime and extending equipment life.",
  },
];

const ServicesSection = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="services" aria-label="GAJ Manufacturing Works Services" className="py-24 lg:py-32 bg-light-grey">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industrial Maintenance and Repair Services for Chemical, Dyes, and Pharmaceutical Process Plants  ensuring safe, reliable, and efficient operation of equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-industrial p-8 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
