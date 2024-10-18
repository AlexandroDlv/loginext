"use client";

import { useEffect, useState } from 'react';
import '../styles/Component2.css'; 

const Component2 = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonData = async () => {
    try {
      const urls = [
        'https://pokeapi.co/api/v2/pokemon/1', 
        'https://pokeapi.co/api/v2/pokemon/4', 
        'https://pokeapi.co/api/v2/pokemon/7'  
      ];
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      setPokemonData(data);
    } catch (error) {
      setError('Error fetching Pokémon data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="component2">
      <h2>Información de Pokémon</h2>
      {pokemonData.length > 0 ? (
        pokemonData.map(pokemon => (
          <div className="pokemon-card" key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} className="pokemon-image" />
            <h3 className="pokemon-name">{pokemon.name}</h3>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No hay datos de Pokémon disponibles</p>
      )}
    </div>
  );
};

export default Component2;