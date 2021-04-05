const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Ubuntu', 'ui-sans-serif', 'system-ui'],
      'serif': ['Roboto Slab', 'ui-serif', 'Georgia'],
      'mono': ['Ubuntu Mono', 'ui-monospace', 'SFMono-Regular'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'p': { fontSize: theme('fontSize.base') },
      })
    })
  ],
}
