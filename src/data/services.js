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
  HiOutlineBuildingOffice,
  HiOutlineBolt,
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
    id: "cladding",
    title: "Cladding Works",
    description:
      "Professional cladding installation for building exteriors and interiors — aluminum, composite panels, glass facades and decorative cladding systems.",
    icon: HiOutlineBuildingOffice,
    features: ["Aluminum Cladding", "Composite Panels", "Glass Facades"],
  },
  {
    id: "ducting",
    title: "HVAC Ducting Works",
    description:
      "Complete HVAC ductwork fabrication and installation — rectangular, round, and oval ducts for commercial, industrial and residential buildings.",
    icon: HiOutlineBolt,
    features: ["Duct Fabrication", "HVAC Installation", "Insulation Services"],
  },
];
