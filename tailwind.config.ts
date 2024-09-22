import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        apricot: '#fdd5b1',
        bitOfSugar: 'rgb(244,242,236)',
        blackBean: '#282222',
        bloodorange: '#fe4b03',
        coconut: '#fefefe',
        grapefruit: '#fd5956',
        herring: 'rgb(108,120,119)',
        jasmineRice: '#f1eeec',
        licorice: '#1A1110',
        oyster: 'rgb(187, 179, 178)',
        peachPuff: 'rgb(255, 218, 185)',
        silverChalice: '#aaaaaa',
        smashedPumpkin: '#ff6d3a',
        stainless: '#d4d4d8',
        tangerine: '#f28500',
        tilapiaScale: 'rgb(164,180,182)',
        wildWatermelon: '#FD5B78',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
export default config;
