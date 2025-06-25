/*
 * Fichier : src/components/FinalCTA.jsx
 * Description : Composant React pour la section finale d'appel à l'action (Call To Action).
 * C'est le dernier point d'incitation à l'action avant le pied de page,
 * encourageant les utilisateurs à s'inscrire ou à en savoir plus.
 */

import React from 'react';

function FinalCTA() {
  return (
    // La section FinalCTA.
    // Utilise nos classes utilitaires pour le padding et la largeur maximale.
    // Le fond sera gris clair pour alterner avec la section Pricing (qui est blanche).
    <section className="final-cta py-section px-container text-center" style={{ backgroundColor: 'var(--color-background-light-grey)' }}>
      {/* Titre principal de la section CTA */}
      <h2 className="final-cta__title">
        Prêt à transformer votre productivité ?
      </h2>

      {/* Description encourageante */}
      <p className="final-cta__description">
        Rejoignez les milliers d'équipes qui simplifient déjà leurs workflows avec StreamLine.
      </p>

      {/* Bouton d'appel à l'action final */}
      <div className="final-cta__button-wrapper">
        {/* Le bouton utilise la classe 'btn-primary' pour être bien visible. */}
        <button className="btn btn-primary">Commencer l'essai gratuit</button>
      </div>
    </section>
  );
}

// Export du composant FinalCTA
export default FinalCTA;