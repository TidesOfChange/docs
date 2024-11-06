import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://l1joseph.github.io",
  base: "/SYN100_TRPG",
  integrations: [
    starlight({
      title: "SYN TRPG",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "getting_started/home" },
          ],
        },
        {
          label: "Character",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "character/intro" },
            { label: "Attributes", slug: "character/attributes" },
            { label: "Skills", slug: "character/skills" },
            { label: "Talents", slug: "character/talents" },
            { label: "Equipment", slug: "character/equipment" },
            { label: "Status", slug: "character/status" },
            { label: "Character Sheet", slug: "character/sheet" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
