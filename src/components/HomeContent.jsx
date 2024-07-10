// src/components/HomeContent.jsx


import axios from 'axios';
import { useState, useEffect } from 'react';

const HomeContent = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement des données !', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10">Les drapeaux du monde avec leur nom</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map(country => (
          <li key={country.cca3} className="border rounded-lg p-4 flex flex-col items-center hover:scale-150">
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-32 h-20 object-cover mb-2" />
            <span className="text-lg font-medium">{country.name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeContent;
