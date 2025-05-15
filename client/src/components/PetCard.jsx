// src/components/PetCard.jsx
function PetCard({ pet }) {
  return (
    <div className="pet-card border p-4 rounded shadow">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{pet.name}</h3>
      <p>{pet.breed} • {pet.age} years</p>
      <p className="text-sm text-gray-600 mt-1">{pet.description}</p>
    </div>
  );
}

export default PetCard;
