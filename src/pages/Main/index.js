/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Container, SpotList } from './styles';
import { Button } from '../../styles/button';

const logoEmpresa =
  'https://blog.rocketseat.com.br/content/images/2019/05/Painel.png';

const Title = 'AirCnC Natanaelvich | Projeto feito na Semana Omnistack';

export default function Main() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });
      setSpots(response.data);
    }

    loadSpots();
  }, []);
  return (
    <Container>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <img src={logo} alt="" />
      <div>
        <SpotList>
          {spots.map(spot => (
            <li key={String(spot._id)}>
              <header style={{ backgroundImage: `url(${logoEmpresa})` }} />
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</span>
            </li>
          ))}
        </SpotList>
        <Link to="/new">
          <Button type="button">CADASTRAR NOVO SPOT</Button>
        </Link>
      </div>
    </Container>
  );
}
