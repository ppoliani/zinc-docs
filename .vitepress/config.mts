import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zinc",
  description: "Zinc is a high-performance HTTP web framework written in Zig.",
  themeConfig: {
    logo: '/zero.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/src/getting-started' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Getting started', link: '/src/getting-started' },
          { text: 'Basic routing', link: '/src/basic-routing' },
          { text: 'JSON response', link: '/src/json-response' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zon-dev/zinc' }
    ]
  }
})
