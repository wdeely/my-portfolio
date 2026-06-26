// Import the `useState` hook from the React library.
// Hooks are functions that let you "hook into" React state and lifecycle features from function components.
import { useState, useEffect } from "react";
import explodedView from "./assets/subassembly exploded view.png";
import dsc8725 from "./assets/DSC_8725.JPG";
import feaWingbox from "./assets/FEA wingbox.png";
import sparJoinFEA from "./assets/spar join FEA image.png";
import explodedFuselage from "./assets/exploded fuselage render.png";
import atkinsPhoto from "./assets/atkins/PXL_20250814_141909014.MP.jpg";
import quansConveyor from "./assets/quanser/conveyor belt.png";
import quansPickPlace from "./assets/quanser/pick and place.png";
import batteryLayoutPdf from "./assets/battery mfg layout/question 2 layout drawing.pdf";
import sampleHolderAssembly from "./assets/superconductors/sample holder assembly.svg";
import coilSolderingRig from "./assets/superconductors/coil soldering rig.svg";
import inertGasSolderingRig from "./assets/superconductors/inert gas soldering rig.svg";
import experimentalSetup from "./assets/superconductors/experimental setup.svg";
import sampleHolderPhoto from "./assets/superconductors/sample holder photo.svg";
import currentPlot from "./assets/superconductors/current plot.png";

// Declare an array of objects holding the data for each project in the portfolio.
const projects = [
  {
    id: 1,
    title: "AtkinsRéalis Industrial Placements",
    category: "Nuclear Safety",
    tags: ["Safety Case", "Probabilistic Methods", "Technical Reporting"],
    summary:
      "Engineering placement at AtkinsRéalis working within the nuclear sector. Nuclear safety case argumentation, probabilistic engineering methods, and technical documentation skills across multiple work packages.",
    outcome: "High value client-facing deliverables produced.",
    year: "2024",
    color: "#e8ff47",
  },
  {
    id: 5,
    title: "MEng Project: Aerial Seeding Fixed-Wing UAV",
    category: "Aerospace & Structures",
    tags: ["ANSYS FEA", "SolidWorks", "CFRP", "FAR §23", "Python", "Structural Lead"],
    summary:
      "Structural and layout design for a 3.3m wingspan, 17.2kg MTOW UAV. This entailed the full design, build and test cycle, taking the UAV from an early concept, to a wind tunnel prototype, and finally into a flying model.  ",
    outcome: "Successful first flight 27 April 2026. Structure survived a 2.5g forced landing with no primary damage. Payload deployed in flight.",
    year: "2026",
    color: "#ff9f47",
  },
  {
    id: 7,
    title: "BEng Project: High Temperature Superconductors",
    category: "Cryogenics/Superconductivity",
    tags: ["REBCO", "Cryogenics", "HTS", "Experimental", "Electrical Characterisation"],
    summary:
      "Investigated the effectiveness of a low-oxygen, temperature-controlled soldered copper-to-REBCO joint for high-temperature superconductor applications. Designed and manufactured an N₂-purged soldering apparatus; cryogenic testing at 77 K with liquid nitrogen confirmed joint performance.",
    outcome: "Joint reached nominal critical current (~200 A) with no degradation — soldering method validated.",
    year: "2025",
    color: "#47ffb4",
  },
  {
    id: 3,
    title: "Battery Manufacturing: Facility Design, LCA & Digital Twin",
    category: "Manufacturing & Sustainability",
    tags: ["LCA", "ISO 14040", "LFP", "SIB", "AutoCAD", "Python", "Digital Twin", "Quanser"],
    summary:
      "Designed a 50m × 30m dual-line LFP/SIB battery manufacturing facility and performed ISO 14040/44-compliant LCA comparing diesel ICE, gasoline ICE, and two BEV chemistries over 150,000 km. Programmed a Quanser QArm robotic sorting system in QLabs digital twin environment for battery component handling.",
    outcome: "Full LCA with normalisation, weighting, and sensitivity analysis. Fully operational digital twin of conveyor-integrated sorting workflow.",
    year: "2025",
    color: "#ff6b47",
  },
];

// A dictionary mapping project categories to a specific hex color code.
// This allows us to easily lookup the color based on the category name.
const categoryColors = {
  "Nuclear Safety": "#e8ff47",
  "Manufacturing & Sustainability": "#ff6b47",
  "Robotics & Simulation": "#b47fff",
  "Cryogenics/Superconductivity": "#47ffb4",
  "Aerospace & Structures": "#ff9f47",
};

// Dynamically generate a list of all unique categories to use in the filter bar.
// 1. `projects.map(...)` gets an array of all categories, including duplicates.
// 2. `new Set(...)` removes the duplicates.
// 3. `["All", ...]` creates a new array starting with "All", followed by the unique categories spread out.
const allCategories = ["All", ...new Set(projects.map((p) => p.category))];

// ─── Per-project detail content ──────────────────────────────────────────────
const projectIcons = {
  1: "⚛",
  5: "✈",
  7: "❄",
  3: "⚡",
};

// Replace placeholder strings with real content. Add src to images when ready.
const projectDetails = {
  1: {
    hero: atkinsPhoto,
    sections: [
      { headline: "Placement Overview", body: "Industrial placement within AtkinsRéalis Nuclear & Power. Contributed to multiple work packages across safety analysis and probabilistic engineering disciplines. Led authorship on client-facing deliverables." },
      { headline: "Skills Applied", body: "Safety case argumentation, probabilistic engineering analysis, regulatory compliance, and technical report authoring to industry standards." },
    ],
    images: [],
  },
  3: {
    hero: null,
    sections: [
      { headline: "Facility Design", body: "Designed a 50m × 30m dual-line battery manufacturing facility accommodating parallel production of lithium iron phosphate (LFP) and sodium-ion (SIB) cells. Layout developed in AutoCAD, balancing process flow efficiency, material handling paths, safety separation, and regulatory footprint constraints. The dual-line arrangement allows independent scheduling of each chemistry while sharing common infrastructure.", images: [batteryLayoutPdf], imageMaxWidth: "100%" },
      { headline: "Life Cycle Assessment", body: "ISO 14040/44-compliant LCA comparing four powertrain configurations over a 150,000 km functional unit: diesel ICE, gasoline ICE, LFP BEV, and SIB BEV. System boundary defined from raw material extraction through end-of-life. Impact categories assessed included global warming potential, energy demand, and key resource depletion indicators. Characterisation factors applied per CML methodology.", },
      { headline: "Sensitivity & Conclusions", body: "Normalisation and weighting applied to compare impact profiles across categories. Sensitivity analysis tested the effect of electricity grid carbon intensity on BEV lifecycle scores, quantifying the degree to which grid decarbonisation shifts the relative ranking of chemistries. Results demonstrated that BEV powertrains offer material lifecycle carbon advantages under current and projected UK grid conditions, with SIB chemistry showing competitive performance against LFP at lower material extraction impact." },
      { headline: "QArm Digital Twin: System Overview", body: "Programmed a Quanser QArm robotic arm operating within the QLabs virtual digital twin environment. The task modelled a battery component sorting line: items delivered by conveyor were identified by type and routed to designated drop zones by the robotic arm.", images: [quansConveyor] },
      { headline: "QArm Digital Twin: Programming & Control", body: "Implemented pick-and-place routines in Python using world-coordinate transforms to map conveyor positions to arm joint angles. Choreographed multi-actor sequences to synchronise conveyor timing with arm motion, preventing collisions and minimising cycle time. Final simulation demonstrated a fully operational sorting workflow with consistent placement accuracy across item types.", images: [quansPickPlace] },
    ],
    images: [],
  },
  5: {
    hero: explodedView,
    hero2: dsc8725,
    video: "https://www.youtube.com/embed/9o83gWM_5T4?si=RyCadCE8hKaNNe2S",
    sections: [
      { headline: "Fuselage Design", body: "Frame-and-spine box construction in birch plywood with slotted interlocking joints — mechanically interlocked rather than glue-reliant. Birch selected over poplar after FEA showed poplar failing at the payload bay cutout (~2× lower strength). Structural loads routed through an upper spine of birch ply, CFRP spars, and bulkhead frames to bypass the weakened lower face created by the underside payload bay cutout. Parametric SolidWorks assembly driven by an external parameter file, allowing rapid layout updates as CoG and payload geometry evolved through the build phase. Wing attachment includes ±25 mm fore/aft adjustment in 5 mm increments and a 2° incidence setting.", images: [explodedFuselage] },
      { headline: "Structural Analysis", body: "All primary structure sized in ANSYS Mechanical against CS-23/FAR Part 23 load cases. Limit manoeuvre load factor of 4.5g derived from FAR §23.337; gust cases of 9.1 m/s and 10.8 m/s per FAR §23.341, validated against a 20-year MeteoStat wind dataset for south England. Front CFRP spar FEA stress of 351.97 MPa at 4.5g against a 433 MPa allowable (MoS = 0.54). Wingbox panel iterated to four cross-stiffeners and reinforced outer ribs, converging to 47.6 MPa against a 50 MPa allowable. Initial tailboom attachment in 4 mm birch returned 208 MPa in FEA, exceeding UTS — physical bowing observed in dry assembly confirmed the result. Fixed with a vacuum-bagged CFRP reinforcement plate, reducing stress to within allowable.", images: [feaWingbox, sparJoinFEA] },
      { headline: "Summary", body: `The aim of this project was design, manufacture and test a fixed-wing UAV for aerial seeding operations. The overarching objective was to extend the range of remote reforestation operations into areas that are ordinarily inaccessible or hazardous for existing methods.
The seed dispensing module is designed to be modular, so that the UAV can adapt to missions demanding a variety of tree species canopy densities, while the propulsion system and aerodynamic design allow for missions up to 40km away from the launch point.
The design process required constant iteration and analysis, using design tools such as ANSYS for structural analysis, XFLR5 for stability and aerodynamic modelling, and MATLAB for propulsion optimisation.
A prototype was verified in the R J Mitchell wind tunnel, while the payload system received extensive ground testing. The final design was validated during full flight testing at Draycot Aerodrome, where the UAV took off and flew with good handling characteristics.`, images: [] },
    ],
    images: [],
  },
  7: {
    hero: null,
    sections: [
      { headline: "Experimental Rig Design", body: "Designed and manufactured a low-oxygen soldering apparatus: a sealed N₂-purged enclosure maintaining an inert atmosphere throughout the soldering process. Rig enabled temperature-controlled formation of copper-to-REBCO joints, isolating the effect of oxygen exposure on joint quality.", images: [sampleHolderAssembly, coilSolderingRig, inertGasSolderingRig] },
      { headline: "Cryogenic Testing & Characterisation", body: "Prepared samples and conducted cryogenic testing at ~77 K using liquid nitrogen. Electrically characterised the superconducting joint via critical current (Ic) measurement of REBCO HTS tape. Designed a 10-turn single-pancake HTS coil on a G10 former with Stycast composite insulation.", images: [experimentalSetup, sampleHolderPhoto] },
      { headline: "Results", body: "Joint reached nominal critical current (~200 A) with no measurable degradation at the copper-to-REBCO interface, validating the low-oxygen soldering method.", images: [currentPlot], imageMaxWidth: "51%" },
    ],
    images: [],
  },
  6: {
    hero: null,
    sections: [
      { headline: "Load Case Derivation", body: "Limit manoeuvring load factor of 4.5g derived from FAR 14 CFR §23.337 (n = 2.1 + 24,000/(W + 10,000); W = 17 kg → 4.49g). Gust load cases of 9.1 m/s and 10.8 m/s validated against 20 years of MeteoStat autumn/winter wind data for south England via Python and the MeteoStat API." },
      { headline: "FEA:Spar & Fuselage", body: "Multi-body spar and fuselage models built in ANSYS Mechanical. Mesh convergence study identified a stress singularity at the CFRP/birch bonded interface:stress non-converging from 69 to 210 MPa over element sizes of 15 to 2.5 mm. Correctly identified as a numerical artefact of the bi-material elastic modulus step change, not a physical concentration. Birch panel stress probed 2–3 mm from the bond edge converged at approximately 176 MPa (0.3% variation)." },
      { headline: "CAD & Structural Concept", body: "Parametric SolidWorks fuselage assembly driven by an external parameter file (frontendheight, payloadheight, fueltankheight), allowing rapid layout updates as CoG and payload geometry evolved through the build phase. Structural loads routed through an upper-spine concept:birch ply spine, CFRP spars, and bulkhead frames:to bypass the weakened lower face created by the underside payload bay cutout." },
    ],
    images: [null, null],
  },
};

// ─────────────────────────────────────────────────────────────────────────────

function GearIcon({ style }) {
  return (
    <svg viewBox="0 0 100 100" style={style} fill="#4d9fff" fillRule="evenodd">
      <path d="
        M 55,2 L 45,2 L 43,14
        C 39,15 35,17 32,20 L 21,13 L 13,21 L 20,32
        C 17,35 15,39 14,43 L 2,45 L 2,55 L 14,57
        C 15,61 17,65 20,68 L 13,79 L 21,87 L 32,80
        C 35,83 39,85 43,86 L 45,98 L 55,98 L 57,86
        C 61,85 65,83 68,80 L 79,87 L 87,79 L 80,68
        C 83,65 85,61 86,57 L 98,55 L 98,45 L 86,43
        C 85,39 83,35 80,32 L 87,21 L 79,13 L 68,20
        C 65,17 61,15 57,14 Z
        M 67,50 A 17,17 0 1 0 33,50 A 17,17 0 1 0 67,50 Z
      " />
    </svg>
  );
}

// The main component for the portfolio. `export default` means this is the main function exported from this file.
export default function Portfolio() {
  // `useState` initializes a state variable and a function to update it.
  // When state is updated, React automatically re-renders the component to show the new data.
  // `active` holds the currently selected filter category.
  const [active, setActive] = useState("All");
  // `hovered` tracks the ID of the project card the user is currently hovering over.
  const [hovered, setHovered] = useState(null);
  // `selected` tracks which project has been clicked on to view its details.
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handlePopState = () => setSelected(null);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openProject = (p) => {
    setSelected(p);
    window.history.pushState({ projectId: p.id }, "", `#${p.id}`);
  };

  const closeProject = () => {
    setSelected(null);
    window.history.back();
  };

  // Filter the projects array based on the `active` category.
  // If "All" is selected, show all projects; otherwise, only keep projects matching the active category.
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // Retrieve the detailed content for the currently selected project, if any.
  const detail = selected ? projectDetails[selected.id] : null;


  // If a project has been selected and details exist, render the detail view page.
  if (selected && detail) {
    return (
      // JSX allows you to write HTML-like tags directly in JavaScript.
      // `style={...}` is used to pass a JavaScript object containing CSS styles.
      <div style={styles.root}>
        <div style={styles.grain} />
        <div style={styles.gridBg} />
        <div style={{ ...styles.container, maxWidth: "780px" }} className="site-container">

          {/* Back */}
          {/* The onClick event calls `setSelected(null)` to clear the selection and return to the main grid. */}
          <button style={styles.backBtn} onClick={closeProject}>
            ← Back to projects
          </button>

          {/* Title block */}
          <div style={styles.detailTitleBlock}>
            {/* Inline styles dynamically mix strings to add opacity hex codes (e.g. "18" for 10% opacity) */}
            <span style={{ ...styles.categoryPill, backgroundColor: selected.color + "18", color: selected.color, borderColor: selected.color + "44" }}>
              {selected.category}
            </span>
            <span style={styles.cardYear}>{selected.year}</span>
          </div>
          <h1 style={styles.detailTitle}>{selected.title}</h1>

          {/* Hero image(s) */}
          {detail.hero && (
            <div style={detail.hero2 ? styles.heroPair : null} className={detail.hero2 ? "hero-pair" : ""}>
              <img src={detail.hero} alt={selected.title} style={detail.hero2 ? styles.heroPairImg : styles.heroImg} className="hero-img" />
              {detail.hero2 && <img src={detail.hero2} alt="" style={styles.heroPairImg} />}
            </div>
          )}

          <p style={styles.detailSummary}>{selected.summary}</p>

          <div style={{ position: "relative", marginBottom: "40px", height: "1px" }}>
            <div style={styles.divider} />
            {projectIcons[selected.id] && (
              <span style={{
                position: "absolute",
                top: "50%",
                transform: selected.id === 5 ? "translateY(-50%) scaleX(-1)" : "translateY(-50%)",
                fontSize: (selected.id === 1 || selected.id === 7) ? "22px" : "13px",
                animation: "flyAcross 5s linear infinite",
                pointerEvents: "none",
                opacity: 0.7,
              }}>
                {projectIcons[selected.id]}
              </span>
            )}
          </div>

          {/* Sections */}
          {/* .map() iterates over the sections array to render multiple blocks of HTML.
              `key={i}` provides React with a unique identifier for each list item for efficient updates. */}
          {detail.sections.map((s, i) => (
            <div key={i}>
              <section style={styles.detailSection}>
                <h2 style={styles.detailSectionHeadline}>{s.headline}</h2>
                {s.body ? <p style={styles.detailSectionBody}>{s.body}</p> : null}
                {s.images && s.images.length > 0 && (
                  <div className="section-images" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px", maxWidth: s.imageMaxWidth ?? (s.images.length === 1 ? "41%" : "75%"), margin: "16px auto 0" }}>
                    {s.images.map((src, j) =>
                      src.endsWith(".pdf")
                        ? <object key={j} data={src} type="application/pdf" style={{ ...styles.midImage, height: "520px" }} />
                        : <img key={j} src={src} alt="" style={styles.midImage} />
                    )}
                  </div>
                )}
              </section>
            </div>
          ))}

          {/* Embedded video */}
          {detail.video && (
            <div style={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src={detail.video}
                title="Project video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            </div>
          )}

          {/* Additional images */}
          <div style={styles.imageGrid} className="image-grid">
            {detail.images.map((src, i) =>
              src
                ? <img key={i} src={src} alt="" style={styles.detailImg} />
                : <div key={i} style={styles.imgPlaceholder}><span style={styles.imgPlaceholderLabel}>[ Drop image here ]</span></div>
            )}
          </div>

          {/* Outcome */}
          <div style={{ ...styles.outcomeBox, marginTop: "40px" }}>
            <span style={styles.outcomeLabel}>↳ Outcome</span>
            <span style={styles.outcomeText}>{selected.outcome}</span>
          </div>

          {/* Tags */}
          <div style={{ ...styles.tagRow, marginTop: "24px" }}>
            {/* Another map to iterate through the tags string array and generate span elements. */}
            {selected.tags.map((t) => <span key={t} style={styles.tag}>{t}</span>)}
          </div>

          <div style={{ height: "80px" }} />
        </div>
      </div>
    );
  }

  // If no project is selected, render the main grid view.
  return (
    <div style={styles.root}>
      {/* Grain overlay */}
      <div style={styles.grain} />

      {/* Grid lines background */}
      <div style={styles.gridBg} />


      <div style={styles.container} className="site-container">
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerTop}>
          </div>
          <div className="name-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <GearIcon style={styles.nameGear} className="name-gear" />
            <h1 style={{ ...styles.name, textAlign: "center" }}>William<br /><span style={styles.nameAccent}>Deely</span></h1>
            <GearIcon style={{ ...styles.nameGear, animationDirection: "reverse" }} className="name-gear" />
          </div>
          <p style={styles.tagline}>
            Mechanical Engineering graduate with experience in
            the nuclear industry.
          </p>
          {/* Link to download the CV PDF */}
          <a href="/William_Deely_CV.pdf" download="William_Deely_CV.pdf" style={styles.cvBtn}>Download CV</a>
          <div style={styles.divider} />
        </header>

        {/* Filter bar */}
        <nav style={styles.filterBar} className="filter-bar">
          {/* Iterate over all categories to create a filter button for each */}
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                ...styles.filterBtn,
                // Dynamically apply active and colored styling if the button matches the active state
                ...(active === cat ? styles.filterBtnActive : {}),
                ...(active === cat
                  ? { borderColor: categoryColors[cat] || "#4d9fff", color: categoryColors[cat] || "#4d9fff" }
                  : {}),
              }}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Project grid */}
        <div style={styles.grid} className="proj-grid">
          {/* Iterate through the currently filtered list of projects */}
          {filtered.map((p) => (
            <div
              key={p.id}
              style={{
                ...styles.card,
                // Add hover styling depending on the `hovered` state variable
                ...(hovered === p.id ? styles.cardHovered : {}),
                borderColor: hovered === p.id ? p.color : "rgba(77,159,255,0.15)",
                cursor: "pointer",
              }}
              // Set hovered/selected state on user interaction
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => openProject(p)}
            >
              {/* Card top bar */}
              <div style={styles.cardBar}>
                <span
                  style={{
                    ...styles.categoryPill,
                    backgroundColor: p.color + "18",
                    color: p.color,
                    borderColor: p.color + "44",
                  }}
                >
                  {p.category}
                </span>
                <span style={styles.cardYear}>{p.year}</span>
              </div>

              {/* Accent line */}
              <div
                style={{
                  ...styles.accentLine,
                  backgroundColor: p.color,
                  opacity: hovered === p.id ? 1 : 0.3,
                }}
              />

              <h2 style={styles.cardTitle}>{p.title}</h2>
              <p style={styles.cardSummary}>{p.summary}</p>

              {/* Outcome */}
              <div style={styles.outcomeBox}>
                <span style={styles.outcomeLabel}>↳ Outcome</span>
                <span style={styles.outcomeText}>{p.outcome}</span>
              </div>

              {/* Tags */}
              <div style={styles.tagRow}>
                {p.tags.map((t) => (
                  <span key={t} style={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerLine} />
          <div style={styles.footerContent}>
            <span style={styles.footerText}>
              Nuclear Safety Graduate · AtkinsRéalis Bristol · Sep 2026
            </span>
            <span style={styles.footerLinks}>
              University of Southampton · MEng Mechanical Engineering
            </span>
          </div>
        </footer>
      </div>

      {/* A `<style>` tag is used here to define keyframes and global generic CSS outside of React's inline objects. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        button { font-family: 'DM Mono', monospace; cursor: pointer; }

        @keyframes flyAcross {
          from { left: 104%; }
          to   { left: -4%; }
        }

        @keyframes spinGear {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-enter {
          animation: fadeUp 0.4s ease forwards;
        }

        @media (max-width: 600px) {
          .site-container {
            padding: 40px 16px 60px !important;
          }
          .proj-grid {
            grid-template-columns: 1fr !important;
          }
          .filter-bar {
            gap: 6px !important;
          }
          .name-row svg {
            display: none;
          }
          .hero-pair {
            flex-direction: column !important;
          }
          .hero-pair img {
            width: 100% !important;
          }
          .section-images {
            max-width: 100% !important;
            margin: 16px 0 0 !important;
          }
          .hero-img {
            width: 90% !important;
            max-width: 100% !important;
          }
          .hero-pair {
            flex-direction: column !important;
          }
          .hero-pair img {
            width: 100% !important;
          }
          .image-grid {
            grid-template-columns: 1fr !important;
          }
          object {
            height: 320px !important;
          }
        }

        @media (max-width: 400px) {
          .filter-bar button {
            font-size: 9px !important;
            padding: 5px 8px !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// A JavaScript object acting as a CSS-in-JS stylesheet.
// Notice how CSS properties are written in camelCase (e.g., minHeight instead of min-height).
const styles = {
  root: {
    minHeight: "100vh",
    backgroundColor: "#071526",
    color: "#dde8f5",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
    overflowX: "hidden",
  },
  grain: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
    opacity: 0.5,
  },
  gridBg: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    backgroundImage:
      "linear-gradient(rgba(77,159,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(77,159,255,0.07) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  },
  explodedBg: {
    position: "fixed",
    top: "50%",
    right: "-5%",
    transform: "translateY(-50%)",
    width: "65vw",
    maxWidth: "900px",
    opacity: 0.04,
    pointerEvents: "none",
    zIndex: 0,
    userSelect: "none",
    filter: "grayscale(100%) invert(1)",
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "64px 32px 80px",
  },
  header: {
    marginBottom: "56px",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  label: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#3d6a9a",
  },
  year: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "#2d4a6b",
    letterSpacing: "0.1em",
  },
  name: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(48px, 8vw, 88px)",
    lineHeight: 0.9,
    letterSpacing: "0.02em",
    color: "#eaf2ff",
    marginBottom: "24px",
  },
  nameAccent: {
    color: "#4d9fff",
  },
  nameGear: {
    width: "clamp(36px, 5vw, 64px)",
    height: "clamp(36px, 5vw, 64px)",
    opacity: 0.45,
    display: "inline-block",
    animation: "spinGear 12s linear infinite",
    flexShrink: 0,
  },
  tagline: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "#6b8aad",
    fontWeight: 300,
    marginBottom: "40px",
    textAlign: "center",
  },
  cvBtn: {
    display: "inline-block",
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#e8ff47",
    background: "rgba(232,255,71,0.08)",
    border: "1px solid rgba(232,255,71,0.6)",
    padding: "6px 14px",
    borderRadius: "2px",
    textDecoration: "none",
    marginBottom: "32px",
    cursor: "pointer",
  },
  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(77,159,255,0.5) 0%, rgba(77,159,255,0.1) 60%, transparent 100%)",
  },
  filterBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "40px",
  },
  filterBtn: {
    background: "transparent",
    border: "1px solid rgba(77,159,255,0.2)",
    color: "#3d6a9a",
    padding: "6px 14px",
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "2px",
    transition: "all 0.2s ease",
  },
  filterBtnActive: {
    background: "rgba(77,159,255,0.08)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "20px",
    marginBottom: "80px",
  },
  card: {
    background: "rgba(77,159,255,0.04)",
    border: "1px solid rgba(77,159,255,0.15)",
    borderRadius: "4px",
    padding: "28px",
    transition: "border-color 0.25s ease, background 0.25s ease, transform 0.2s ease",
    cursor: "default",
  },
  cardHovered: {
    background: "rgba(77,159,255,0.08)",
    transform: "translateY(-2px)",
  },
  cardBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  categoryPill: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "3px 8px",
    borderRadius: "2px",
    border: "1px solid",
  },
  cardYear: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "#2d4a6b",
  },
  accentLine: {
    height: "2px",
    width: "32px",
    borderRadius: "1px",
    marginBottom: "16px",
    transition: "opacity 0.25s ease",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "-0.01em",
    color: "#eaf2ff",
    lineHeight: 1.3,
    marginBottom: "12px",
  },
  cardSummary: {
    fontSize: "13.5px",
    lineHeight: 1.7,
    color: "#5a7a9c",
    marginBottom: "20px",
    fontWeight: 300,
  },
  outcomeBox: {
    background: "rgba(77,159,255,0.04)",
    borderLeft: "2px solid rgba(77,159,255,0.25)",
    padding: "10px 14px",
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  outcomeLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    color: "#3d6a9a",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  outcomeText: {
    fontSize: "13px",
    color: "#7a9cc4",
    fontStyle: "italic",
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  tag: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    color: "#3d6a9a",
    background: "rgba(77,159,255,0.07)",
    padding: "3px 8px",
    borderRadius: "2px",
    letterSpacing: "0.05em",
    border: "1px solid rgba(77,159,255,0.15)",
  },
  footer: {
    paddingTop: "40px",
  },
  footerLine: {
    height: "1px",
    background: "rgba(77,159,255,0.1)",
    marginBottom: "24px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
  },
  footerText: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "#2d4a6b",
    letterSpacing: "0.08em",
  },
  footerLinks: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "#2d4a6b",
    letterSpacing: "0.08em",
  },

  // ── Detail page ────────────────────────────────────────────────────────────
  backBtn: {
    background: "transparent",
    border: "1px solid rgba(77,159,255,0.25)",
    color: "#3d6a9a",
    padding: "6px 14px",
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "2px",
    cursor: "pointer",
    marginBottom: "40px",
    fontFamily: "'DM Mono', monospace",
  },
  heroPair: {
    display: "flex",
    gap: "16px",
    marginBottom: "32px",
  },
  heroPairImg: {
    width: "50%",
    height: "auto",
    objectFit: "contain",
    borderRadius: "4px",
    border: "1px solid rgba(77,159,255,0.5)",
    background: "rgba(77,159,255,0.03)",
    padding: "12px",
  },
  heroImg: {
    width: "60%",
    maxWidth: "420px",
    objectFit: "contain",
    borderRadius: "4px",
    marginBottom: "32px",
    display: "block",
    margin: "0 auto 32px",
    border: "1px solid rgba(77,159,255,0.5)",
    background: "rgba(77,159,255,0.03)",
    padding: "12px",
  },
  imgPlaceholder: {
    width: "100%",
    aspectRatio: "16/9",
    background: "rgba(77,159,255,0.03)",
    border: "1px dashed rgba(77,159,255,0.15)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "32px",
  },
  imgPlaceholderLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "#2d4a6b",
    letterSpacing: "0.1em",
  },
  detailTitleBlock: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  detailTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(28px, 4.5vw, 48px)",
    lineHeight: 0.95,
    letterSpacing: "0.02em",
    color: "#eaf2ff",
    marginBottom: "20px",
  },
  detailSummary: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#b8cfe8",
    fontWeight: 400,
    marginBottom: "40px",
  },
  detailSection: {
    marginBottom: "40px",
  },
  detailSectionHeadline: {
    fontSize: "13px",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#4d9fff",
    marginBottom: "12px",
  },
  detailSectionBody: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#a8c4e0",
    fontWeight: 400,
  },
  midImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    borderRadius: "4px",
    border: "1px solid rgba(77,159,255,0.5)",
    background: "rgba(77,159,255,0.03)",
    padding: "8px",
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%",
    marginBottom: "40px",
    borderRadius: "4px",
    overflow: "hidden",
    border: "1px solid rgba(77,159,255,0.5)",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "40px",
  },
  detailImg: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    borderRadius: "4px",
    display: "block",
    border: "1px solid rgba(77,159,255,0.15)",
  },
};