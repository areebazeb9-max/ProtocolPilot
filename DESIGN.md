---
name: Clinical Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#42474f'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#90efef'
  on-secondary-container: '#006e6e'
  tertiary: '#2d3535'
  on-tertiary: '#ffffff'
  tertiary-container: '#444b4b'
  on-tertiary-container: '#b4bbbb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#93f2f2'
  secondary-fixed-dim: '#76d6d5'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#dde4e4'
  tertiary-fixed-dim: '#c1c8c8'
  on-tertiary-fixed: '#161d1d'
  on-tertiary-fixed-variant: '#414848'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  sidebar-width: 280px
---

## Brand & Style
The design system is engineered for clinical research and academic rigor. The brand personality is authoritative, supportive, and meticulously organized, aiming to evoke a sense of focused confidence in researchers and clinicians. 

The aesthetic blends **Modern Corporate** reliability with **Minimalist** clarity. Every interface element is designed to reduce cognitive load, prioritizing "decision-support" over simple data entry. The UI utilizes a systematic structure where information is tiered by importance, ensuring that academic content feels accessible yet serious. High-quality whitespace and intentional grouping reinforce a "logical flow" that guides the user through complex clinical protocols without overwhelming them.

## Colors
The palette is centered on "Clinical Blue" and "Academic Teal" to establish a professional and trustworthy environment.

- **Primary (Clinical Blue):** Used for navigation, primary actions, and structural headers. It represents stability and authority.
- **Secondary (Academic Teal):** Used for educational highlights, "Learn" cards, and success indicators. It provides a supportive, intelligent contrast to the primary blue.
- **Tertiary (Surface Mint):** A very light wash of teal used for background containers and subtle differentiation in data tables.
- **Neutral:** A range of cool grays focused on readability. High-contrast slate is used for body text, while light ash is reserved for borders and disabled states.
- **AI Accent:** A subtle violet-tinged blue is used exclusively for AI-driven suggestions to distinguish them from standard clinical data.

## Typography
This design system utilizes **Inter** for its exceptional legibility in data-dense environments. The typographic hierarchy is strictly functional.

- **Headlines:** Use semi-bold weights with tight tracking to anchor sections.
- **Body Text:** Optimized for long-form reading with a generous 1.5x line height.
- **Labels:** Small caps are used for metadata and table headers to provide a distinct visual layer from user-entered data.
- **Monospaced Data:** For clinical IDs or technical values, JetBrains Mono is used to ensure character clarity and avoid transcription errors.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. A persistent 280px sidebar provides global navigation, while the content area uses a fluid 12-column grid with a maximum width of 1440px to prevent excessive line lengths in academic text.

- **Logic Flow:** Content is arranged in a continuous vertical column to mimic a clinical protocol.
- **Sidebar:** Left-aligned navigation contains the progress indicator, allowing users to jump between research phases.
- **Breakpoints:**
  - **Desktop (1024px+):** Full sidebar, 12 columns, 48px margins.
  - **Tablet (768px - 1023px):** Collapsed sidebar (icons only), 8 columns, 24px margins.
  - **Mobile (<767px):** Bottom navigation or hamburger menu, 4 columns, 16px margins.

## Elevation & Depth
Depth is signaled through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows. This maintains an academic, flat-paper feel.

- **Level 0 (Background):** The base canvas is a very light neutral (#F8FAFC).
- **Level 1 (Cards/Sections):** White surfaces with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Popovers/Tooltips):** White surfaces with a subtle, diffused 4px blur shadow (5% opacity) to indicate temporary overlay.
- **AI Suggestion Layer:** A subtle inner glow in a soft violet-blue is used to lift "AI Assistant" cards from the standard content.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a modern touch while maintaining the professional structure expected in a clinical environment. 

- **Buttons & Inputs:** 4px (0.25rem) radius.
- **Checkboxes:** 2px radius for a crisp, functional appearance.
- **Learn Cards:** 8px (0.5rem) radius to differentiate them as "supplemental" or "educational" content compared to the more rigid 4px clinical data fields.
- **Progress Bars:** Fully rounded (pill) ends to indicate a fluid process.

## Components
Consistent application of these components ensures the platform feels like a cohesive decision-support tool.

- **Primary Action Buttons:** Solid Clinical Blue with white text. High-contrast and clear.
- **Structured Checklists:** Items include a "status" indicator (Pending, Completed, Flagged). Rows change to a faint Teal background when completed.
- **Learn Cards:** Styled with an Academic Teal border-left (4px) and a light teal background. These always contain an icon and a "Dismiss" or "Read More" action.
- **AI Suggestion Cards:** Identified by a "sparkle" icon and a faint violet border. These appear inline to suggest data corrections or cite relevant research.
- **Progress Indicators:** A vertical stepper in the sidebar showing "Completed," "In Progress," and "Locked" states. Use Academic Teal for the "In Progress" pulse.
- **Interactive Decision Trees:** Visual flowcharts with selectable nodes. Nodes use the standard Card styling but are connected by 2px Clinical Blue lines.
- **Input Fields:** Labeled at the top-left with a "Help" icon that triggers a tooltip explaining the clinical requirement for that specific data point.