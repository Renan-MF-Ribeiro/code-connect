import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#ededed',
        darkGray: '#171D1F',
        mediumGray: '#888888',
        lightGray: '#BCBCBC'
      },
      backgroundImage: {
        'my-gradient':
          'linear-gradient(90deg,rgba(14,17,18,1) 0%,rgba(0,9,14,1) 100%)'
      },
      dropShadow: {
        'custom-shadow': '0 16px 24px rgba(0, 0, 0, 0.24)'
      }
    }
  },
  plugins: []
}
export default config
