import React, { ReactElement } from 'react';
import { LoginForm , About, Container, Fade} from '@namespace/components';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Fade />
      <Container>
        <About />
        <LoginForm />
      </Container>
    </div>
  );
};

export default App;
