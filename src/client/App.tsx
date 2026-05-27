import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrandiLaBruzzo from './pages/about/BrandiLaBruzzo';
import MarthaP from './pages/about/MarthaP';
import ChristyLenahan from './pages/about/ChristyLenahan';
import DrLenahan from './pages/about/DrLenahan';
import Benefits from './pages/membership/Benefits';
import Vendors from './pages/membership/Vendors';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <div className="font-sans bg-cream min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/brandi" element={<BrandiLaBruzzo />} />
          <Route path="/about/martha" element={<MarthaP />} />
          <Route path="/about/christy" element={<ChristyLenahan />} />
          <Route path="/about/dr-lenahan" element={<DrLenahan />} />
          <Route path="/membership/benefits" element={<Benefits />} />
          <Route path="/membership/vendors" element={<Vendors />} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
