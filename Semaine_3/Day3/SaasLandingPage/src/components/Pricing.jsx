/*
 * Fichier : src/components/Pricing.jsx
 * Description : Composant React pour la section des plans tarifaires de la landing page.
 * Affiche différentes options d'abonnement pour StreamLine, avec une mise en avant
 * particulière pour le plan "Pro" recommandé.
 * Utilise un tableau de données pour générer dynamiquement les cartes de prix.
 */

import React from 'react';
import { FiCheck } from 'react-icons/fi'; // Icône de coche pour les fonctionnalités incluses

// Tableau de données pour les plans tarifaires.
// Chaque objet représente un plan avec son nom, prix, fréquence, description et fonctionnalités.
const pricingData = [
  {
    name: 'Basique',
    price: '9',
    frequency: '/mois',
    description: 'Idéal pour les petites équipes et les débutants.',
    features: [
      'Jusqu\'à 5 utilisateurs',
      'Gestion de tâches',
      'Support par email',
      '5 Go de stockage',
    ],
    isFeatured: false, // Ce plan n'est pas mis en avant
  },
  {
    name: 'Pro',
    price: '29',
    frequency: '/mois',
    description: 'Le choix parfait pour les équipes en croissance.',
    features: [
      'Utilisateurs illimités',
      'Automatisation de workflows',
      'Support prioritaire 24/7',
      '50 Go de stockage',
      'Intégrations avancées',
    ],
    isFeatured: true, // Ce plan est le "recommandé", il aura une mise en avant visuelle
  },
  {
    name: 'Entreprise',
    price: '99',
    frequency: '/mois',
    description: 'Des solutions sur mesure pour les grandes entreprises.',
    features: [
      'Toutes les fonctionnalités Pro',
      'Support dédié avec SLA',
      'Sécurité avancée',
      'Formation personnalisée',
    ],
    isFeatured: false, // Ce plan n'est pas mis en avant
  },
];

function Pricing() {
  return (
    // Section Pricing, avec nos classes utilitaires pour le padding et la largeur.
    // Le fond sera blanc pour alterner avec la section précédente.
    <section id="pricing" className="pricing py-section px-container">
      {/* Titre principal de la section */}
      <h2 className="pricing__main-title text-center">
        Un plan pour chaque équipe,
        <br />
        quelle que soit votre taille.
      </h2>

      {/* Description générale */}
      <p className="pricing__main-description text-center">
        Découvrez nos options tarifaires flexibles et trouvez le plan qui correspond le mieux à vos besoins.
      </p>

      {/*
        Conteneur de la grille des plans tarifaires.
        Utilise flexbox pour l'alignement et le wrap, avec un gap.
      */}
      <div className="pricing__grid flex flex-wrap justify-center">
        {/*
          Génère dynamiquement les cartes de prix à partir du tableau pricingData.
          Note l'utilisation de 'key={plan.name}' car chaque nom de plan est unique.
        */}
        {pricingData.map((plan) => (
          // Chaque carte de plan tarifaire.
          // La classe 'pricing-card--featured' est ajoutée conditionnellement
          // si 'plan.isFeatured' est vrai, ce qui stylisera différemment le plan "Pro".
          <div key={plan.name} className={`pricing-card ${plan.isFeatured ? 'pricing-card--featured' : ''}`}>
            {/* Nom du plan */}
            <h3 className="pricing-card__name">{plan.name}</h3>

            {/* Prix du plan */}
            <div className="pricing-card__price-wrapper">
              <span className="pricing-card__currency">$</span>
              <span className="pricing-card__price">{plan.price}</span>
              <span className="pricing-card__frequency">{plan.frequency}</span>
            </div>

            {/* Description courte du plan */}
            <p className="pricing-card__description">{plan.description}</p>

            {/* Liste des fonctionnalités incluses */}
            <ul className="pricing-card__features-list">
              {plan.features.map((feature, index) => (
                <li key={feature + index} className="pricing-card__feature-item">
                  <FiCheck size={18} color="var(--color-cta-green)" /> {/* Icône de coche */}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bouton d'action pour choisir le plan */}
            <button className={`btn ${plan.isFeatured ? 'btn-primary' : 'btn-secondary'}`}>
              Choisir le plan {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export du composant Pricing
export default Pricing;