import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import SVGLogo from '../../../shared/components/icons/SVGHome';
import Input from '../../../shared/components/inputs/input/Input';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const { loading, authRequest } = useRequests();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    authRequest({
      email,
      password,
    });
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />

      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />

          <TitleLogin>LOGIN</TitleLogin>

          <Input
            title="USUÁRIO"
            margin="32px 0 0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            title="SENHA"
            type="password"
            margin="32px 0 0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            loading={loading}
            type="primary"
            margin="64px 0 16px"
            onClick={handleLogin}
          >
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
