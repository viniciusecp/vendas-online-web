import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(password);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./background.png" />

          <TitleLogin>LOGIN</TitleLogin>

          <Input
            title="USUÁRIO"
            margin="32px 0 0"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            title="SENHA"
            type="password"
            margin="32px 0 0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="primary" margin="64px 0 16px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
