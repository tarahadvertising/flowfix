import {
  HiOutlineCog6Tooth,
  HiOutlineWrenchScrewdriver,
  HiOutlineLightBulb,
  HiOutlineChartBarSquare,
  HiOutlineCpuChip,
  HiOutlineClipboardDocumentCheck,
  HiOutlineTruck,
  HiOutlineHome,
  HiOutlineBeaker,
} from "react-icons/hi2";

export const services = [
  {
    id: "roads-utilities",
    title: "Roads & Underground Utilities",
    description:
      "Design and construction of road networks, storm water drainage, sewage systems and underground utility infrastructure for residential and commercial developments.",
    icon: HiOutlineTruck,
    features: ["Road Construction", "Storm Water Drainage", "Sewage Systems"],
  },
  {
    id: "shoring-piling",
    title: "Shoring & Piling Works",
    description:
      "Specialized shoring, piling and foundation solutions for deep excavations, basement construction and structures requiring ground support and stabilization.",
    icon: HiOutlineWrenchScrewdriver,
    features: ["Sheet Piling", "Contiguous Piling", "Ground Anchors"],
  },
  {
    id: "electromechanical",
    title: "Electromechanical Works",
    description:
      "Complete MEP solutions including HVAC, electrical, plumbing, fire fighting and ELV systems — from design and installation to commissioning and maintenance.",
    icon: HiOutlineCog6Tooth,
    features: ["HVAC Systems", "Electrical Works", "Fire Fighting"],
  },
  {
    id: "building-works",
    title: "Building Works",
    description:
      "Structural and architectural building works for residential, commercial and industrial projects including concrete, masonry and finishing works.",
    icon: HiOutlineHome,
    features: ["Structural Works", "Masonry", "Finishing Works"],
  },
  {
    id: "grp-works",
    title: "GRP Works",
    description:
      "Glass Reinforced Plastic (GRP) solutions for water tanks, pipework, cladding and custom fabrications — corrosion-resistant and built for harsh environments.",
    icon: HiOutlineBeaker,
    features: ["GRP Water Tanks", "GRP Pipework", "Custom Fabrications"],
  },
  {
    id: "interiors-fitout",
    title: "Interiors & Fitout Solutions",
    description:
      "Complete interior fit-out services for offices, retail, hospitality and residential spaces — from space planning to final handover with full MEP coordination.",
    icon: HiOutlineClipboardDocumentCheck,
    features: ["Office Fit-Out", "Retail Interiors", "MEP Coordination"],
  },
  {
    id: "general-trading",
    title: "General Trading",
    description:
      "Supply of MEP equipment, construction materials, tools and spare parts sourced from trusted international and local manufacturers at competitive rates.",
    icon: HiOutlineCpuChip,
    features: ["MEP Equipment", "Construction Materials", "Tools & Spares"],
  },
  {
    id: "water-jetting",
    title: "High Pressure Water Jetting",
    description:
      "Industrial high-pressure water jetting for tank cleaning, pipe descaling, surface preparation and drain clearing — safe, efficient and environmentally friendly.",
    icon: HiOutlineChartBarSquare,
    features: ["Tank Cleaning", "Pipe Descaling", "Surface Preparation"],
  },
  {
    id: "minor-works",
    title: "Minor Works",
    description:
      "Small-scale maintenance, repair and renovation works for residential and commercial properties — responsive service with quality guaranteed.",
    icon: HiOutlineLightBulb,
    features: ["Repairs & Maintenance", "Renovations", "Emergency Call-Out"],
  },
];
