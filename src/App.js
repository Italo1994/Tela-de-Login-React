import react from 'react';

import { Container } from './styles';
import { Login } from './pages/Login';
import { Image } from './components/Image';
import bannerImg from './assets/banner.png';

import { Input } from './components/Input';
import { Button } from './components/Button';

function App() {
  return (
    <Container>
      <Image src={bannerImg} />
      <Login />
    </Container>
  );
}

export default App;
