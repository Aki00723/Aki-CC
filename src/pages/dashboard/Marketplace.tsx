import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { Button } from '../../components/Button';

interface Professional {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  price: number;
  image: string;
  expertise: string[];
}

const professionals: Professional[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Relationship Counselor",
    specialties: ["harmony", "reflection"],
    rating: 4.9,
    price: 120,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: ["Communication", "Emotional Support"]
  },
  {
    id: 2,
    name: "Mark Thompson",
    title: "Marriage Coach",
    specialties: ["action", "evaluation"],
    rating: 4.8,
    price: 95,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: ["Conflict Resolution", "Goal Setting"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Family Therapist",
    specialties: ["thoughtfulness", "steadfastness"],
    rating: 4.7,
    price: 150,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    expertise: ["Family Dynamics", "Long-term Planning"]
  }
];

const specialtyOptions = ["harmony", "reflection", "action", "evaluation", "thoughtfulness", "steadfastness"];
const priceRanges = ["$50-100", "$100-150", "$150+"];
const expertiseAreas = ["Communication", "Emotional Support", "Conflict Resolution", "Goal Setting", "Family Dynamics", "Long-term Planning"];

export function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialties = selectedSpecialties.length === 0 ||
      selectedSpecialties.some(specialty => professional.specialties.includes(specialty));
    
    const matchesExpertise = selectedExpertise.length === 0 ||
      selectedExpertise.some(exp => professional.expertise.includes(exp));
    
    const matchesPriceRange = !selectedPriceRange ||
      (selectedPriceRange === "$50-100" && professional.price < 100) ||
      (selectedPriceRange === "$100-150" && professional.price >= 100 && professional.price <= 150) ||
      (selectedPriceRange === "$150+" && professional.price > 150);

    return matchesSearch && matchesSpecialties && matchesExpertise && matchesPriceRange;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Professional Marketplace</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search professionals..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>

            <div>
              <h3 className="font-medium mb-2">Specialties</h3>
              <div className="space-y-2">
                {specialtyOptions.map(specialty => (
                  <label key={specialty} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSpecialties.includes(specialty)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedSpecialties([...selectedSpecialties, specialty]);
                        } else {
                          setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
                        }
                      }}
                      className="mr-2"
                    />
                    <span className="capitalize">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <label key={range} className="flex items-center">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPriceRange === range}
                      onChange={() => setSelectedPriceRange(range)}
                      className="mr-2"
                    />
                    {range}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Expertise</h3>
              <div className="space-y-2">
                {expertiseAreas.map(area => (
                  <label key={area} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedExpertise.includes(area)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedExpertise([...selectedExpertise, area]);
                        } else {
                          setSelectedExpertise(selectedExpertise.filter(a => a !== area));
                        }
                      }}
                      className="mr-2"
                    />
                    {area}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProfessionals.map(professional => (
              <div key={professional.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{professional.name}</h3>
                      <p className="text-gray-600">{professional.title}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{professional.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold">${professional.price}</span>
                      <span className="text-gray-500 text-sm">/hour</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {professional.expertise.map(exp => (
                        <span
                          key={exp}
                          className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-sm"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="w-full">Book Session</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}