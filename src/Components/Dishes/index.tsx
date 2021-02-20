import React from 'react';
import illustration from '../../assets/Illustration.svg';
import { Container, Info, Main } from './styles'

function Dishes({ Title, Image }) {
  return (
    <>
    <Main>
      <Container>
            <img src={Image} />
            <Info>
              <h3>{Title}</h3>
              <button>See Recipe</button>
            </Info>
      </Container>
    </Main>
    </>
  );
}

export default Dishes;
