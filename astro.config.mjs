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
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting_started/intro" },
            { label: "Rules", slug: "getting_started/rules" },
            { label: "Character Creation", slug: "getting_started/character_creation" },
          ],
        },
        {
          label: "Regions",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Aeolian Archipelago", slug: "regions/aeolian_archipelago" },
            { label: "Lumea", slug: "regions/lumea" },
            { label: "Karkorte", slug: "regions/karkorte" },
            { label: "Lumea", slug: "regions/lumea" },
            { label: "Grønn", slug: "regions/grønn" },
            // { label: "NA", slug: "regions/NA" },
          ],
        },
        {
          label: "Species",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "species 1", slug: "species/species1" },
            // { label: "species 2", slug: "species/species2" },
            // { label: "species 3", slug: "species/species3" },
            // { label: "species 4", slug: "species/species4" },
            // { label: "species 5", slug: "species/species5" },
          ],
        },
        {
          label: "Class",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "species 1", slug: "species/species1" },
          ],
        },
        {
          label: "Character",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Character Creation Form", slug: "species/species1" },
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
