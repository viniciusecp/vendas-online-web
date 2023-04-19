import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import SVGLogo from '../../../shared/icons/SVGHome';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        alert('Fez login');
        return result.data;
      })
      .catch(() => {
        alert('Usuário ou senha inválido');
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

          <Button type="primary" margin="64px 0 16px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
