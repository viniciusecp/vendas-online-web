import { ButtonProps as ButtonPropsAntd } from 'antd';

import { ButtonAntd } from './button.styles';

interface ButtonProps extends ButtonPropsAntd {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonProps) => {
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
