/*
 * Fichier : src/components/Hero.jsx
 * Description : Composant React pour la section Héro de la landing page.
 * C'est la première section visible après l'en-tête, conçue pour capter l'attention
 * avec un titre accrocheur, une brève description et un appel à l'action principal (CTA).
 */

import React from 'react';

function Hero() {
  return (
    // La section Hero utilise les classes utilitaires pour le padding et le centrage.
    // 'py-section' pour un grand padding vertical, 'px-container' pour la largeur maximale
    // et 'text-center' pour centrer le contenu textuel.
    // Le fond sera gris clair pour un contraste doux avec le header.
    <section className="hero py-section px-container text-center" style={{ backgroundColor: 'var(--color-background-light-grey)' }}>
      {/*
        Titre principal (H1) : C'est le message clé, doit être percutant.
        Utilise une classe pour ajuster la taille de la police pour les grands écrans.
      */}
      <h1 className="hero__title">
        Automatisez vos tâches, gérez vos projets.
        <br />
        Tout en un, avec <span style={{ color: 'var(--color-primary)' }}>StreamLine</span>.
      </h1>

      {/*
        Description concise : Explique brièvement ce que StreamLine fait.
        La classe 'hero__description' permet des ajustements spécifiques (largeur max, marge).
      */}
      <p className="hero__description">
        Transformez la façon dont votre équipe collabore. De la gestion de projet à l'automatisation des workflows, StreamLine vous offre les outils pour une efficacité inégalée.
      </p>

      {/* Bouton d'appel à l'action principal (CTA) */}
      <div className="hero__cta">
        {/* Utilise notre classe de bouton primaire 'btn-primary' pour le style vert. */}
        <button className="btn btn-primary">Découvrir StreamLine</button>
      </div>
    </section>
  );
}

// Export du composant Hero
export default Hero;