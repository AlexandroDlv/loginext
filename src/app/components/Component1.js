"use client";

import { useEffect, useState } from 'react';
import "../styles/styles.css"; 

const Component1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Precion del Bitcoin</h2>
      {data ? (
        <div>
          <p>USD: {data.bpi.USD.rate}</p>
          <p>GBP: {data.bpi.GBP.rate}</p>
          <p>EUR: {data.bpi.EUR.rate}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Component1;