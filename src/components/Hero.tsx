
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rent Premium Gadgets Without Breaking the Bank
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access the latest tech without the commitment. From laptops to cameras, gaming consoles to drones - rent what you need, when you need it.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2">
              <span>Explore Rentals</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Tech devices"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}