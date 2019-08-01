import styled from 'styled-components';

export default styled.input`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.neutral.light};
  border-radius: 4px;
  text-overflow: ellipsis;
  line-height: ${props => props.theme.fonts.lineHeights.base};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  ${props =>
    props.paddingSmall
      ? `height: ${props.theme.layout.spacingBase +
          props.theme.layout.spacingBase / 2}px;`
      : ''}

  font-size: ${props =>
    props.paddingSmall
      ? props.theme.fonts.sizes.small
      : props.theme.fonts.sizes.base};
  
  padding: ${props =>
    props.paddingSmall
      ? `${props.theme.layout.spacingBase / 4}px ${props.theme.layout
          .spacingBase / 2}px`
      : `${props.theme.layout.spacingBase / 2}px`};

  color: ${props =>
    props.disabled
      ? props.theme.colors.neutral.light
      : props.theme.colors.neutral.dark};
`;
