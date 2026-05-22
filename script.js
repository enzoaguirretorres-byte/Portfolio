const slidePaths = {
  aer: ["assets/slides/aer/slide-01.webp"],
  rotary: Array.from({ length: 12 }, (_, i) => `assets/slides/rotary/slide-${String(i + 1).padStart(2, "0")}.webp`),
  carriage: ["assets/slides/carriage/slide-01.webp"],
  blood: Array.from({ length: 16 }, (_, i) => `assets/slides/blood/slide-${String(i + 1).padStart(2, "0")}.webp`),
  atat: Array.from({ length: 6 }, (_, i) => `assets/slides/atat/slide-${String(i + 1).padStart(2, "0")}.webp`)
};

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
    result: "Produced a functional prototype with adjustable resistance levels, structural support points, app-integrated control, and a manufacturing cost target aimed below traditional rehab equipment.",
    images: slidePaths.aer,
    deck: "assets/docs/presentations/AER_RehabilitationDevice.pptx",
    mediaLabel: "AER capstone presentation"
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
    result: "The prototype demonstrated Wankel-style form and function, with maximum recorded efficiency around 0.7%, highlighting sealing, tolerance, and scale limitations versus real rotary engines.",
    images: slidePaths.rotary,
    deck: "assets/docs/presentations/Rotary_Engine_prototype.pptx",
    mediaLabel: "Rotary engine prototype presentation"
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
    result: "Created a portfolio-level brake design that demonstrates CAD modeling, structural simulation setup, and engineering reasoning around high-load mechanical hardware.",
    images: [],
    deck: "",
    mediaLabel: "Brake assembly visuals"
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
    result: "Developed a practical product concept focused on reducing delivery-service quality issues caused by spilled food and beverages.",
    images: slidePaths.carriage,
    deck: "assets/docs/presentations/Carriage_system.pptx",
    mediaLabel: "Delivery carriage presentation"
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
    result: "The study showed how internal convection and environmental temperature affect body heat management, while also identifying simplifications like ideal geometry, coarse mesh, and missing surrounding convection.",
    images: slidePaths.blood,
    deck: "assets/docs/presentations/Blood_circulation_analysis.pptx",
    mediaLabel: "Blood circulation analysis presentation"
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
    result: "Built a working mechatronic prototype and adapted the design around hardware failures, demonstrating practical engineering tradeoffs during physical prototyping.",
    images: slidePaths.atat,
    deck: "assets/docs/presentations/ATAT_MechatronicToy.pptx",
    mediaLabel: "AT-AT mechatronic toy presentation"
  }
};

const modal = document.getElementById("project-modal");
const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalFocus = document.getElementById("modal-focus");
const modalTools = document.getElementById("modal-tools");
const modalResult = document.getElementById("modal-result");
const modalMedia = document.getElementById("modal-media");
const modalMediaCaption = document.getElementById("modal-media-caption");
const modalImage = document.getElementById("modal-image");
const modalImageButton = document.getElementById("modal-image-button");
const modalImageLink = document.getElementById("modal-image-link");
const modalDeckLink = document.getElementById("modal-deck-link");
const modalThumbnails = document.getElementById("modal-thumbnails");

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

let activeProjectKey = null;
let activeImageIndex = 0;

function fillList(element, items) {
  element.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function getActiveProject() {
  return activeProjectKey ? projects[activeProjectKey] : null;
}

function setActiveImage(index) {
  const project = getActiveProject();
  if (!project || !project.images.length) return;
  activeImageIndex = Math.max(0, Math.min(index, project.images.length - 1));
  const src = project.images[activeImageIndex];
  const countText = `Slide ${activeImageIndex + 1} of ${project.images.length}`;
  modalImage.src = src;
  modalImage.alt = `${project.title} — ${countText}`;
  modalImageLink.href = src;
  modalMediaCaption.textContent = `${countText}. Click the main image to expand it.`;

  [...modalThumbnails.children].forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === activeImageIndex);
    button.setAttribute("aria-pressed", buttonIndex === activeImageIndex ? "true" : "false");
  });

  if (lightbox.getAttribute("aria-hidden") === "false") {
    lightboxImage.src = src;
    lightboxImage.alt = `${project.title} — ${countText}`;
    lightboxCaption.textContent = `${project.title} • ${countText}`;
  }
}

function renderMedia(project) {
  modalThumbnails.innerHTML = "";

  if (!project.images.length && !project.deck) {
    modalMedia.hidden = true;
    return;
  }

  modalMedia.hidden = false;

  if (project.deck) {
    modalDeckLink.href = project.deck;
    modalDeckLink.style.display = "inline-flex";
  } else {
    modalDeckLink.removeAttribute("href");
    modalDeckLink.style.display = "none";
  }

  if (!project.images.length) {
    modalImageButton.hidden = true;
    modalImageLink.style.display = "none";
    modalMediaCaption.textContent = "Add CAD renders, simulation screenshots, or project photos to show visuals here.";
    return;
  }

  modalImageButton.hidden = false;
  modalImageLink.style.display = "inline-flex";
  project.images.forEach((src, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.type = "button";
    thumbButton.className = "thumbnail-button";
    thumbButton.setAttribute("aria-label", `Show slide ${index + 1}`);
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = `${project.title} thumbnail ${index + 1}`;
    thumb.loading = "lazy";
    thumbButton.appendChild(thumb);
    thumbButton.addEventListener("click", event => {
      event.stopPropagation();
      setActiveImage(index);
    });
    modalThumbnails.appendChild(thumbButton);
  });

  setActiveImage(0);
}

function openModal(projectKey) {
  const project = projects[projectKey];
  if (!project) return;
  activeProjectKey = projectKey;
  activeImageIndex = 0;
  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  fillList(modalFocus, project.focus);
  fillList(modalTools, project.tools);
  modalResult.textContent = project.result;
  renderMedia(project);
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  closeLightbox();
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openLightbox() {
  const project = getActiveProject();
  if (!project || !project.images.length) return;
  const src = project.images[activeImageIndex];
  lightboxImage.src = src;
  lightboxImage.alt = `${project.title} — Slide ${activeImageIndex + 1} of ${project.images.length}`;
  lightboxCaption.textContent = `${project.title} • Slide ${activeImageIndex + 1} of ${project.images.length}`;
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox?.setAttribute("aria-hidden", "true");
}

function shiftLightbox(direction) {
  const project = getActiveProject();
  if (!project || !project.images.length) return;
  const nextIndex = (activeImageIndex + direction + project.images.length) % project.images.length;
  setActiveImage(nextIndex);
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
modalImageButton?.addEventListener("click", openLightbox);
document.querySelectorAll("[data-close-lightbox]").forEach(el => el.addEventListener("click", closeLightbox));
document.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => shiftLightbox(-1));
document.querySelector("[data-lightbox-next]")?.addEventListener("click", () => shiftLightbox(1));

document.addEventListener("keydown", event => {
  const lightboxOpen = lightbox?.getAttribute("aria-hidden") === "false";
  const modalOpen = modal?.getAttribute("aria-hidden") === "false";

  if (event.key === "Escape" && lightboxOpen) {
    closeLightbox();
    return;
  }
  if (event.key === "Escape" && modalOpen) {
    closeModal();
    return;
  }
  if (!modalOpen) return;
  if (event.key === "ArrowLeft") shiftLightbox(-1);
  if (event.key === "ArrowRight") shiftLightbox(1);
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
