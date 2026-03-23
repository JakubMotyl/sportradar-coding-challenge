# SportCal - Sports Event Calendar

A responsive and interactive sports event calendar built with **React**, **TypeScript** and **TailwindCSS**. This project was created as a recruitment task to demonstrate proficiency in frontend development.

## Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Build Tool**: Vite
- **Testing**: Vitest

## Features

- **Calendar View**: A clear grid-based interface for the current month.
- **Event Details**: Dynamic routing with `react-router-dom`.
- **Add New Event**: A functional, real-time form to expand the calendar during runtime.
- **Persistent Storage**: Integration with `localStorage` to retain user-added events across sessions.
- **Unit Testing**: Core business logic (calendar grid generation) verified with Vitest.

## Installation & Setup

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/JakubMotyl/sportradar-coding-challenge.git
    cd sportradar-coding-challenge
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the application (Development mode)**:

    ```bash
    npm run dev
    ```

4.  **Run tests**:
    ```bash
    npm run test
    ```

## Development Decisions and Prioritization

- **Core Logic**: My primary focus was to ensure 100% functionality and high code quality. I prioritized a clean, "Basic UI" that is intuitive and bug-free over complex visual effects, ensuring predictable user experience.
- **URL Slugs**: I implemented a slug-based routing system (`date-home-vs-away`) for event details to ensure readable URLs.
- **Strict Typing**: I used TypeScript interfaces for all data structures to catch potential errors during development.
- **State & Persistence**: I chose to use `localStorage` to sync the events. It provides a more complete real-world app experience.
