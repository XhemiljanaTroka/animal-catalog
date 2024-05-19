import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import SearchBar from './SearchBar';
import AnimalPopup from './AnimalPopup';

const AnimalGallery = ({ type }) => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/${type}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setAnimals(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [type]);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <div className="animal-gallery">
        {filteredAnimals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} onClick={setSelectedAnimal} />
        ))}
      </div>
      {selectedAnimal && <AnimalPopup animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />}
    </div>
  );
};

export default AnimalGallery;
