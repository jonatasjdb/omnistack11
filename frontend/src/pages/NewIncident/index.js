import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import logoImg from "../../assets/logo.svg";
import './styles.css';
import api from '../../services/api';

export default function NewIncident(){
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [value,setValue] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    }

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      alert('Incidente cadastrado com sucesso!');
      history.push('/profiles');
    }catch(error){
      alert('Erro ao cadastrar, tente novamente.')
    }
    
  }

  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>

          <Link className="back-link" to="/profiles">
          <FiArrowLeft size="18" color="#E02041" />
          Voltar para home
        </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
          placeholder="Título do caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <textarea 
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
          <input 
          placeholder="Valor em reais"
          value={value}
          onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}