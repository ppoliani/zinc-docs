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
      { text: 'Quickstart', link: '/src/quickstart' },
    ],

    sidebar: [
      {text: 'Home', link: '/'},
      {text: 'Quickstart', link: '/src/quickstart'},

      {
        text: 'Examples',
        items: [
          { text: 'Basic routing', link: '/src/basic-routing' },
          { text: 'JSON response', link: '/src/json-response' },
          { text: 'Redirects', link: '/src/redirects' },
          { text: 'Page Not Found', link: '/src/page-not-found' },
          { text: 'grouping-routes', link: '/src/grouping-routes' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zon-dev/zinc' }
    ]
  }
})
