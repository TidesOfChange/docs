# Tides of Change TRPG Website - Developer Guide

## Overview

This guide provides instructions for developers working on the **Tides of Change** website. The site is an all-in-one resource for players of the **Tides of Change** tabletop RPG, featuring game rules, character creation tools, and immersive world lore.

---

## Key Features

### Game Content

- **Interactive World Map**: Explore regions, their lore, and the history of the Tides of Change universe.
- **Character Creation**: Backstory generation, attributes, and a guided creation process.
- **Rules System**: Comprehensive details on combat, magic, leveling, and other gameplay mechanics.

### Development Framework

- **Framework**: Built using [Astro](https://astro.build/) with the **Starlight** theme for structured and user-friendly navigation.
- **Markdown/MDX**: All content is written in `.md` or `.mdx` files, making it easy to edit and extend.

---

## Development Setup

### Prerequisites

- **Node.js**: Version 16.0.0 or higher.
- **Package Manager**: npm or yarn.

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tides-of-change.git
   cd tides-of-change
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`.

---

## Website Structure

### File Organization

- **Content Directory**: All webpages are located in `src/content/`. Subdirectories include:

  - `rules/` - Game rules.
  - `regions/` - Region-specific lore and maps.
  - `class/` - Playable character classes.
  - `species/` - Information about species in the world.
  - `getting_started/` - Beginner guides and tutorials.
  - `campaigns/` - Pre-designed campaigns and adventures.

- **Assets Directory**: Images, logos, and other media are in `src/assets/`.

### Editing Content

- Create or update files in `src/content/` using Markdown (`.md`) or MDX (`.mdx`).
- For syntax and formatting guidelines, refer to the [Starlight Authoring Content Guide](https://starlight.astro.build/guides/authoring-content/).

---

## Updating Navigation Sidebar

To modify the navigation menu on the left sidebar:

1. Open `astro.config.mjs`.
2. Locate the `sidebar` variable.
3. Add or edit sections following the existing structure:
   ```javascript
   {
     label: "New Section",
     items: [
       { label: "New Page", slug: "path/to/page" }
     ],
   },
   ```
4. Save your changes and restart the development server to apply updates.

---

## Starlight Framework

The website leverages **Starlight**, a flexible framework for content-based websites. Key features include:

- **Auto-generated Navigation**: Content in `src/content/` is dynamically indexed for the sidebar and search functionality.
- **Markdown/MDX Support**: Easily create and format pages using standard Markdown with extended MDX capabilities.
- **Search Integration**: Built-in search bar for quick access to content.

For more information, consult the [Starlight Authoring Content Guide](https://starlight.astro.build/guides/authoring-content/).

---

## Collaboration

To contribute:

1. Request collaborator access to the GitHub repository.
2. Clone the repository and set up the project as per the instructions above.
3. Follow project contribution guidelines for pull requests.

---

## Notes for Contributors

- **Content Placement**: Keep all new content in the `src/content/` directory unless necessary changes are required elsewhere.
- **Consistency**: Follow existing patterns for formatting and organization.
- **Testing**: Always test changes locally to ensure they work as intended.

---

This guide equips you to contribute effectively to the **Tides of Change** TRPG website. If you have any questions or need assistance, reach out to the project maintainers. 🌊✨
