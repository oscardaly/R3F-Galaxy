# Building Interactive 3D Web Applications with React-Three-Fiber

This project demonstrates an interactive 3D model of the solar system built with Next.js, React Three Fiber, and Three.js. It showcases how to create interactive 3D web components rendered in the browser.

## Features

*   Displays the Sun and planets of our solar system in 3D space.
*   Planets orbit the Sun along their respective paths.
*   Hovering over a planet highlights it with an outline and pauses its orbital motion.
*   Clicking on a planet displays basic information about it (Name, Orbital Speed, Color).
*   Interactive camera controls ([`OrbitControls`](app/components/react-three-fiber-example/ReactThreeFiberExample.tsx)) allow users to zoom (scroll) and pan (drag) the view.
*   Uses postprocessing effects ([`Outline`](app/components/react-three-fiber-example/ReactThreeFiberExample.tsx)) for highlighting selected objects.

## Technologies Used

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
*   [Three.js](https://threejs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [@react-three/drei](https://github.com/pmndrs/drei) (Helpers for React Three Fiber)
*   [@react-three/postprocessing](https://github.com/pmndrs/postprocessing) (Postprocessing effects)

## Getting Started

### Prerequisites

*   Node.js (v16 or later recommended)
*   npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev