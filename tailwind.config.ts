import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#ededed',
        darkGray: '#171D1F'
      },
      backgroundImage: {
        'my-gradient':
          'linear-gradient(90deg,rgba(14,17,18,1) 0%,rgba(0,9,14,1) 100%)'
      }
    }
  },
  plugins: []
}
export default config
