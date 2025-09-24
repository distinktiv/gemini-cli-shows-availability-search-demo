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
