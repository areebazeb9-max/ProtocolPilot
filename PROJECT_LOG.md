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

## Milestone 5 — State Management ✅

Completed

- Created ProtocolContext with React Context API for app-wide shared state
- Connected Study Title (Study Planner), Intervention toggle (Study Design), and Population Description/Age Range (Methodology) to shared state
- Verified all fields persist correctly when navigating between screens
- Verified cross-screen display: Study Title set on Study Planner now shows on Dashboard's hero card
- Note: Statistics and Protocol Preview have no user-input fields currently, so nothing to connect there

---

## Milestone 6 — Firebase Authentication & Firestore ✅

Completed

- Created Firebase project, enabled Email/Password and Google sign-in
- Built AuthContext for app-wide login state, using Firebase's onAuthStateChanged
- Built /login page with signup, login, and Google sign-in, wired into Header (login status + logout)
- Created Firestore database with security rules restricting each user to their own document
- Connected ProtocolContext to Firestore: saveProgress() writes current fields, useEffect loads saved data on login
- Added "Save Progress" button to WorkflowNav, gated behind login status
- Verified full loop: save data, log out, log back in, data persists correctly

---

## Milestone 7 — Protocol Export ✅

Completed

- Discovered Statistics and Protocol Preview screens had no real inputs in the original Stitch export (hardcoded display text only) — added real functionality before building export
- Added 4 real dropdown fields to Statistics (Variable Type, Measurement Scale, Group Structure, Distribution), connected to shared state and Firestore
- Rebuilt Protocol Preview's completeness gauge and section checklist to calculate honestly from real data, instead of hardcoded values
- Installed jsPDF, built generateProtocolPdf() to produce a formatted document from all 9 protocol fields
- Added "Export as PDF" button to Protocol Preview
- Verified full pipeline: type data → persists via Context/Firestore → exports correctly into downloaded PDF

---

## Current Milestone

### Milestone 8 — AI Assistant Integration

Objective

Add AI-powered suggestions and guidance throughout the workflow, per ADR-005: AI should explain, suggest, and educate — never make decisions or generate protocols autonomously.

Status

🟡 Not yet started

