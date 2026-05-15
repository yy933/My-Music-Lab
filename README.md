# My Music Lab

A modern, responsive music discovery web application built with vanilla JavaScript and the [Last.fm API](https://www.last.fm/api). This project allows users to explore top tracks, search for their favorite artists, and manage a personal collection using local storage.

## Features

- **Top Charts**: Displays the current top tracks globally on the landing page.

- **Global Search**: Integrated search bar in the navigation allowed users to find tracks or artists from any page.

- **Personal Collection**: Save favorite tracks to a persistent local library.

- **Responsive Design**: A clean, grid-based layout that works across different screen sizes.

- **Accessibility (a11y)**: Optimized for screen readers and keyboard navigation using semantic HTML and ARIA attributes.

- **Data Normalization**: Standardized API response handling to ensure UI consistency between search results and top charts.

## Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3

- **Build Tool**: Vite

- **API**: [Last.fm API](https://www.last.fm/api)

- **Code Quality**: ESLint (Flat Config), Prettier

- **Version Control**: Git (Conventional Commits)

## Project Structure

```
MY PLAYLIST
├── public/                # Static assets (images, favicons)
├── src/
│   ├── api/               # API service logic (Last.fm integration)
│   ├── components/        # Reusable UI components (card, navbar, buttons)
│   ├── pages/             # Page-specific rendering logic
│   ├── styles/            # CSS stylesheets
│   ├── utils/             # Utility functions (Local Storage management)
│   └── main.js            # Main entry point and global event listeners
├── .env                   # Environment variables (API Keys)
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration
└── index.html, search.html, collections.html
```

## Installation & Setup

### Clone the repository:

```
git clone https://github.com/yy933/My-Music-Lab
```

### Install dependencies:

```
npm install
```

### Environment Variables:

Create a `.env` file in the root directory and add your [Last.fm API](https://www.last.fm/api) key:

```
VITE_LASTFM_API_KEY=your_api_key_here
```

### Run Development Server:

```
npm run dev
```

### Lint and Format:

```
npm run lint     // Check for errors
npm run format  // Auto-format code
```

## Roadmap (Upcoming Features):

- **Pagination**: Implement data paging to handle large lists of music more efficiently.

- **View More Button**: Add "View More" functionality to dynamically load more results without full page refreshes.

- **Track Tagging**: Display and filter tracks by genres/tags using Last.fm's tagging system.
