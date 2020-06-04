import tailwindConfig from '../../tailwind.config';

const { theme } = tailwindConfig;

const {
  extend: {
    colors,
    colors: {
      neutral: { primary: neutralPrimary }
    }
  },
  boxShadow: { default: defaultBoxShadow }
} = theme;

const styles = {
  control: provided => ({
    ...provided,
    borderRadius: theme.borderRadius.default,
    border: `1px solid ${colors.neutral['80']}`
  }),
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
        return colors.blue['90'];
      }
      if (isFocused) {
        return colors.blue['95'];
      }
      return 'white';
    };

    return {
      ...provided,
      color: colors.neutral['20'],
      backgroundColor: getBackgroundColor()
    };
  },
  menu: provided => ({
    ...provided,
    borderRadius: theme.borderRadius.default,
    border: `1px solid ${colors.neutral['90']}`,
    boxShadow: defaultBoxShadow
  })
};

export { styles };
