import Pokedex from './Pokedex';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayPokemon from './components/DisplayPokemon';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState([]);

  const getPokemon = ()=>{
    axios.get('http://pokeapi.co/api/v2/pokemon')
    .then((response)=>{
      console.log(response);
      setPokemon(response.data.results);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const getCatRandomFact = () => {
    axios.get('https://cat-fact.herokuapp.com/facts')
    .then(response => setData(response.data));
  };

  useEffect(()=>{
    getPokemon();
    getCatRandomFact();
  }, []);
  
  return (
    <div className="APP">
      <div>
        <h1>Pokedex</h1>
        <DisplayPokemon pokemon={pokemon}/>
      </div>

      <div>
        <h1>Random cat facts</h1>
        { data.map( i => {
          return (
            <p>{i.text}</p>
          );
          }
        )}
      </div>
    </div>
  );
}

export default App;
