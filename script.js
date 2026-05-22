const projects = {
  aer: {
    type: "Capstone • Electromechanical Medical Device",
    title: "Adaptive Elbow Rehabilitation Device",
    summary: "A wearable rehabilitation device for tennis elbow patients that combines a brace-style structure, adjustable fit, a motorized reel, and user-selectable resistance levels for wrist and finger extension exercises.",
    focus: [
      "Designed around finger extension and wrist flexion rehabilitation requirements.",
      "Used a motor, spool, cable path, and attachment points to create controlled resistance.",
      "Balanced low cost, comfort, adjustability, durability, and safety constraints.",
      "Validated structural components through FEA and prototype load testing."
    ],
    tools: ["Creo Parametric", "FEA", "PETG 3D printing", "ESP32", "CAN bus motor control", "Mobile app interface"],
    result: "Produced a functional prototype with adjustable resistance levels, structural support points, app-integrated control, and a manufacturing cost target aimed below traditional rehab equipment."
  },
  rotary: {
    type: "Fluid Mechanics • Prototype Testing",
    title: "Rotary Engine Air-Pump Prototype",
    summary: "A scaled Wankel-style prototype built to evaluate whether simplified, complex-to-manufacture designs could produce useful air-based power output compared with mechanical input from a drill-driven shaft.",
    focus: [
      "Designed and fabricated a PLA rotary model using CAD and rapid prototyping.",
      "Connected digital pressure sensors to intake and exhaust paths.",
      "Estimated volumetric flow rate from model geometry and eccentricity.",
      "Compared pressure differential, RPM, mechanical input, and calculated efficiency."
    ],
    tools: ["CAD", "3D printing", "Digital pressure sensors", "LabVIEW", "MATLAB", "Fluid mechanics analysis"],
    result: "The prototype demonstrated Wankel-style form and function, with maximum recorded efficiency around 0.7%, highlighting sealing, tolerance, and scale limitations versus real rotary engines."
  },
  brake: {
    type: "Mechanical Design • Structural Analysis",
    title: "Performance Brake Assembly Design",
    summary: "A sport-sedan class brake assembly concept designed around a 340 mm rotor, fixed multi-piston caliper architecture, pad geometry, piston positioning, and mounting constraints.",
    focus: [
      "Packaged rotor, pads, pistons, bridge, and mounting ears around realistic sport-sedan constraints.",
      "Converted hydraulic pressure assumptions into caliper clamp load cases.",
      "Reviewed deformation, stiffness, and stress concentration behavior in simulation.",
      "Iterated geometry toward lower mass, higher stiffness, and manufacturable shapes."
    ],
    tools: ["SolidWorks", "FEA", "Mechanical packaging", "Load-case setup", "GD&T awareness"],
    result: "Created a portfolio-level brake design that demonstrates CAD modeling, structural simulation setup, and engineering reasoning around high-load mechanical hardware."
  },
  carriage: {
    type: "Product Design • Concept Development",
    title: "Delivery Carriage System",
    summary: "A delivery storage product concept aimed at preventing spills and improving food delivery reliability through internal restraint, insulation, mounting flexibility, and order separation.",
    focus: [
      "Defined engineering requirements around spill prevention, accessibility, locked/secured state, insulation, and vehicle mounting.",
      "Created a large-volume insulated box concept with snap-on/off vehicle compatibility.",
      "Added a retractable mesh mechanism to hold food bags down with pressure.",
      "Designed bracket, knob, and peg features to support configurable internal retention."
    ],
    tools: ["Functional decomposition", "Concept generation", "CAD", "Mechanism design", "Benchmark comparison"],
    result: "Developed a practical product concept focused on reducing delivery-service quality issues caused by spilled food and beverages."
  },
  blood: {
    type: "Heat Transfer • Simulation",
    title: "Blood Circulation Heat Transfer Analysis",
    summary: "A thermal-fluid analysis project studying heat transfer properties of blood flow through a simplified vein under room, heating, and cooling environmental cases.",
    focus: [
      "Modeled blood as a Newtonian fluid in cylindrical vein geometry.",
      "Compared theoretical calculations against SolidWorks and ANSYS Fluent models.",
      "Analyzed laminar flow, wall temperature profile, and required heat flux to maintain blood temperature.",
      "Connected engineering results to animal thermoregulation and product-development applications."
    ],
    tools: ["SolidWorks", "ANSYS Fluent", "Heat transfer theory", "Laminar flow analysis", "Reynolds number comparison"],
    result: "The study showed how internal convection and environmental temperature affect body heat management, while also identifying simplifications like ideal geometry, coarse mesh, and missing surrounding convection."
  },
  atat: {
    type: "Mechatronics • Consumer Product Prototype",
    title: "All Terrain Armored Transport Toy",
    summary: "A 3D-printed mechatronic AT-AT toy with walking, turning, rotating head, and blaster movement controlled through a mobile app interface.",
    focus: [
      "Designed modular printed assemblies for legs, chassis, body shell, and head components.",
      "Used magnets and press-fit pins to simplify assembly, repair, and access.",
      "Integrated motors, gears, linkages, wiring, and a breadboard inside the toy body.",
      "Modified the gait after servo failures forced a simplified hip-driven motion path."
    ],
    tools: ["3D printing", "Servo motors", "Gear/linkage design", "Blynk app", "Virtual assembly", "Prototype troubleshooting"],
    result: "Built a working mechatronic prototype and adapted the design around hardware failures, demonstrating practical engineering tradeoffs during physical prototyping."
  }
};

const modal = document.getElementById("project-modal");
const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalFocus = document.getElementById("modal-focus");
const modalTools = document.getElementById("modal-tools");
const modalResult = document.getElementById("modal-result");

function fillList(element, items) {
  element.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function openModal(projectKey) {
  const project = projects[projectKey];
  if (!project) return;
  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  fillList(modalFocus, project.focus);
  fillList(modalTools, project.tools);
  modalResult.textContent = project.result;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.project));
});
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
menuToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
