/*
 * Fichier : src/components/Header.jsx
 * Description : Composant React pour l'en-tête (Header) de la landing page.
 * Contient le logo de l'entreprise, la navigation principale, et les boutons d'action.
 * Gère également le menu burger pour la navigation mobile.
 */

import React, { useState } from 'react'; // Importe React et le hook useState pour gérer l'état
import { FiMenu, FiX } from 'react-icons/fi'; // Importe les icônes de menu et de fermeture de react-icons

function Header() {
  // `useState` est un hook React qui nous permet d'ajouter un état local à notre composant fonctionnel.
  // `isMenuOpen` est la variable d'état qui indique si le menu mobile est ouvert ou fermé (par défaut à false).
  // `setIsMenuOpen` est la fonction que nous utiliserons pour modifier la valeur de `isMenuOpen`.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu (ouvrir/fermer)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverse la valeur actuelle de isMenuOpen
  };

  return (
    // L'en-tête principal de la page. Utilise les classes utilitaires définies dans index.css.
    // 'px-container' pour le padding horizontal et 'py-md' pour le padding vertical.
    // 'flex justify-between items-center' pour aligner le logo et la navigation sur la même ligne,
    // en espaçant les éléments et en les centrant verticalement.
    <header className="header px-container py-md flex justify-between items-center">
      {/* Logo de l'entreprise */}
      <div className="header__logo">
        {/* Le logo est un simple texte pour l'instant, stylisé avec la couleur primaire. */}
        <a href="/" className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
          StreamLine
        </a>
      </div>

      {/* Bouton du menu burger pour les appareils mobiles */}
      {/* Ce bouton est caché sur les grands écrans et visible sur les petits écrans grâce au CSS. */}
      <div className="header__menu-icon md:hidden" onClick={toggleMenu}>
        {/* Affiche l'icône de menu (burger) si le menu est fermé, sinon affiche l'icône de fermeture (X). */}
        {isMenuOpen ? (
          <FiX size={28} color="var(--color-text-dark)" />
        ) : (
          <FiMenu size={28} color="var(--color-text-dark)" />
        )}
      </div>

      {/* Navigation principale et boutons d'action */}
      {/*
        La classe 'header__nav' contrôle la visibilité et le style de la navigation.
        La classe 'header__nav--open' est ajoutée dynamiquement si 'isMenuOpen' est vrai.
        Ceci permet de gérer l'affichage du menu mobile (en superposition ou en colonne).
        Sur les grands écrans, cette classe n'aura pas d'effet car la navigation sera toujours visible (md:flex).
      */}
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''} md:flex`}>
        {/* Liste des liens de navigation */}
        <ul className="header__nav-list">
          <li><a href="#features" className="header__nav-link" onClick={toggleMenu}>Fonctionnalités</a></li>
          <li><a href="#testimonials" className="header__nav-link" onClick={toggleMenu}>Témoignages</a></li>
          <li><a href="#pricing" className="header__nav-link" onClick={toggleMenu}>Tarifs</a></li>
          <li><a href="#contact" className="header__nav-link" onClick={toggleMenu}>Contact</a></li>
        </ul>

        {/* Boutons d'action : Connexion et Essai Gratuit */}
        <div className="header__actions">
          <button className="btn btn-secondary header__btn-login" onClick={toggleMenu}>Connexion</button>
          <button className="btn btn-primary header__btn-trial" onClick={toggleMenu}>Essai Gratuit</button>
        </div>
      </nav>
    </header>
  );
}

// Export du composant Header pour qu'il puisse être importé et utilisé ailleurs (notamment dans App.jsx)
export default Header;