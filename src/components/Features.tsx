
import { Package, Clock, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Wide Variety of Gadgets',
    description: 'Choose from our extensive collection of premium tech gadgets, from the latest MacBooks to professional cameras.'
  },
  {
    icon: Clock,
    title: 'Flexible Rental Duration',
    description: 'Rent for a day, week, or month. Adjust the duration based on your project needs.'
  },
  {
    icon: Truck,
    title: 'Quick Delivery',
    description: 'Same-day delivery available in select cities. Get your rented gadgets right when you need them.'
  },
  {
    icon: Shield,
    title: 'Damage Protection',
    description: 'All rentals come with basic damage protection. Optional premium coverage available.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose QuickRent?</h2>
          <p className="text-lg text-gray-600">Experience hassle-free gadget rentals with our premium service</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}