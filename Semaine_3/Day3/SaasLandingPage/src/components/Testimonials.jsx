/*
 * Fichier : src/components/Testimonials.jsx
 * Description : Composant React pour la section des témoignages de la landing page.
 * Affiche des citations de clients satisfaits pour renforcer la confiance.
 * Utilise un tableau de données pour générer dynamiquement les cartes de témoignages.
 */

import React from 'react';
// Nous n'avons pas besoin d'icônes spécifiques pour ce composant, donc pas d'import de react-icons ici.

// Tableau de données pour les témoignages.
// Chaque objet contient le texte du témoignage, le nom de l'auteur et sa position/entreprise.
const testimonialsData = [
  {
    quote: "StreamLine a révolutionné notre gestion de projet. Nos équipes sont plus synchronisées et la productivité a grimpé en flèche. Un outil indispensable pour toute startup !",
    author: "Sophie Dubois",
    position: "CEO, InnovTech Solutions",
  },
  {
    quote: "L'automatisation des tâches avec StreamLine nous a fait gagner un temps fou. C'est simple à utiliser et incroyablement efficace. Je le recommande vivement !",
    author: "Marc Lefevre",
    position: "Chef de Projet, Agence Digitale XYZ",
  },
];

function Testimonials() {
  return (
    // La section des témoignages.
    // 'py-section' et 'px-container' sont nos utilitaires habituels.
    // Le fond sera gris clair pour alterner avec la section Features (qui est blanche).
    <section id="testimonials" className="testimonials py-section px-container" style={{ backgroundColor: 'var(--color-background-light-grey)' }}>
      {/* Titre principal de la section */}
      <h2 className="testimonials__main-title text-center">
        Ils nous font confiance et témoignent de leur succès.
      </h2>

      {/* Description générale de la section */}
      <p className="testimonials__main-description text-center">
        Découvrez ce que nos clients disent de StreamLine et de son impact sur leur productivité.
      </p>

      {/* Conteneur de la grille des témoignages */}
      {/* Utilise flexbox pour aligner les cartes, avec un wrap pour la réactivité. */}
      <div className="testimonials__grid flex flex-wrap justify-center">
        {/*
          Génère dynamiquement les cartes de témoignages à partir du tableau testimonialsData.
          N'oublie pas la prop 'key' pour les éléments de liste. Ici, le nom de l'auteur
          combiné à un index (si plusieurs auteurs ont le même nom) pourrait être une clé unique,
          mais pour la simplicité avec seulement 2 témoignages, le nom de l'auteur suffira.
        */}
        {testimonialsData.map((testimonial, index) => (
          <div key={testimonial.author + index} className="testimonial-card">
            {/* Le texte du témoignage */}
            <p className="testimonial-card__quote">"{testimonial.quote}"</p>
            {/* La signature de l'auteur */}
            <p className="testimonial-card__author">— {testimonial.author}</p>
            {/* La position/entreprise de l'auteur */}
            <p className="testimonial-card__position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export du composant Testimonials
export default Testimonials;