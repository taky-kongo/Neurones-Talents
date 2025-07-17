/*
 * Fichier : src/components/Footer.jsx
 * Description : Composant React pour le pied de page (Footer) de la landing page.
 * Contient les liens de navigation secondaires, les informations de contact,
 * le copyright et les icônes de médias sociaux, structuré en colonnes pour la lisibilité.
 */

import React from 'react';
// Importe les icônes de médias sociaux de react-icons
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
    // Le pied de page principal de la page.
    // Utilise 'px-container' pour la largeur maximale et 'py-section' pour le padding vertical.
    // Un fond gris clair pour alterner avec la section précédente.
    // Ajout d'une bordure supérieure pour le séparer du contenu principal.
    <footer className="footer py-section px-container" style={{ borderTop: '1px solid var(--color-border-grey)', backgroundColor: 'var(--color-background-light-grey)' }}>
      {/* Conteneur principal du footer, utilisant flexbox pour les colonnes */}
      <div className="footer__content">
        {/* Colonne 1 : Informations sur l'entreprise et slogan */}
        <div className="footer__column footer__column--info">
          <h3 className="footer__logo">StreamLine</h3>
          <p className="footer__slogan">Automatisez, Gagnez en Efficacité.</p>
          <p className="footer__copyright">&copy; {new Date().getFullYear()} StreamLine. Tous droits réservés.</p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="footer__column">
          <h4 className="footer__heading">Navigation</h4>
          <ul className="footer__list">
            <li><a href="#features" className="footer__link">Fonctionnalités</a></li>
            <li><a href="#testimonials" className="footer__link">Témoignages</a></li>
            <li><a href="#pricing" className="footer__link">Tarifs</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Ressources */}
        <div className="footer__column">
          <h4 className="footer__heading">Ressources</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Blog</a></li>
            <li><a href="#" className="footer__link">Documentation</a></li>
            <li><a href="#" className="footer__link">Support</a></li>
            <li><a href="#" className="footer__link">FAQ</a></li>
          </ul>
        </div>

        {/* Colonne 4 : Légal et Médias Sociaux */}
        <div className="footer__column">
          <h4 className="footer__heading">Légal & Contact</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Politique de confidentialité</a></li>
            <li><a href="#" className="footer__link">Conditions d'utilisation</a></li>
          </ul>
          <div className="footer__social-icons">
            <a href="https://facebook.com/streamline" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FiFacebook size={24} />
            </a>
            <a href="https://twitter.com/streamline" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FiTwitter size={24} />
            </a>
            <a href="https://linkedin.com/company/streamline" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FiLinkedin size={24} />
            </a>
            <a href="https://instagram.com/streamline" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FiInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Export du composant Footer
export default Footer;