/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, ChooseImg } from './styles';
import { Button } from '../../styles/button';
import camera from '../../assets/camera.svg';

export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', Number(price));
    await api
      .post('/spots', data, {
        headers: { user_id: localStorage.getItem('user') },
      })
      .then(() => {
        toast.success('spot cadastrado com sucesso');
        history.push('/main');
      })
      .catch(err => {
        toast.error(`falha ao cadastrar spot: ${err}`);
      });
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <ChooseImg
            style={{ backgroundImage: `url(${preview})`, border: preview ? 0 : '1px dashed #ddd' }}
          >
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
            <img
              src={camera}
              alt="selecione uma imaem"
              style={{ display: preview ? 'none' : 'blok' }}
            />
          </ChooseImg>
          <label htmlFor="companay">EMPRESA *</label>
          <input
            placeholder="Sua empresa incrível"
            required
            type="text"
            id="company"
            value={company}
            onChange={txt => setCompany(txt.target.value)}
          />
          <label htmlFor="techs">
            TECNOLÓGIAS * <span>(separadas por virgula)</span>{' '}
          </label>
          <input
            placeholder="Quais tecnológias usam"
            required
            type="text"
            id="techs"
            value={techs}
            onChange={txt => setTechs(txt.target.value)}
          />
          <label htmlFor="price">
            VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>{' '}
          </label>
          <input
            placeholder="Valor cobrado por dia"
            required
            type="text"
            id="price"
            value={price}
            onChange={txt => setPrice(txt.target.value)}
          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </Container>
  );
}
