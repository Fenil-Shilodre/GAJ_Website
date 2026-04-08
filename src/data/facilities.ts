export interface Facility {
  id: string;
  name: string;
  make: string;
  description: string;
  details: string[];
  src: string;
}

export const facilities: Facility[] = [
  {
    id: "plate-bending-rolling-machine",
    name: "Plate Bending Rolling Machine",
    make: "Make – Davi | Mav-3 Roll, Variable Axis",
    description: "Heavy-duty 3-roll variable axis plate bending machine used for rolling cylindrical shells, cones, and curved plates for pressure vessels and storage tanks.",
    details: [
      "Make: Davi",
      "Type: Mav-3 Roll, Variable Axis",
      "Used for rolling shells for pressure vessels, storage tanks, and heat exchangers",
      "Capable of handling heavy-gauge Stainless Steel and Mild Steel plates",
      "Ensures precise curvature and dimensional accuracy",
    ],
    src: "/facilities/facility-01.png",
  },
  {
    id: "radial-drill-machine",
    name: "Radial Drill Machine",
    make: "Make – Siddhpuria | 200mm",
    description: "High-capacity radial drill machine for precision drilling operations on large and heavy workpieces used in industrial fabrication.",
    details: [
      "Make: Siddhpuria",
      "Capacity: 200mm",
      "Suitable for drilling on large fabricated components",
      "Used for tube sheet drilling in heat exchangers",
      "Ensures accurate hole positioning and finish",
    ],
    src: "/facilities/facility-02.png",
  },
  {
    id: "hydraulic-press",
    name: "Hydraulic Press",
    make: "Make – Press Tech | 300 Ton Capacity",
    description: "300-ton hydraulic forming press for dish-end forming, flanging, and heavy-duty pressing operations on metal plates.",
    details: [
      "Make: Press Tech",
      "Capacity: 300 Ton",
      "Type: Hydraulic Forming Press",
      "Used for dish-end forming, flanging, and straightening",
      "Handles Stainless Steel and Mild Steel components",
    ],
    src: "/facilities/facility-03.png",
  },
  {
    id: "electric-hoist",
    name: "Electric Hoist",
    make: "Make – Hitech | 7.5 Ton Capacity",
    description: "7.5-ton electric hoist for safe and efficient lifting and positioning of heavy fabricated components within the shop floor.",
    details: [
      "Make: Hitech",
      "Capacity: 7.5 Ton",
      "Enables safe handling of heavy vessels and structures",
      "Improves shop-floor efficiency and safety",
      "Used across all major fabrication operations",
    ],
    src: "/facilities/facility-04.png",
  },
  {
    id: "profile-cutting-machine",
    name: "Profile Cutting Machine",
    make: "CNC Profile Cutting",
    description: "CNC-controlled profile cutting machine for accurate flame and plasma cutting of complex profiles and shapes from metal plates.",
    details: [
      "CNC-controlled for high precision",
      "Capable of cutting complex profiles and shapes",
      "Used for nozzle cutouts, flanges, and structural components",
      "Reduces material wastage with optimised nesting",
      "Suitable for both Mild Steel and Stainless Steel",
    ],
    src: "/facilities/facility-05.png",
  },
  {
    id: "lathe-machine",
    name: "Alpha Make Lathe Machine",
    make: "Make – Alpha",
    description: "Heavy-duty lathe machine for turning, facing, and finishing of large cylindrical components used in process equipment manufacturing.",
    details: [
      "Make: Alpha",
      "Used for turning and facing of flanges, nozzles, and shafts",
      "Handles large-diameter components",
      "Ensures precise dimensional tolerances",
      "Essential for heat exchanger and vessel component finishing",
    ],
    src: "/facilities/facility-06.png",
  },
  {
    id: "bench-grinder",
    name: "Bench Grinder",
    make: "Heavy Duty Bench Grinder",
    description: "Heavy-duty bench grinder for grinding, deburring, and finishing of fabricated metal components to achieve smooth surfaces and accurate dimensions.",
    details: [
      "Used for deburring and surface finishing",
      "Suitable for Stainless Steel and Mild Steel components",
      "Ensures clean weld preparation and post-weld finishing",
      "Improves surface quality of fabricated parts",
    ],
    src: "/facilities/facility-07.png",
  },
  {
    id: "drill-machine",
    name: "PKM Make Drill Machine",
    make: "Make – PKM",
    description: "Precision drill machine for accurate drilling operations on fabricated components, flanges, and structural parts.",
    details: [
      "Make: PKM",
      "Used for precision drilling on flanges and structural components",
      "Ensures accurate hole sizing and positioning",
      "Suitable for a wide range of material thicknesses",
    ],
    src: "/facilities/facility-08.png",
  },
  {
    id: "tube-expander-machine",
    name: "Tube Expander Machine",
    make: "Hydraulic Tube Expander",
    description: "Specialised tube expander machine used for expanding and securing tubes into tube sheets during heat exchanger manufacturing and retubing operations.",
    details: [
      "Used for heat exchanger tube-to-tubesheet expansion",
      "Ensures leak-proof joints in shell & tube heat exchangers",
      "Critical for heat exchanger retubing services",
      "Handles various tube diameters and materials",
      "Operated by trained technicians following defined procedures",
    ],
    src: "/facilities/facility-09.png",
  },
];
