/*
 * Fichier : src/App.jsx
 * Description : Composant principal de l'application StreamLine.
 * Il importe les styles globaux et assemble tous les composants
 * des différentes sections de la landing page.
 * C'est le point d'entrée visuel de notre application React.
 */

import './index.css'; // Importe le fichier CSS global

// Importe tous les composants de la page
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact'; // <-- AJOUT DE L'IMPORTATION DU COMPOSANT CONTACT
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />

      <main>
        {/* Tous les composants de section sont assemblés ici dans l'ordre */}
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        
        {/*
          La section Contact est maintenant placée ici,
          juste après Pricing et avant le FinalCTA.
        */}
        <Contact />

        <FinalCTA />
      </main>

      {/* Le composant Footer est le dernier élément de la page. */}
      <Footer />
    </>
  );
}

export default App;