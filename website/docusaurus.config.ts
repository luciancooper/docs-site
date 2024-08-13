import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'docs-site',
    tagline: 'Docs are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://cli-screencast.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config. If you aren't using GitHub pages, you don't need these.
    organizationName: 'luciancooper', // Usually your GitHub org/user name.
    projectName: 'docs-site', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set useful metadata like html lang.
    // For example, if your site is Chinese, you may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        ['classic', {
            docs: {
                routeBasePath: '/',
                sidebarPath: './sidebars.ts',
                path: '../docs',
            },
            blog: false,
            theme: {
                customCss: './src/css/custom.css',
            },
        } satisfies Preset.Options],
    ],
    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },
        navbar: {
            title: 'docs-site',
            logo: { alt: 'docs-site logo', src: 'img/logo.svg' },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/luciancooper/docs-site',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;