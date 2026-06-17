# Portfolio Website — Claude Code Context

## Owner
**William Deely** — MEng Mechanical Engineering, University of Southampton (2021–2026, including placement year).
Starting as Nuclear Safety Graduate at AtkinsRéalis, Bristol, September 2026.
Academic sponsor recipient (AtkinsRéalis).

## Professional summary (from CV)
Final year MEng student with industrial experience in the nuclear industry. Combines fundamental engineering judgement with quantitative analysis. Proven track record in technical report authorship and client-facing deliverables.

---

## What this project is
A personal portfolio website showcasing engineering projects. Dark, editorial aesthetic. Currently a single-page React component with a detail/modal view per project. Not yet deployed.

---

## Design system

**Aesthetic:** Dark brutalist-editorial. Near-black background (`#0a0a0a`), off-white text (`#e8e8e0`), acid yellow accent (`#e8ff47`). Grain overlay + subtle grid lines for depth. Cards with thin borders that glow on hover.

**Fonts (Google Fonts — already imported):**
- `Bebas Neue` — display/headings only (name, hero)
- `DM Mono` — labels, tags, metadata, monospace UI elements
- `DM Sans` — body, summaries, prose

**Color accents per category:**
```
Nuclear Safety:                 #e8ff47  (acid yellow)
Computational Engineering:      #47c8ff  (sky blue)
Manufacturing & Sustainability: #ff6b47  (coral)
Robotics & Simulation:          #b47fff  (violet)
Research:                       #47ffb4  (mint green)
Aerospace & Structures:         #ff9f47  (amber-orange)
```

**Key style rules:**
- Cards: `background: rgba(255,255,255,0.025)`, `border: 1px solid`, `border-radius: 4px`, lift on hover (`translateY(-2px)`)
- Accent line: 2px × 32px colored bar below category pill, opacity 0.3 → 1 on hover
- Category pill: colored border + tinted background (`color + "18"` alpha)
- Outcome block: left-border callout, italic text, monospace label
- Tags: small monospace chips, `rgba(255,255,255,0.04)` background
- Filter bar: transparent buttons with coloured border/text when active
- Grid: `repeat(auto-fill, minmax(320px, 1fr))`, gap 20px
- CV button: ghost style, `font-family: DM Mono`, consistent with filter buttons — NOT a loud CTA

---

## CV download

- File should live at: `public/William_Deely_CV.pdf`
- Link: `<a href="/William_Deely_CV.pdf" download="William_Deely_CV.pdf">`
- Label: "CV — PDF" with a document icon (e.g. Lucide `FileText`)
- Style: matches existing ghost filter buttons — quiet, labelled, trustworthy
- Placement: header, near name/tagline, alongside contact links

---

## Skills & tools (from CV — use for tags and detail pages)

**Software:**
- Python (Pandas, NumPy, Matplotlib, Keras, PyTorch, Jupyter)
- ANSYS Mechanical (FEA)
- SolidWorks, CAD
- MATLAB
- C++
- Excel
- COMSOL (heat transfer)
- ESAComp (composites laminate analysis)
- MeteoStat API

**Domain expertise:**
- Nuclear safety case authorship
- Probabilistic / Monte Carlo analysis
- Structural FEA and load derivation (CS-23 / FAR 23)
- Composites analysis (CLPT, CFRP)
- Life cycle assessment (ISO 14040/44)
- Regulatory compliance (ONR, CS-23, FAR)

---

## Current project data

Six projects. Do not modify ids 1–6 without instruction.

```
1. Nuclear Safety Case Report           — Nuclear Safety                  — 2024
2. Monte Carlo Turbine Analysis         — Computational Engineering       — 2024
3. Battery Manufacturing Facility & LCA — Manufacturing & Sustainability  — 2025
4. Quanser QArm Digital Twin            — Robotics & Simulation           — 2025
5. MEng Final Year Project              — Research                        — 2026
6. Aerial Seeding Fixed-Wing UAV        — Aerospace & Structures          — 2026
```

---

## Project detail content

### Project 1 — Nuclear Safety Case Report
**Full title from CV:** Dungeness B OEM Neutron Scatter Plug Engineering Advice Note  
**Context:** AtkinsRéalis Nuclear & Power placement, 2023–2025  
**What was done:** Lead author of an 8,500-word report. Analysed prior testing data to give confidence in understanding of metallurgical behaviours and likelihood of fault within a nuclear fuel assembly.  
**Tags:** AtkinsRéalis, Safety Analysis, Lead Author, ONR, Nuclear  
**Outcome:** Delivered as primary author — client-facing deliverable

Also relevant (same placement, could be a second card or subsection):
- *Moisture Monitoring EAN* — Authored report justifying safe relaxation of in-reactor moisture limits for a defuelling reactor; reduced operator-hours and improved defuelling efficiency.
- *Meteorological Hazards Extent of Condition* — Co-authored fleetwide review of station resilience to meteorological hazards including climate change impacts; recognised for high-quality contributions.

---

### Project 2 — Monte Carlo Turbine Probabilistic Analysis
**Full title from CV:** PWR Turbine Disintegration Licensing Summary Statement  
**Context:** AtkinsRéalis, contributing to licensing documentation for a £38bn new build project  
**What was done:** Conducted Monte Carlo analysis of a steam turbine failure event using an in-house tool. Authored an appendix summarising results for inclusion in licensing documentation.  
**Tags:** Monte Carlo, Risk Analysis, AtkinsRéalis, PWR, Licensing  
**Outcome:** Statistical confidence bounds established for design validation; appendix delivered into £38bn project licensing documentation

---

### Project 3 — Battery Manufacturing Facility Layout & LCA
**Context:** SESM6049 module, University of Southampton, 2025  
**What was done:** Designed a 50m × 30m dual-line LFP/SIB battery manufacturing facility. Performed ISO 14040/44-compliant life cycle assessment comparing diesel ICE, gasoline ICE, and two BEV chemistries over a 150,000 km lifecycle.  
**Tags:** LCA, ISO 14040, LFP, SIB, AutoCAD  
**Outcome:** Full LCA with normalisation, weighting, and sensitivity analysis

---

### Project 4 — Quanser QArm Digital Twin
**Context:** SESM6049 module, University of Southampton, 2025  
**What was done:** Programmed a Quanser QArm robotic sorting system in QLabs digital twin environment. Implemented pick-and-place routines, multi-actor choreography, and world-coordinate positioning for a battery component sorting line.  
**Tags:** Python, Quanser, Digital Twin, Automation  
**Outcome:** Fully operational simulation of conveyor-integrated sorting workflow

---

### Project 5 — MEng Final Year Project (BEng precursor also notable)
**BEng project (worth mentioning):** "Investigating the effectiveness of a Low-Oxygen, Temperature Controlled Soldered Copper to REBCO Joint" — High Temperature Superconductors  
**MEng FYP:** Details available on request. Graduating June 2026.  
**Tags:** MEng, Southampton, Research  

---

### Project 6 — Aerial Seeding Fixed-Wing UAV
**Context:** FEEG6013 MEng Group Design Project, University of Southampton, 2025–2026. Five-person team (Project 50). Supervisor: Prof. Andy Keane.  
**Role:** Structural Design Lead

**Key aircraft numbers:**
- MTOW: ~17 kg | Wingspan: 3.35 m | Wing area: 0.9498 m²
- Cruise: 25–30 m/s | Engine: Gf30 (2.76 hp) | Autopilot: CubePilot Cube Orange / ArduPilot
- Structural limit: 4.5g | Safety factor: 1.5 (CS-23 §23.2230)

**Four technically distinctive contributions (surface in detail view):**

1. **Load case derivation** — 4.5g limit manoeuvring load factor from FAR 14 CFR §23.337 (n = 2.1 + 24,000/(W + 10,000); W = 17 kg → 4.49g). Gust load cases (9.1 m/s and 10.8 m/s) validated against 20 years of MeteoStat autumn/winter wind data via Python/MeteoStat API.

2. **ANSYS FEA** — Multi-body spar and fuselage models. Mesh convergence study identified a stress singularity at the CFRP/birch bonded interface (non-converging 69–210 MPa over 15–2.5 mm element range) — correctly identified as a numerical artefact of bi-material elastic modulus step change, not a physical concentration. Birch panel stress converged at ~176 MPa (0.3% variation).

3. **Parametric SolidWorks CAD** — External parameter file (`frontendheight`, `payloadheight`, `fueltankheight`) driving the fuselage assembly. Maintained adaptability as CoG and payload geometry evolved throughout the build phase.

4. **Upper-spine structural concept** — Box fuselage with large underside payload bay cutout. Loads routed through upper face (birch ply spine + CFRP spars + bulkhead frames) to avoid the weakened lower face.

**Outcome:** Successful first flight 27 April 2026. Structure survived a 2.5g forced landing (spark plug fault) with no primary damage. Payload deployed in flight.  
**Tags:** ANSYS FEA, SolidWorks, CFRP, FAR §23, Python, Structural Lead  
**Color:** `#ff9f47`

**Assets potentially available:**
- SolidWorks renders of fuselage / full aircraft assembly
- ANSYS von Mises stress plots (fuselage, spar models)
- Flight test photos / video (27 April 2026)
- Aircraft three-view orthographic drawing

**3D model plan:** Export airframe assembly from SolidWorks as `.glb`. Render in Three.js using `EdgesGeometry` (hard edges only, not full wireframe triangulation) with `lineBasicMaterial` in `#e8ff47` or `#ff9f47` against the dark background. Use `@react-three/fiber` + `@react-three/drei` (`OrbitControls`, `useGLTF`). Auto-rotate on Y axis; user can drag to inspect. Sits in the hero slot of the UAV detail page.

---

## Additional background (from CV — available for About/Contact section)

**Transferable experience:**
- Renewable Energy and Sustainability Society, 2021–2023: Founder, grew society profile and engagement
- Headlands Garage / Cylinder Head Services, 2018–2019: Supported automotive technicians
- KLM Taxis Telephone Operator, 2019–2022: Customer relations

**Interests:**
- Cycling: Top 20 in national time trial championship (2024). University 10-mile TT record holder. Elite road cyclist, sponsored team DRAFT Racing.
- Languages: French (Basic/Intermediate), German (Intermediate)

**Third Year Python project (minor — could surface as a tag or footnote):**
Real-world modelling of cost savings from small-scale wind power (Python — Pandas/MeteoStat)

---

## File structure (assumed)

```
/
├── CLAUDE.md                        ← this file
├── src/
│   ├── Portfolio.jsx                ← main component
│   ├── UAVViewer.jsx                ← Three.js wireframe viewer (to build)
│   └── ...
├── public/
│   ├── William_Deely_CV.pdf         ← CV download target
│   └── assets/                      ← images, renders, stress plots
└── package.json
```

---

## Planned work / known TODOs

- [ ] Drop `William_Deely_CV.pdf` into `public/` — button already wired in code
- [ ] Replace `null` image placeholders in `projectDetails` with real asset paths once files are in `public/assets/`
- [ ] Build `UAVViewer.jsx` — Three.js EdgesGeometry wireframe component (needs `npm install three @react-three/fiber @react-three/drei`)
- [ ] Export airframe `.glb` from SolidWorks (suppress fasteners before export)
- [ ] Add contact section or LinkedIn/email link to footer
- [ ] Mobile responsiveness audit (filter bar, card grid)
- [ ] Deploy (Vercel or GitHub Pages — not yet decided)
- [ ] Consider expanding Project 1 card to cover all three AtkinsRéalis reports (or add sub-items)

---

## What not to change without instruction

- Overall dark aesthetic and color palette
- Font choices (Bebas Neue / DM Mono / DM Sans)
- Inline style-object pattern (unless explicitly asked to refactor)
- Existing project data (ids 1–6)
- Tone: factual, technically specific — no "innovative" or "state-of-the-art"
