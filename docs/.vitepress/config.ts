import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ingliz tili darsligi",
  description: "Xalilov Ibrohim",
  lang: 'uz',
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'author', content: 'Xalilov Ibrohim' }]
  ],
  themeConfig: {
    // siteTitle: false,
    nav: [
      { text: 'Bosh sahifa', link: '/' },
      { text: 'Darslar', link: '/guide/lesson-1' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'English Darsligi',
          items: [
            { text: 'Lesson 1: Greeting (Salom berish)', link: '/guide/lesson-1' },
            { text: 'Lesson 2', link: '/guide/lesson-2' },
            { text: 'Lesson 3', link: '/guide/lesson-3' },
            { text: 'Lesson 4', link: '/guide/lesson-4' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aliendevuz/english' }
    ],

    footer: {
      message: 'Xalilov Ibrohim tomonidan yozilgan',
      copyright: 'Copyright © 2024-2026'
    }
  }
})
