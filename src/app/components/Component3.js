"use client";

import { useEffect, useState } from 'react';
import "../styles/styles.css";

const Component3 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Imagen Aleatoria de un Perro</h2>
      {data ? (
        <img src={data.message} alt="Random Dog" className="dogImage" />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Component3;