import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AnimalGallery from '../components/AnimalGallery';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  const [selectedType, setSelectedType] = useState('dogs');

  return (
    <div>
      <Navbar onSelectType={setSelectedType} />
      <AnimalGallery type={selectedType} />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
