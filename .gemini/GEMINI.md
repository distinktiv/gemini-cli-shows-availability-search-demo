# Project Overview

This is a "Where to Watch Lookup" application. It's a web application that allows users to search for TV shows and movies and see which streaming platforms they are available on.

The project is a single-page React application built with Vite. It uses a component-based architecture with a focus on a rich user interface, leveraging the Radix UI component library. The application state is managed with React hooks.

Currently, the data is mocked and served from a local file (`src/utils/mockData.ts`).

# Building and Running

1.  **Install Dependencies:**
    ```bash
    npm i
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    The production-ready files will be in the `build` directory.

# Development Conventions

*   **Component-Based Architecture:** The application is structured around reusable React components, located in the `src/components` directory.
*   **Styling:** The project uses Tailwind CSS for styling, as indicated by the presence of `tailwind-merge` and the class names used in the components.
*   **Data Fetching:** Data fetching is currently mocked. The `searchContent` function in `src/utils/mockData.ts` simulates an API call.
*   **State Management:** The application uses React hooks (`useState`) for state management.

# The PRAR Prime Directive: The Workflow Cycle

You will execute all tasks using the **Perceive, Reason, Act, Refine (PRAR)** workflow. This is your universal process for all development tasks.

## Phase 1: Perceive & Understand
**Goal:** Build a complete and accurate model of the task and its environment.
**Mode of Operation:** This phase is executed using the protocols defined in **Explain Mode**.
**Actions:**
1.  Deconstruct the user's request to identify all explicit and implicit requirements.
2.  Conduct a thorough contextual analysis of the codebase.
3.  For new projects, establish the project context, documentation, and learning frameworks as defined in the respective protocols.
4.  Resolve all ambiguities through dialogue with the user.
5.  Formulate and confirm a testable definition of "done."

## Phase 2: Reason & Plan
**Goal:** Create a safe, efficient, and transparent plan for user approval.
**Mode of Operation:** This phase is executed using the protocols defined in **Plan Mode**.
**Actions:**
1.  Identify all files that will be created or modified.
2.  Formulate a test-driven strategy.
3.  Develop a step-by-step implementation plan, updating the `docs/backlog.md`.
4.  Present the plan for approval, explaining the reasoning behind the proposed approach. **You will not proceed without user confirmation.**

## Phase 3: Act & Implement
**Goal:** Execute the approved plan with precision and safety.
**Mode of Operation:** This phase is executed using the protocols defined in **Implement Mode**.
**Actions:**
1.  Execute the plan, starting with writing the test(s).
2.  Work in small, atomic increments.
3.  After each modification, run relevant tests, linters, and other verification checks (e.g., `npm audit`).
4.  Document the process and outcomes in the `LEARNINGS.gemini.md` file as per the Learning Protocol.

## Phase 4: Refine & Reflect
**Goal:** Ensure the solution is robust, fully integrated, and the project is left in a better state.
**Mode of Operation:** This phase is also governed by the final verification steps of **Implement Mode**.
**Actions:**
1.  Run the *entire* project's verification suite.
2.  Update all relevant documentation as per the Documentation Protocol.
3.  Structure changes into logical commits with clear, conventional messages.
4.  Reflect on the contents of `LEARNINGS.gemini.md` to internalize lessons for future tasks.