# ProtocolPilot Development Log

## Project Vision

ProtocolPilot is an AI-assisted research workflow platform designed to help medical students and early-career clinical researchers progress from a research idea to a structured study protocol through guided workflows and educational decision support.

---

## Milestone 1 — Project Planning ✅

Completed

- Defined product vision
- Identified target users
- Chose technology stack
- Created Product Requirements Document (PRD)
- Created User Flow
- Designed application workflow

---

## Milestone 2 — Project Initialization ✅

Completed

- Created GitHub repository
- Initialized Next.js project
- Configured TypeScript
- Configured Tailwind CSS
- Verified local development server
- Exported UI from Google Stitch

---

## Milestone 3 — UI Integration ✅

Completed

Objective

Recreate the Google Stitch interface within the Next.js application.

Tasks

- Imported all 6 core screens (Dashboard, Study Planner, Study Design, Methodology, Statistics, Protocol Preview)
- Built reusable Sidebar component with active-route highlighting
- Built reusable Header component with working dark/light theme toggle
- Fixed Tailwind v4 class-based dark mode configuration
- Standardized design tokens (colors, backgrounds) across all screens
- Fixed a recurring "Dashboard" nav-link bug present in 3 of the original Stitch exports

Status

✅ Complete

---

## Milestone 4 — Navigation ✅

Completed

- Created workflowSteps.ts as single source of truth for the 5-step workflow order
- Built WorkflowNav component with automatic Back/Continue button logic
- Added "Step X of Y" progress indicator to Header, shown only on workflow screens
- Wired WorkflowNav into all 5 workflow screens (Study Planner through Protocol Preview)
- Dashboard correctly excluded from step-counting, remains a hub

---

## Current Milestone

### Milestone 5 — State Management

Objective

Make data entered on one screen (e.g. Study Title on Study Planner) persist and appear on later screens, without a database yet.

Status

🟡 Not yet started
---

## Future Milestones

Milestone 6

Firebase Authentication & Firestore

Milestone 7

Protocol Export

Milestone 8

AI Assistant Integration