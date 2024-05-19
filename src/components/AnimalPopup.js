import React from 'react';
import './AnimalPopup.css';

const AnimalPopup = ({ animal, onClose }) => {
  return (
    <div className="animal-popup-overlay" onClick={onClose}>
      <div className="animal-popup" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={animal.name} className="popup-image" />
        {animal.origin && <p><strong>Origin:</strong> {animal.origin}</p>}
        {animal.breed_group && <p><strong>Breed Group:</strong> {animal.breed_group}</p>}
        {animal.species && <p><strong>Species:</strong> {animal.species}</p>}
        {animal.family && <p><strong>Family:</strong> {animal.family}</p>}
        {animal.habitat && <p><strong>Habitat:</strong> {animal.habitat}</p>}
        {animal.place_of_found && <p><strong>Place of Found:</strong> {animal.place_of_found}</p>}
        {animal.diet && <p><strong>Diet:</strong> {animal.diet}</p>}
        {animal.lifespan && <p><strong>Lifespan:</strong> {animal.lifespan}</p>}
        {animal.weight_kg && <p><strong>Weight:</strong> {animal.weight_kg} kg</p>}
        {animal.height_cm && <p><strong>Height:</strong> {animal.height_cm} cm</p>}
        {animal.temperament && <p><strong>Temperament:</strong> {animal.temperament}</p>}
        {animal.colors && <p><strong>Colors:</strong> {animal.colors.join(', ')}</p>}
        <p><strong>Description: </strong>{animal.description}</p>
      </div>
    </div>
  );
};

export default AnimalPopup;
