import react from 'react';
import { Container, Content, Row } from './styles';

import { Input } from './components/Input';
import { Button } from './components/Button';

function App() {
  return (
    <Container>
      <Content>
        <Row>
          <h1>Login</h1>
        </Row>
        <Row>
          <Input type="text" placeholder="Usuário" />
        </Row>
        <Row>
          <Input type="password" placeholder="Senha" />
        </Row>
        <Row>
          <Button name="Entrar" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
