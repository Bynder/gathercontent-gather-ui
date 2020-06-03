const blue30 = '#004299';
const blue80 = '#99C5FF';
const bluePrimary = '#006EFF';

const red30 = '#8A0F1A';
const red80 = '#F5A3AA';
const redPrimary = '#E51A2B';

const neutral20 = '#29333D';
const neutral80 = '#C2CCD6';
const neutral90 = '#E1E6EB';

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['IBM Plex Sans', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif']
    },
    fontWeight: {
      roman: 400,
      'semi-bold': 500,
      bold: 600
    },
    borderRadius: {
      default: '6px',
      small: '4px',
      full: '100%',
      none: 0
    },
    boxShadow: {
      small: '0px 2px 4px rgba(0, 0, 0, 0.06)',
      default: '0px 3px 6px rgba(0, 0, 0, 0.06)',
      large: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      xlarge: '0px 15px 30px rgba(0, 0, 0, 0.2)',

      'blue-focus-sm': `0px 0px 0px 3px ${blue80}`,

      'button-primary-hover': `0px 0px 0px 1px ${bluePrimary}`,
      'button-primary-active': `0px 0px 0px 1px ${blue30}`,
      'button-primary-focus': `0px 0px 0px 1px white, 0px 0px 0px 3px ${blue80}`,

      'button-primary-danger-hover': `0px 0px 0px 1px ${redPrimary}`,
      'button-primary-danger-active': `0px 0px 0px 1px ${red30}`,
      'button-primary-danger-focus': `0px 0px 0px 1px white, 0px 0px 0px 3px ${red80}`,

      'button-secondary-focus': `0px 0px 0px 3px ${blue80}`,

      'button-tertiary-focus': `0px 0px 0px 1px ${neutral20}, 0px 0px 0px 3px ${neutral80}`,
      'button-tertiary-danger-focus': `0px 0px 0px 1px ${redPrimary}, 0px 0px 0px 3px ${red80}`,

      'button-icon-focus': `0px 0px 0px 1px ${bluePrimary}, 0px 0px 0px 3px ${blue80}`,
      'button-icon-danger-focus': `0px 0px 0px 1px ${redPrimary}, 0px 0px 0px 3px ${red80}`,
      'button-icon-bubble-focus': `0px 0px 0px 3px ${blue80}`,
      none: 'none'
    },
    extend: {
      colors: {
        current: 'currentColor',
        blue: {
          '98': '#F5F9FF',
          '95': '#E6F1FF',
          '90': '#CCE2FF',
          '80': blue80,
          '70': '#66A8FF',
          '60': '#338BFF',
          primary: bluePrimary,
          '40': '#0058CC',
          '30': blue30,
          '20': '#002C66'
        },
        red: {
          '98': '#FFF6F5',
          '95': '#FCE8EA',
          '90': '#FFD0CC',
          '80': red80,
          '70': '#F07580',
          '60': '#EB4755',
          primary: redPrimary,
          '40': '#B81422',
          '30': red30,
          '20': '#5C0A11'
        },
        green: {
          '98': '#F7FDF7',
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
          '98': '#F9F6FE',
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
          '90': neutral90,
          '80': neutral80,
          '70': '#A4B3C2',
          '60': '#8599AD',
          primary: '#678099',
          '40': '#52667A',
          '30': '#3E4D5C',
          '20': neutral20
        }
      },
      transitionTimingFunction: {
        'animation-curve': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }
    },
    maxHeight: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': ' 2.5rem',
      '12': ' 3rem',
      '16': ' 4rem',
      '20': ' 5rem',
      '24': ' 6rem',
      '30': ' 7.5rem',
      '32': ' 8rem',
      '40': ' 10rem',
      '48': ' 12rem',
      '56': ' 14rem',
      '64': ' 16rem',
      '128': ' 32rem',
      auto: 'auto',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': ' 2.5rem',
      '12': ' 3rem',
      '16': ' 4rem',
      '20': ' 5rem',
      '24': ' 6rem',
      '32': ' 8rem',
      '40': ' 10rem',
      '48': ' 12rem',
      '56': ' 14rem',
      '64': ' 16rem',
      '128': ' 32rem',
      auto: 'auto',
      full: '100%',
      screen: '100vh'
    },
    gradients: {
      'blur-white-bottom': [
        'rgba(255, 255, 255, 0) 0%',
        'rgba(253, 253, 253, 0.5) 50%',
        '#fff 100%'
      ],
      'blur-grey-bottom': [
        'rgba(255, 255, 255, 0) 0%',
        'rgba(253, 253, 253, 0.5) 50%',
        '#f0f2f5 100%'
      ],
      'blur-white-right': [
        'to right',
        'rgba(255,255,255,0) 0%',
        'rgba(255,255,255,1) 100%'
      ],
      'blur-grey-90-right': [
        'to right',
        'rgba(255,255,255,0) 0%',
        '#E1E6EB 100%'
      ],
      'blur-grey-95-right': [
        'to right',
        'rgba(255,255,255,0) 0%',
        '#F0F2F5 100%'
      ]
    }
  },
  variants: {
    padding: ['responsive', 'last'],
    gradients: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'last'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    opacity: ['responsive', 'group-hover', 'hover', 'focus'],
    zIndex: ['responsive', 'hover', 'focus', 'active'],
    textDecoration: ['responsive', 'hover', 'focus', 'active'],
    display: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus']
  },
  plugins: [require('tailwindcss-plugins/gradients')],
  corePlugins: {
    preflight: false,
    container: false
  }
};
