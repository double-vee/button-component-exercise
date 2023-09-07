import styled from 'styled-components/macro';
import { COLORS } from './constants';

const SIZES = {
  small: {
    padding: '4px 12px',
    borderRadius: 2,
    fontSize: `${16 / 16}rem`,
    letterSpacing: `${-0.32 / 16}rem`,
  },
  medium: {
    padding: '12px 20px',
    borderRadius: 2,
    fontSize: `${18 / 16}rem`,
    letterSpacing: `${-0.36 / 16}rem`,
  },
  large: {
    padding: '16px 32px',
    borderRadius: 4,
    fontSize: `${21 / 16}rem`,
    letterSpacing: `${-0.42 / 16}rem`,
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
  border: 2px solid transparent;
  font-weight: 500;
  text-transform: uppercase;
`;

const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;

const OutlineButton = styled(BaseButton)`
  border: 2px solid currentColor;
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
`;

const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: ${COLORS.gray};
`;

export default Button;
