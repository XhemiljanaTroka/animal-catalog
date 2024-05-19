import React from 'react';

const AnimalCard = ({ animal, onClick }) => {
  return (
    <div className="animal-card" onClick={() => onClick(animal)}>
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <h3>{animal.name}</h3>
     {animal.origin && <p>Origin: {animal.origin}</p>}
    </div>
  );
};

export default AnimalCard;
