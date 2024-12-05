import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";



// https://astro.build/config
export default defineConfig({
  site: "https://l1joseph.github.io",
  base: "/Tides-of-Change",
  integrations: [
    starlight({
      title: "Tides of Change",
      logo: {
        light: "./src/assets/toc_logo.webp",
        dark: "./src/assets/toc_logo_dark.webp",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting_started/intro" },
            {
              label: "Character Creation",
              slug: "getting_started/character_creation",
            },
          ],
        },
        {
          label: "Rules",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Character Leveling", slug: "rules/character_leveling" },
            { label: "Checks", slug: "rules/checks" },
            { label: "Combat", slug: "rules/combat" },
            { label: "Heath/Damage", slug: "rules/health_damage" },
            { label: "Magic", slug: "rules/magic" },
            { label: "Resources", slug: "rules/resources" },
            { label: "Technology", slug: "rules/technology" },
          ],
        },
        {
          label: "Regions",
          items: [
            { label: "Map of Regions", slug: "regions/map" },
            { label: "Mainland", slug: "regions/mainland" },
            {
              label: "Aeolian Archipelago",
              slug: "regions/aeolian_archipelago",
            },
            { label: "Lumea", slug: "regions/lumea" },
            { label: "Karkorte", slug: "regions/karkorte" },
            { label: "Grønn Verden", slug: "regions/grønn-verden" },
            { label: "Sylvangrove", slug: "regions/sylvangrove" },
          ],
        },
        {
          label: "Species",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Mutated Humans", slug: "species/mutated-humans" },
            { label: "Woodland Creatures", slug: "species/woodland-creatures" },
            { label: "Bird Pirates", slug: "species/bird-pirates" },
            { label: "Ecotopians", slug: "species/ecotopians" },
            { label: "Aqualumeans", slug: "species/aqualumeans" },
          ],
        },
        {
          label: "Class",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Scavenger", slug: "class/scavenger" },
            { label: "Hunter", slug: "class/hunter" },
            { label: "Ranger", slug: "class/ranger" },
            { label: "Enchanter", slug: "class/enchanter" },
            { label: "Ecotechnicians", slug: "class/ecotechnicians" },
            { label: "Public Servants", slug: "class/public-servants" },
            { label: "Cloudrunners", slug: "class/cloudrunners" },
            { label: "Skycallers", slug: "class/skycallers" },
            { label: "Farmers", slug: "class/farmers" },
            { label: "Seed Keepers", slug: "class/seed-keepers" }
          ],
        },
        {
          label: "Character",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Character Creation Form",
              slug: "character/form",
            },
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
