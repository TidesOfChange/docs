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
                    label: 'Rules',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'rules' },
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
                    label: 'Species',
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
                    label: 'Magic',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'magic' },
                },
                {
                    // main category
                    label: 'Frontier',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'frontier' },
                },
                {
                    // main category
                    label: 'Territories',
                    collapsed: true,

                    // subitems
                    autogenerate: { directory: 'territories' },
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
                            label: 'Coastal Crisis',
                            autogenerate: {
                                directory: 'campaigns/coastal-crisis',
                            },
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
        }),
    ],
});
