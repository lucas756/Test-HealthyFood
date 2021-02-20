import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Inputs } from './styles'
import { MdMail } from 'react-icons/md'
import { Input, Form } from '@rocketseat/unform';
import Cep from 'cep-promise'



function SignUp() {
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const buscarCep = async (event) => {
    let cep = event.target.value;

    if (cep.length === 8) {
      await Cep(cep)
        .then((data) => {
          setNeighborhood(data.neighborhood)
          setStreet(data.street)
        })
        .catch((err) => {
          setNeighborhood('')
          setStreet('')
          alert(err.errors[0].message)
        })
    }

  }

  const handleSubmit = async function handle(form) {
    localStorage.setItem("formCadastro", JSON.stringify(form));
    document.cookie = "username=" + form.name;    
  }

  return (
    <Container>
      <Inputs>
        <h1>CADASTRE - SE</h1>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nome" required/>
          <Input type="date" name="Data" placeholder="Data de Nascimento" required/>
          <Input type="text" name="Cpf" placeholder="CPF" required/>
          <Input type="text" name="Cep" placeholder="CEP" onChange={buscarCep} required/>
          <Input type="text" name="Rua" placeholder="Rua" value={street} readOnly required/>
          <Input type="text" name="Bairro" className="bairro" placeholder="Bairro" value={neighborhood} readOnly required/>
          <button type="submit" ><MdMail /></button>
        </Form>
        <Link to="/">Já tem uma conta ? </Link>
      </Inputs>
    </Container>
  );
}

export default SignUp;
