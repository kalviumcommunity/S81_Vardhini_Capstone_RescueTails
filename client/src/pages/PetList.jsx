// src/pages/PetList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pets')
      .then(res => setPets(res.data))
      .catch(err => console.error("Failed to fetch pets:", err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Pets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pets.map(pet => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetList;
