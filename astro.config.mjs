import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://tidesofchange.github.io',
    base: '/docs',
    integrations: [
        starlight({
            // general site configuration
            title: 'Tides of Change',
            customCss: [
                './src/styles/custom.css',
                '@fontsource-variable/cinzel',
                '@fontsource/cinzel-decorative',
                '@fontsource/lora',
            ],
            description: 'User manual for the tabletop RPG Tides of Change',
            social: {
                github: 'https://github.com/TidesOfChange/docs',
            },

            sidebar: [
                {
                    // main category
                    label: 'Getting Started',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'getting-started' },
                },
                {
                    // main category
                    label: 'GM Guide',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'gm-guide' },
                },
                {
                    // main category
                    label: 'Rules',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'rules' },
                },
                {
                    // main category
                    label: 'Magic',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'magic' },
                },
                {
                    // main category
                    label: 'Regions',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'species' },
                },
                {
                    // main category
                    label: 'Backgrounds',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'backgrounds' },
                },
                {
                    // main category
                    label: 'Campaigns',
                    collapsed: true,

                    // subcategories
                    items: [
                        {
                            label: 'Trouble in Karkorte',
                            autogenerate: {
                                directory: 'campaigns/trouble-in-karkorte',
                            },
                            collapsed: true,
                        },
                        {
                            label: 'Seed Vault Heist',
                            autogenerate: {
                                directory: 'campaigns/seed-vault-heist',
                            },
                            collapsed: true,
                        },
                        {
                            label: 'Roots of Rebellion',
                            autogenerate: {
                                directory: 'campaigns/roots-of-rebellion',
                            },
                            collapsed: true,
                        },
                        {
                            label: 'Age of Atlantis',
                            autogenerate: {
                                directory: 'campaigns/age-of-atlantis',
                            },
                            collapsed: true,
                        },
                        {
                            label: "Veltharion's Quest",
                            autogenerate: {
                                directory: 'campaigns/veltharions-quest',
                            },
                            collapsed: true,
                        },
                        {
                            label: 'What Remains',
                            autogenerate: {
                                directory: 'campaigns/what-remains',
                            },
                            collapsed: true,
                        },
                        {
                            label: 'The War for Ashenvale',
                            autogenerate: {
                                directory: 'campaigns/the-war-for-ashenvale',
                            },
                            collapsed: true,
                        },
                        {
                            label: 'Rinoalk',
                            autogenerate: { directory: 'campaigns/rinoalk' },
                            collapsed: true,
                        },
                    ],
                },
                {
                    // main category
                    label: 'Economic System',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'economics' },
                },
            ],

            /* old sidebar configuration
      sidebar: [
        {
          label: "Getting Started",
          collapsed: false,
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
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Character Leveling", slug: "rules/character_leveling" },
            { label: "Checks", slug: "rules/checks" },
            { label: "Combat", slug: "rules/combat" },
            { label: "Heath/Damage", slug: "rules/health_damage" },
            { label: "Magic", slug: "rules/magic" },
            { label: "Equipment", slug: "rules/equipment" },
            { label: "Technology", slug: "rules/technology" },
          ],
        },
        {
          label: "Regions",
          collapsed: true,
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
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Mutated Humans", slug: "species/mutated-humans" },
            { label: "Woodland Creatures", slug: "species/woodland-creatures" },
            { label: "Bird Pirates", slug: "species/bird-pirates" },
            { label: "Ecotopians", slug: "species/ecotopians" },
            { label: "Aqualumeans", slug: "species/aqualumeans" },
            { label: "Lumea Humans", slug: "species/lumea-humans" },
          ],
        },
        {
          label: "Class",
          collapsed: true,
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
          label: "Campaigns",
          collapsed: true,
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "The Aeolian Archipelago - Campaign",
              slug: "campaigns/archipelago",
            },
            {
              label: "Karkorte - Trouble in Karkorte",
              slug: "campaigns/trouble-in-karkorte",
            },
            {
              label: "Lumea - Save an Aqualumean child",
              slug: "campaigns/save-aqualumean-child",
            },
            {
              label: "Lumea - Save Astralyss, the kidnapped Celestial Dragon",
              slug: "campaigns/save-astralyss",
            },
            {
              label: "Lumea - Scientists Divided in Atlantis",
              slug: "campaigns/scientists-divided-in-atlantis",
            },
            {
              label: "Sylvangrove - Session 1: Arborian",
              slug: "campaigns/session1-arborian",
            },
            {
              label: "Sylvangrove - Session 2: Florian",
              slug: "campaigns/session2-florian",
            },
            {
              label: "Sylvangrove - Session 3: Mycelian",
              slug: "campaigns/session3-mycelian",
            }
          ],
        },
        {
          label: "Character",
          collapsed: true,
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
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
      */
        }),
    ],
});
