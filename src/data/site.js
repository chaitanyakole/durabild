export const company = {
  name: "Durabild Corporation Private Limited",
  shortName: "Durabild",
  tagline: "Strength you can build on.",
  established: 2009,
  city: "Pune",
  state: "Maharashtra",
  director: "Dattatraya Sadashiv Thorwat",
  directorTitle: "Director",
  phone: "+91 85540 16084",
  phoneHref: "tel:+918554016084",
  phone2: "+91 99707 00385",
  phone2Href: "tel:+919970700385",
  email: "sales@durabild.com",
  emailHref: "mailto:sales@durabild.com",
  address:
    "C/O Mr. D. S. Thorwat, Gat No. 34/2, Bhawara Wasti, Shewalewadi, Haveli, Fursungi, Pune, Maharashtra – 412308",
  addressNote: "Near National Grapes Research Center, Pune–Solapur Road",
  hours: "Mon – Sat: 8:00 AM – 7:00 PM",
};

export const locations = ["Hadapsar", "Katraj", "Baner", "Shewalewadi"];

// Photography for each scene. Swap these paths for AI-generated images
// (e.g. "/images/my-rmc-plant.png") and every Figure updates automatically.
export const images = {
  hero: "/images/hero.jpg",
  rmc: "/images/rmc.jpg",
  mixer: "/images/mixer.jpg",
  plant: "/images/plant.jpg",
  aggregates: "/images/aggregates.jpg",
  cement: "/images/cement.jpg",
  blocks: "/images/blocks.jpg",
  steel: "/images/steel.jpg",
  admixtures: "/images/admixtures.jpg",
  pump: "/images/pump.jpg",
  lab: "/images/lab.jpg",
  pour: "/images/pour.jpg",
  building: "/images/building.jpg",
};

export const services = [
  {
    id: "rmc",
    title: "RMC Manufacturing",
    text: "Plant-controlled ready-mixed concrete batched to your design mix and delivered to site.",
    icon: "truck",
    scene: "pour",
  },
  {
    id: "materials",
    title: "Construction Materials",
    text: "An integrated supply of aggregates, cement, blocks, steel and admixtures from a single vendor.",
    icon: "brick",
    scene: "aggregates",
  },
  {
    id: "rental",
    title: "Equipment Rental",
    text: "Batching plants, transit mixers and concrete pumps available on flexible rental terms.",
    icon: "crane",
    scene: "plant",
  },
];

export const equipmentRentals = [
  {
    id: "batching-plant",
    name: "Batching Plants",
    text: "Mobile and stationary concrete batching plants with capacities from 20 to 60 m³/hour, supplied with operators.",
    specs: ["20–60 m³/hr capacity", "In-line & compact models", "Calibrated weighing systems", "Operator & AMC included"],
    icon: "plant",
    scene: "plant",
  },
  {
    id: "transit-mixers",
    name: "Transit Mixers",
    text: "Fleet of 6, 8 and 12 m³ transit mixers maintained to keep concrete workable from plant to pour point.",
    specs: ["6 / 8 / 12 m³ drums", "GPS-tracked fleet", "Trained drivers", "Round-the-clock dispatch"],
    icon: "truck",
    scene: "mixer",
  },
  {
    id: "concrete-pumps",
    name: "Concrete Pumps",
    text: "Boom placers and line concrete pumps for high-rise slabs, rafts, basements and infrastructure pours.",
    specs: ["Boom & line pumps", "Vertical pumping to high-rise", "Skilled pump operators", "Site-to-site mobility"],
    icon: "pump",
    scene: "pump",
  },
];

export const stats = [
  { value: "15+", label: "Years in operation" },
  { value: "2.4M", label: "Cubic metres supplied" },
  { value: "600+", label: "Projects delivered" },
  { value: "100%", label: "Batch-tested concrete" },
];

export const products = [
  {
    id: "rmc",
    name: "Ready-Mixed Concrete (RMC)",
    summary:
      "Plant-controlled concrete delivered to site in transit mixers, batched to exact mix designs and slump requirements.",
    grades: ["M10", "M15", "M20", "M25", "M30", "M35", "M40", "M45", "M50"],
    points: [
      "Computerised batching with automatic moisture correction",
      "Grades from M10 to M50 and custom design mixes",
      "Pump-supported placement for high-rise and raft pours",
      "Retarder, accelerator and plasticiser admixtures on request",
    ],
    icon: "truck",
    scene: "rmc",
  },
  {
    id: "aggregates",
    name: "Aggregates",
    summary:
      "Washed and graded coarse and fine aggregates sourced from approved quarries for structural and non-structural use.",
    grades: ["10mm", "20mm", "40mm", "M-Sand", "P-Sand"],
    points: [
      "20mm, 10mm and 40mm coarse aggregates",
      "Manufactured sand (M-Sand) and plaster sand (P-Sand)",
      "VSI-processed, cubical particles with low flakiness",
      "Sieve-tested for consistent gradation",
    ],
    icon: "stones",
    scene: "aggregates",
  },
  {
    id: "cement",
    name: "Cement & Binders",
    summary:
      "OPC and PPC cement, GGBS and fly-ash blends supplied in bulk or bags to suit every exposure condition.",
    grades: ["OPC 53", "OPC 43", "PPC", "GGBS"],
    points: [
      "OPC 53 and OPC 43 grade cement",
      "Portland Pozzolana Cement (PPC) for durability",
      "Ground Granulated Blast-furnace Slag (GGBS) for mass concrete",
      "Bulk tanker and bagged supply options",
    ],
    icon: "bag",
    scene: "cement",
  },
  {
    id: "blocks",
    name: "Blocks & Bricks",
    summary:
      "Autoclaved aerated concrete (AAC) blocks, solid concrete blocks and fly-ash bricks for fast, strong masonry.",
    grades: ["AAC", "Solid", "Fly-ash"],
    points: [
      "AAC blocks in 4\", 6\", 8\" and 9\" thicknesses",
      "Solid concrete blocks for load-bearing walls",
      "Fly-ash bricks with consistent dimension tolerance",
      "Lightweight, thermal and sound insulation benefits",
    ],
    icon: "brick",
    scene: "blocks",
  },
  {
    id: "steel",
    name: "TMT Reinforcement Steel",
    summary:
      "Fe500 and Fe500D TMT bars from primary producers, stocked in standard diameters and cut-to-length on request.",
    grades: ["Fe500", "Fe500D", "8–32mm"],
    points: [
      "Fe500 and Fe500D grades with high corrosion resistance",
      "Diameters from 8mm to 32mm",
      "Cut-and-bend and bundle-weight supply",
      "Mill test certificates provided",
    ],
    icon: "rebar",
    scene: "steel",
  },
  {
    id: "admixtures",
    name: "Admixtures & Waterproofing",
    summary:
      "Concrete admixtures and integral waterproofing compounds that improve workability, strength and durability.",
    grades: ["Plasticisers", "Super-P", "Integral WP"],
    points: [
      "Mid-range and high-range superplasticisers",
      "Set retarders and accelerators",
      "Integral crystalline waterproofing compounds",
      "Technical dosing support from our engineers",
    ],
    icon: "drop",
    scene: "admixtures",
  },
];

export const capabilities = [
  {
    title: "Own Batching Plants",
    text: "Two fully computerised RMC plants with combined capacity of 90 m³/hour, ensuring on-time delivery across Pune and PCMC.",
  },
  {
    title: "Dedicated Fleet",
    text: "A fleet of transit mixers, concrete pumps and bulk tippers kept on a strict maintenance schedule for reliability.",
  },
  {
    title: "In-House Laboratory",
    text: "NABL-aligned testing for slump, cube strength, gradation and mix design verification before every dispatch.",
  },
  {
    title: "Engineer-Led Support",
    text: "Site engineers who advise on mix selection, pour sequencing and curing to protect your timeline and budget.",
  },
];

export const projects = [
  {
    name: "Riverside Residency",
    type: "Residential High-Rise",
    location: "Baner, Pune",
    detail: "35,000 m³ of M40 RMC with pumped placement for a 22-storey twin tower development.",
    year: "2024",
    scene: "building",
  },
  {
    name: "Hadapsar Logistics Hub",
    type: "Industrial RCC Sheds",
    location: "Hadapsar, Pune",
    detail: "Over 18,000 m³ of M25 concrete and 40mm aggregates for pre-engineered warehouse flooring.",
    year: "2023",
    scene: "plant",
  },
  {
    name: "Katraj Elevated Corridor",
    type: "Infrastructure",
    location: "Katraj, Pune",
    detail: "Design-mix concrete and admixtures supplied for pier caps and deck segments on the elevated corridor.",
    year: "2023",
    scene: "pump",
  },
  {
    name: "Shewalewadi Tech Campus",
    type: "Commercial IT Campus",
    location: "Shewalewadi, Pune",
    detail: "Raft foundation and podium slabs delivered with continuous pour schedules and on-site pumping.",
    year: "2022",
    scene: "rmc",
  },
  {
    name: "Green Meadows Township",
    type: "Gated Community",
    location: "Fursungi, Pune",
    detail: "AAC block masonry, M-Sand plaster and Fe500D steel for 240 villas across the township.",
    year: "2022",
    scene: "blocks",
  },
  {
    name: "Solapur Road Flyover",
    type: "Road Infrastructure",
    location: "Pune–Solapur Road",
    detail: "Bulk OPC and RMC supply for pier, girder and deck works on a city flyover package.",
    year: "2021",
    scene: "pour",
  },
];

export const leadership = [
  {
    name: "Dattatraya Sadashiv Thorwat",
    role: "Director",
    bio: "Leads Durabild's operations with over two decades in the concrete and construction materials industry, driving plant-controlled quality and dependable site delivery across Pune.",
  },
];

export const qualitySteps = [
  {
    step: "01",
    title: "Approved Inputs",
    text: "Only IS-certified cement, tested aggregates and verified chemicals enter our batching plants.",
  },
  {
    step: "02",
    title: "Calibrated Batching",
    text: "Weighing systems are calibrated and each batch is computerised with moisture correction.",
  },
  {
    step: "03",
    title: "Fresh-Concrete Testing",
    text: "Slump, temperature and air-content checks are recorded before every transit mixer leaves.",
  },
  {
    step: "04",
    title: "Cube Strength Records",
    text: "Cubes are cast and tested at 7 and 28 days, with reports issued to the client.",
  },
];

export const values = [
  { title: "Integrity", text: "Honest mix designs, transparent pricing and no shortcuts on materials." },
  { title: "Reliability", text: "Dependable delivery schedules that keep your site and workforce moving." },
  { title: "Safety", text: "Safe plant operations, safe transit and safe placement at every site." },
  { title: "Partnership", text: "We work as an extension of your project team, from footing to finish." },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Quality", to: "/quality" },
  { label: "Contact", to: "/contact" },
];
