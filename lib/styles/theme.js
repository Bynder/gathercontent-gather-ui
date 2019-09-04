const spacingBase = 20;

export default {
  colors: {
    white: '#FFFFFF',
    neutral: {
      dark: 'rgb(41, 51, 61)',
      base: 'rgb(133, 153, 173)',
      light: 'rgb(224, 229, 234)',
      lightest: 'rgb(249, 250, 251)'
    }
  },
  fonts: {
    sizes: {
      xlarge: '1.5rem',
      large: '1.25rem',
      lead: '1.125rem',
      base: '1rem',
      slight: '.875rem',
      small: '.75rem',
      micro: '.6875rem'
    },
    lineHeights: {
      base: '1.25rem',
      lead: '1.5rem'
    }
  },
  layout: {
    spacingQuadruple: spacingBase * 4,
    spacingDouble: spacingBase * 2,
    spacingBase,
    spacingHalf: spacingBase / 2,
    spacingQuarter: spacingBase / 4,
    spacingEighth: spacingBase / 4
  }
};
