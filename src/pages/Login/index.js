/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropType from 'prop-types';

import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container } from './styles';
import { Button } from '../../styles/button';
import logo from '../../assets/logo.svg';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});

  async function handlesubmit(e) {
    e.preventDefault();

    await api
      .post('/sessions', {
        email,
      })
      .then(res => {
        setUser(res.data);
        toast.success('cadastrado com sucesso');
      })
      .catch(err => {
        toast.error(`erro ao se cadastrar: ${err}`);
      });
    history.push('/main', { user });
  }
  return (
    <Container>
      <img src={logo} alt="" />
      <div>
        <p>
          Ofereça <strong>spots</strong> para progamadores e encontre novos talentos
        </p>

        <form onSubmit={handlesubmit}>
          <label htmlFor="email">E_MAIL *</label>
          <input
            type="text"
            id="email"
            placeholder="Seu melhor e-mail"
            onChange={txt => setEmail(txt.target.value)}
          />
          <Button type="submit">ENTRAR</Button>
        </form>
      </div>
    </Container>
  );
}

Login.propTypes = {
  history: PropType.shape({
    push: PropType.func.isRequired,
  }).isRequired,
};

export default Login;
