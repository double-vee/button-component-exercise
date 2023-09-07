import styled from 'styled-components/macro';
import { COLORS } from './constants';

const SIZES = {
  small: {
    '--padding': '4px 12px',
    '--borderRadius': '2px',
    '--fontSize': `${16 / 16}rem`,
    '--letterSpacing': `${-0.32 / 16}rem`,
  },
  medium: {
    '--padding': '12px 20px',
    '--borderRadius': '2px',
    '--fontSize': `${18 / 16}rem`,
    '--letterSpacing': `${-0.36 / 16}rem`,
  },
  large: {
    '--padding': '16px 32px',
    '--borderRadius': '4px',
    '--fontSize': `${21 / 16}rem`,
    '--letterSpacing': `${-0.42 / 16}rem`,
  },
};

const Button = ({ variant, size, children }) => {
  const style = SIZES[size];

  let ButtonComponent;

  if (variant === 'fill') {
    ButtonComponent = FillButton;
  } else if (variant === 'outline') {
    ButtonComponent = OutlineButton;
  } else {
    ButtonComponent = GhostButton;
  }

  return <ButtonComponent style={style}>{children}</ButtonComponent>;
};

const BaseButton = styled.button`
  padding: var(--padding);
  border: 2px solid transparent;
  border-radius: var(--borderRadius);
  font-size: var(--fontSize);
  font-weight: 500;
  letter-spacing: var(--letterSpacing);
  text-transform: uppercase;

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 3px;
  }
`;

const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(BaseButton)`
  border: 2px solid currentColor;
  background-color: ${COLORS.white};
  color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: ${COLORS.gray};

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }

  &:focus {
    outline-color: ${COLORS.transparentGray75};
  }
`;

export default Button;
