/*
 * Fichier : src/components/Features.jsx
 * Description : Composant React pour la section des fonctionnalités de la landing page.
 * Présente les avantages clés de StreamLine à travers une grille de 3 fonctionnalités,
 * chacune avec une icône, un titre et une description.
 * Utilise un tableau de données pour générer dynamiquement les cartes de fonctionnalités.
 */

import React from 'react';
// Importe les icônes spécifiques de Feather Icons nécessaires pour les fonctionnalités.
// Chaque icône est un composant React.
import { FiTarget, FiZap, FiCheckSquare } from 'react-icons/fi';

// Tableau de données qui contient les informations pour chaque fonctionnalité.
// Utiliser un tableau rend le composant plus flexible et facile à maintenir :
// pour ajouter, modifier ou supprimer une fonctionnalité, il suffit de modifier ce tableau.
const featuresData = [
  {
    icon: FiTarget, // Référence au composant icône (pas une chaîne de caractères)
    title: 'Gestion de Projet Intuitive',
    description: 'Organisez vos tâches, suivez les progrès et gérez les équipes avec une interface simple et puissante.',
  },
  {
    icon: FiZap, // Icône pour l'automatisation
    title: 'Automatisation Intelligente',
    description: 'Automatisez les workflows répétitifs et gagnez un temps précieux. Moins de travail manuel, plus d\'efficacité.',
  },
  {
    icon: FiCheckSquare, // Icône pour le suivi
    title: 'Suivi des Tâches Avancé',
    description: 'Ne manquez jamais une échéance. Gardez un œil sur chaque tâche, attribuez des responsabilités et respectez les délais.',
  },
];

function Features() {
  return (
    // La section des fonctionnalités.
    // 'py-section' pour le padding vertical, 'px-container' pour la largeur max.
    // Le fond sera blanc pour alterner avec la section Hero.
    <section id="features" className="features py-section px-container">
      {/* Titre de la section */}
      <h2 className="features__main-title text-center">
        Une plateforme conçue pour votre productivité.
      </h2>

      {/* Description générale de la section */}
      <p className="features__main-description text-center">
        StreamLine offre une suite complète d'outils pour transformer votre manière de travailler.
      </p>

      {/*
        Grille des fonctionnalités :
        'features__grid' définit une grille CSS (nous la styliserons dans index.css).
        'flex flex-wrap justify-center' est une approche fallback/mobile-first pour assurer la réactivité.
      */}
      <div className="features__grid">
        {/*
          Utilisation de la méthode map() pour générer dynamiquement les cartes de fonctionnalités.
          Pour chaque 'feature' (objet) dans le tableau 'featuresData', nous retournons un élément JSX.
          La prop 'key' est TRÈS importante en React lors de l'affichage de listes.
          Elle aide React à identifier quels éléments ont changé, sont ajoutés ou supprimés,
          ce qui optimise les performances et évite les bugs. Ici, 'feature.title' est utilisé
          comme clé unique car nos titres sont distincts.
        */}
        {featuresData.map((feature) => (
          // Chaque carte de fonctionnalité
          <div key={feature.title} className="feature-card">
            {/* Icône de la fonctionnalité */}
            <div className="feature-card__icon">
              {/* Le composant icône est rendu directement. 'size' et 'color' sont des props de react-icons. */}
              <feature.icon size={40} color="var(--color-primary)" />
            </div>
            {/* Titre de la fonctionnalité */}
            <h3 className="feature-card__title">{feature.title}</h3>
            {/* Description de la fonctionnalité */}
            <p className="feature-card__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export du composant Features
export default Features;