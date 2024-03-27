import React from 'react';
import '../src/app.css';
import PersonalInfo from './components/PersonalInfo';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'rgb(15, 23, 42)', my: 0, py: 0 }}
      >
        <PersonalInfo />
      </Container>
    </>
  );
}

export default App;
