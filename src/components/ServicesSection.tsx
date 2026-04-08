import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Container, Factory, Shield, Settings, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Process Equipment Manufacturing",
    desc: "Reactor Vessels, Storage Tanks, Heat Exchangers, Filter Presses, Pressure Vessels, Blenders, and Columns — fabricated in SS and MS, compliant with ASME Section VIII Div. 1.",
    color: "from-blue-500/20 to-blue-600/10",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "group-hover:border-blue-500/40",
  },
  {
    icon: Container,
    title: "Reactor Vessels & Storage Tanks",
    desc: "Custom-built reactor vessels and storage tanks designed for safe, reliable operation in chemical and pharma process plants.",
    color: "from-teal-500/20 to-teal-600/10",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    border: "group-hover:border-teal-500/40",
  },
  {
    icon: Settings,
    title: "Heat Exchanger Retubing",
    desc: "Specialised retubing and reconditioning of shell & tube heat exchangers, restoring thermal efficiency and extending equipment life.",
    color: "from-orange-500/20 to-orange-600/10",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    border: "group-hover:border-orange-500/40",
  },
  {
    icon: RefreshCw,
    title: "Reactor Lantern & Jacket Replacement",
    desc: "Expert replacement of reactor lanterns and jackets for chemical and pharmaceutical process plants, following defined safety procedures.",
    color: "from-purple-500/20 to-purple-600/10",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    border: "group-hover:border-purple-500/40",
  },
  {
    icon: Wrench,
    title: "Gearbox Repairing",
    desc: "Comprehensive gearbox inspection, repair, and reconditioning services to minimise downtime and restore equipment to peak performance.",
    color: "from-rose-500/20 to-rose-600/10",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    border: "group-hover:border-rose-500/40",
  },
  {
    icon: Shield,
    title: "Industrial Maintenance & Safety",
    desc: "All maintenance activities executed by trained personnel per defined procedures, safety norms, and customer-specific requirements — minimising downtime.",
    color: "from-green-500/20 to-green-600/10",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "group-hover:border-green-500/40",
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
            Industrial Maintenance and Repair Services for Chemical, Dyes, and Pharmaceutical Process Plants — ensuring safe, reliable, and efficient operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative card-industrial p-8 overflow-hidden border border-border/50 transition-all duration-300 ${s.border} hover:-translate-y-1`}
            >
              {/* gradient bg blob */}
              <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br ${s.color} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300`} />

              <div className={`relative w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <s.icon className={`w-6 h-6 ${s.iconColor}`} aria-hidden="true" />
              </div>

              <h3 className="relative font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
