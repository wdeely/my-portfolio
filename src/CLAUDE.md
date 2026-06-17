# Portfolio Website — Claude Code Context

## Owner
**William Deely** — MEng Mechanical Engineering, University of Southampton (2021–2026, including placement year).
Starting as Nuclear Safety Graduate at AtkinsRéalis, Bristol, September 2026.
Academic sponsor recipient (AtkinsRéalis).

**Professional summary:** Final year MEng student with industrial experience in the nuclear industry. Combines fundamental engineering judgement with quantitative analysis. Proven track record in technical report authorship and client-facing deliverables.

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

- File lives at: `public/William_Deely_CV.pdf`
- Link: `<a href="/William_Deely_CV.pdf" download="William_Deely_CV.pdf">`
- Label: "CV — PDF"
- Style: matches existing ghost filter buttons — quiet, monospace, consistent

---

## Skills & tools (use for tags and detail pages)

**Software:** Python (Pandas, NumPy, Matplotlib, Keras, PyTorch), ANSYS Mechanical (FEA), SolidWorks, MATLAB, C++, Excel, COMSOL, ESAComp, MeteoStat API

**Domain expertise:** Nuclear safety analysis, probabilistic/Monte Carlo methods, structural FEA and load derivation (CS-23/FAR 23), composites analysis (CLPT/CFRP), life cycle assessment (ISO 14040/44), regulatory compliance

---

## Current project data

Five projects. Do not modify without instruction.

```
1. AtkinsRéalis Industrial Placement    — Nuclear Safety                  — 2024  (vague by design)
2. Battery Manufacturing Facility & LCA — Manufacturing & Sustainability  — 2025
3. Quanser QArm Digital Twin            — Robotics & Simulation           — 2025
4. MEng Final Year Project              — Research                        — 2026
5. Aerial Seeding Fixed-Wing UAV        — Aerospace & Structures          — 2026
```

**Note on nuclear project:** The placement covered multiple work packages including safety case authorship and probabilistic engineering analysis. Specific project titles, facility names, and technical scope are withheld — do not add them to the public-facing site or this file.

---

## Project detail notes

### Project 1 — AtkinsRéalis Placement (Nuclear Safety)
Vague by design. Three work packages completed during placement. Skills applied: safety analysis, probabilistic methods, technical report authorship. All specifics withheld. Do not elaborate beyond what is already in the card.

### Project 2 — Battery Manufacturing Facility & LCA
Designed a 50m × 30m dual-line LFP/SIB battery manufacturing facility. ISO 14040/44-compliant LCA comparing diesel ICE, gasoline ICE, and two BEV chemistries over 150,000 km. Full normalisation, weighting, and sensitivity analysis.
**Tags:** LCA, ISO 14040, LFP, SIB, AutoCAD

### Project 3 — Quanser QArm Digital Twin
Programmed a Quanser QArm robotic sorting system in QLabs digital twin environment. Pick-and-place routines, multi-actor choreography, world-coordinate positioning for a battery component sorting line.
**Tags:** Python, Quanser, Digital Twin, Automation

### Project 4 — MEng Final Year Project
Details available on request. Graduating June 2026. BEng project (notable): research into low-oxygen temperature-controlled soldered copper-to-REBCO joints for high-temperature superconductors.
**Tags:** MEng, Southampton, Research, HTS

### Project 5 — Aerial Seeding Fixed-Wing UAV
FEEG6013 MEng Group Design Project, University of Southampton, 2025–2026. Five-person team. Supervisor: Prof. Andy Keane. Role: Structural Design Lead.

**Key numbers:** MTOW ~17 kg | Wingspan 3.35 m | Wing area 0.9498 m² | Cruise 25–30 m/s | Engine Gf30 (2.76 hp) | Autopilot CubePilot Cube Orange / ArduPilot | Structural limit 4.5g | Safety factor 1.5 (CS-23 §23.2230)

**Four technically distinctive contributions:**
1. **Load case derivation** — 4.5g limit manoeuvring load factor from FAR 14 CFR §23.337 (n = 2.1 + 24,000/(W + 10,000); W = 17 kg → 4.49g). Gust cases (9.1 m/s / 10.8 m/s) validated against 20 years of MeteoStat autumn/winter wind data via Python.
2. **ANSYS FEA** — Multi-body spar and fuselage models. Mesh convergence study identified stress singularity at CFRP/birch bonded interface (non-converging 69–210 MPa over 15–2.5 mm elements) — correctly identified as numerical artefact. Birch panel stress converged at ~176 MPa (0.3% variation).
3. **Parametric SolidWorks CAD** — External parameter file (`frontendheight`, `payloadheight`, `fueltankheight`) driving fuselage assembly. Maintained adaptability as CoG and payload geometry evolved through build phase.
4. **Upper-spine structural concept** — Box fuselage with large underside payload bay cutout. Loads routed through upper face (birch ply spine + CFRP spars + bulkhead frames).

**Outcome:** Successful first flight 27 April 2026. Structure survived a 2.5g forced landing (spark plug fault) with no primary damage. Payload deployed in flight.
**Tags:** ANSYS FEA, SolidWorks, CFRP, FAR §23, Python, Structural Lead

**3D model plan:** Export airframe `.glb` from SolidWorks. Render in Three.js using `EdgesGeometry` (hard edges only) with `lineBasicMaterial` in `#ff9f47`. Use `@react-three/fiber` + `@react-three/drei` (`OrbitControls`, `useGLTF`). Auto-rotate on Y axis; user can drag. Sits in hero slot of UAV detail page.

---

## Additional background (for About/Contact section)

- Renewable Energy and Sustainability Society, 2021–2023: Founder
- Cycling: Top 20 national time trial championship (2024), University 10-mile TT record, Elite road cyclist — sponsored team DRAFT Racing
- Languages: French (Basic/Intermediate), German (Intermediate)

---

## File structure

```
/
├── CLAUDE.md
├── src/
│   ├── App.jsx                      ← main component
│   ├── UAVViewer.jsx                ← Three.js wireframe viewer (to build)
│   └── ...
├── public/
│   ├── William_Deely_CV.pdf         ← CV download target
│   └── assets/                      ← images, renders, stress plots
└── package.json
```

---

## Planned work / known TODOs

- [ ] Drop `William_Deely_CV.pdf` into `public/`
- [ ] Replace `null` image placeholders with real asset paths once files are in `public/assets/`
- [ ] Build `UAVViewer.jsx` — Three.js EdgesGeometry wireframe (needs `npm install three @react-three/fiber @react-three/drei`)
- [ ] Export airframe `.glb` from SolidWorks (suppress fasteners before export)
- [ ] Add contact section or LinkedIn/email link to footer
- [ ] Mobile responsiveness audit (filter bar, card grid)
- [ ] Deploy (Vercel or GitHub Pages — not yet decided)

---

## What not to change without instruction

- Overall dark aesthetic and color palette
- Font choices (Bebas Neue / DM Mono / DM Sans)
- Inline style-object pattern (unless explicitly asked to refactor)
- Existing project data (ids 1–5)
- Tone: factual, technically specific — no "innovative" or "state-of-the-art"
- Nuclear project vagueness — do not add specifics regardless of context provided
