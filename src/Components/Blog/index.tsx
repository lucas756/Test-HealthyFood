import React from 'react';
import { Main, Info } from './styles'

function Blog({ margin, image, text, name }) {
    
  return (
    <>
    <Main style={{ marginLeft: margin, marginRight: 50 }}>
      <img src={image} />
      <Info>
        <h3>{text}</h3>
        <p>{name}</p>
      </Info>
    </Main>
    </>
  );
}

export default Blog;
