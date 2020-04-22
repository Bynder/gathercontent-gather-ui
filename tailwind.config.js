module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['IBM Plex Sans', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif'],
    },
    fontWeight: {
      roman: 400,
      'semi-bold': 500,
      bold: 600
    },
    borderRadius: {
      default: '6px',
    },
    boxShadow: {
      small: '0px 2px 4px rgba(0, 0, 0, 0.06)',
      default: '0px 3px 6px rgba(0, 0, 0, 0.06)',
      large: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      xlarge: '0px 15px 30px rgba(0, 0, 0, 0.2)',
    },
    extend: {
      colors: {
        current: 'currentColor',
        blue: {
          '95': '#E6F1FF',
          '90': '#CCE2FF',
          '80': '#99C5FF',
          '70': '#66A8FF',
          '60': '#338BFF',
          primary: '#006EFF',
          '40': '#0058CC',
          '30': '#004299',
          '20': '#002C66'
        },
        red: {
          '95': '#FFE8E6',
          '90': '#FFD0CC',
          '80': '#F5A3AA',
          '70': '#F07580',
          '60': '#EB4755',
          primary: '#E51A2B',
          '40': '#B81422',
          '30': '#8A0F1A',
          '20': '#5C0A11'
        },
        green: {
          '95': '#EBF9EB',
          '90': '#D7F4D7',
          '80': '#B0E8B0',
          '70': '#88DD88',
          '60': '#61D161',
          primary: '#39C639',
          '40': '#2E9E2E',
          '30': '#227722',
          '20': '#174F17'
        },
        yellow: {
          '95': '#FEFAE6',
          '90': '#FEF6CD',
          '80': '#FCEC9C',
          '70': '#FBE36A',
          '60': '#FADA38',
          primary: '#F9D006',
          '40': '#C7A705',
          '30': '#957D04',
          '20': '#635303'
        },
        purple: {
          '95': '#F1E8FC',
          '90': '#E2D1FA',
          '80': '#C5A3F5',
          '70': '#A875F0',
          '60': '#8B47EB',
          primary: '#6E19E6',
          '40': '#5814B8',
          '30': '#420F8A',
          '20': '#2C0A5C'
        },
        neutral: {
          '98': '#F9FAFB',
          '95': '#F0F2F5',
          '90': '#E1E6EB',
          '80': '#C2CCD6',
          '70': '#A4B3C2',
          '60': '#8599AD',
          primary: '#678099',
          '40': '#52667A',
          '30': '#3E4D5C',
          '20': '#29333D'
        }
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
    container: false
  }
}
