import tailwindConfig from '../../../tailwind.config';

const { theme } = tailwindConfig;

const {
  extend: {
    colors: {
      neutral: {
        primary: neutralPrimary,
        80: neutral80,
        20: neutral20,
        90: neutral90
      },
      blue: { primary: primaryBlue, 90: blue90, 95: blue95 }
    }
  },
  boxShadow: { default: defaultBoxShadow }
} = theme;

const defaultStyles = {
  control: (provided, { isFocused }) => {
    const blueBoxShadow = `0 0 0 1px ${primaryBlue}`;
    const blueBorder = `1px solid ${primaryBlue}`;

    return {
      ...provided,
      boxShadow: isFocused ? blueBoxShadow : 'none',
      borderRadius: theme.borderRadius.DEFAULT,
      border: isFocused ? blueBorder : `1px solid ${neutral80}`,
      ':hover': {
        border: blueBorder,
        boxShadow: blueBoxShadow
      }
    };
  },

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: neutralPrimary
  }),

  placeholder: provided => ({
    ...provided,
    color: neutralPrimary
  }),

  option: (provided, { isSelected, isFocused }) => {
    const getBackgroundColor = () => {
      if (isSelected) {
        return blue90;
      }
      if (isFocused) {
        return blue95;
      }
      return 'white';
    };

    return {
      ...provided,
      color: neutral20,
      backgroundColor: getBackgroundColor()
    };
  },

  menu: provided => ({
    ...provided,
    borderRadius: theme.borderRadius.DEFAULT,
    border: `1px solid ${neutral90}`,
    boxShadow: defaultBoxShadow
  })
};

export { defaultStyles };
