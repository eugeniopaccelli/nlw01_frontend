import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import api from '../../services/api';

import './styles.css';


import logo from '../../assets/logo.svg';

interface Item {
  id: number;
  title:string;
  image_url: string
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(()=> {
    api.get('items').then(response => {
     setItems(response.data)
    })
  },[]);

  return (
    <div id="page-create-point">
     <header>
        <img src={logo} alt="E-Coleta"/>
        <Link to="/">
          <FiArrowLeft /> 
          Voltar para home
        </Link>
     </header>
     <form>
      <h1>Cadastro do <br /> Ponto de Coleta</h1>

      <fieldset>
        <legend>
          <h2>Dados</h2>
        </legend>

        <div className="field">
          <label htmlFor="name">Nome da Entidade</label>
          <input 
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="field-group">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="field">
          <label htmlFor="whatsapp">Whatsapp</label>
          <input 
            type="text"
            name="whatsapp"
            id="whatsapp"
          />
        </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Endereço</h2>
          <span>Selecione o endereço no mapa</span>
        </legend>
        <Map center={[-5.0977939, -42.7955175]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-5.0977939, -42.7955175]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        </Map>
        <div className="field-group">
          
          <div className="field">
            <label htmlFor="state">Estado</label>
            <select name="state" id="state">
              <option value="0">Selecione o Estado</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city">
              <option value="0">Selecione a cidade</option>
            </select>
          </div>

        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>itens de Coleta</h2>
          <span>Selecione um ou mais itens abaixo</span>
        </legend>
        <ul className="items-grid">
          {items.map(item => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.title} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </fieldset>
      <button type="submit">Cadastrar ponto de coleta</button>
     </form>
    </div>
  );
}

export default CreatePoint;