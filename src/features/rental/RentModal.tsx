import  { useState } from 'react';
import { Calendar, Clock, X } from 'lucide-react';

interface RentModalProps {
  isOpen: boolean;
  onClose: () => void;
  gadget: {
    name: string;
    pricePerDay: number;
    image: string;
  };
}

export default function RentModal({ isOpen, onClose, gadget }: RentModalProps) {
  const [startDate, setStartDate] = useState('');
  const [duration, setDuration] = useState(1);

  if (!isOpen) return null;

  const total = gadget.pricePerDay * duration;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Rent {gadget.name}</h2>

        <div className="mb-6">
          <img
            src={gadget.image}
            alt={gadget.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (days)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Price per day</span>
              <span className="font-medium">${gadget.pricePerDay}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">{duration} days</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-bold">${total}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Confirm Rental
          </button>
        </form>
      </div>
    </div>
  );
}