import React from 'react';
import { Check, ListPlus } from 'lucide-react';
import RentModal from '../features/rental/RentModal';
import ListItemModal from '../features/listing/ListItemModal';
import useModal from '../hooks/useModal';

const gadgets = [
  {
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pricePerDay: 29,
    features: ['MacBook Pro M1', 'Dell XPS', 'ThinkPad X1', 'Gaming Laptops']
  },
  {
    name: 'Cameras',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pricePerDay: 39,
    features: ['Sony Alpha', 'Canon EOS R', 'Nikon Z6', 'Video Cameras']
  },
  {
    name: 'Gaming',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    pricePerDay: 19,
    features: ['PS5', 'Xbox Series X', 'Nintendo Switch', 'VR Headsets']
  }
];

export default function GadgetListing() {
  const rentModal = useModal();
  const listItemModal = useModal();
  const [selectedGadget, setSelectedGadget] = React.useState(gadgets[0]);

  const handleRentClick = (gadget: typeof gadgets[0]) => {
    setSelectedGadget(gadget);
    rentModal.open();
  };

  return (
    <section id="gadgets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Gadgets</h2>
          <p className="text-lg text-gray-600">Browse our collection of premium rentable gadgets</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gadgets.map((gadget, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={gadget.image} alt={gadget.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{gadget.name}</h3>
                <p className="text-2xl font-bold text-indigo-600 mb-4">
                  ${gadget.pricePerDay}<span className="text-sm text-gray-600">/day</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {gadget.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleRentClick(gadget)}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={listItemModal.open}
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition"
          >
            <ListPlus className="h-5 w-5" />
            <span>List Your Gadget for Rent</span>
          </button>
        </div>
      </div>

      <RentModal
        isOpen={rentModal.isOpen}
        onClose={rentModal.close}
        gadget={selectedGadget}
      />
      
      <ListItemModal
        isOpen={listItemModal.isOpen}
        onClose={listItemModal.close}
      />
    </section>
  );
}