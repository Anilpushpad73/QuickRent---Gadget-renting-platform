
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GadgetListing from './components/GadgetListing';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <GadgetListing />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;