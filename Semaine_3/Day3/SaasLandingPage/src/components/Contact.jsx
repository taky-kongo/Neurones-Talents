/*
 * Fichier : src/components/Contact.jsx
 * Description : Composant React pour la section de contact de la landing page.
 * Inclut un formulaire simple pour permettre aux utilisateurs de contacter StreamLine.
 * Le formulaire est géré par l'état local de React pour les champs.
 */

import React, { useState } from 'react';

function Contact() {
  // Gère l'état des champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    // Ici, tu enverrais normalement les données à ton backend ou un service de formulaire.
    // Pour cet exemple de landing page statique, nous affichons simplement les données dans la console.
    console.log('Données du formulaire de contact soumises :', formData);

    // Tu pourrais ajouter un message de succès à l'utilisateur ici
    alert('Merci pour votre message ! Nous vous recontacterons bientôt.');

    // Réinitialise le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    // La section de contact.
    // Utilise nos classes utilitaires pour le padding et la largeur maximale.
    // Le fond sera blanc pour alterner avec la section précédente (FinalCTA ou Pricing si on change l'ordre).
    // Nous allons la placer avant FinalCTA, donc le fond sera blanc pour après le gris de Pricing.
    <section id="contact" className="contact py-section px-container" style={{ backgroundColor: 'var(--color-background-white)' }}>
      {/* Titre principal de la section Contact */}
      <h2 className="contact__title text-center">
        Contactez-nous
      </h2>

      {/* Description */}
      <p className="contact__description text-center">
        Vous avez des questions ? Des besoins spécifiques ? N'hésitez pas à nous envoyer un message !
      </p>

      {/* Conteneur du formulaire */}
      <div className="contact__form-container">
        <form onSubmit={handleSubmit} className="contact__form">
          {/* Groupe de champ pour le nom */}
          <div className="form-group">
            <label htmlFor="name" className="form-group__label">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-group__input"
              required // Champ requis
            />
          </div>

          {/* Groupe de champ pour l'e-mail */}
          <div className="form-group">
            <label htmlFor="email" className="form-group__label">Adresse E-mail</label>
            <input
              type="email" // Type email pour validation du navigateur
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-group__input"
              required
            />
          </div>

          {/* Groupe de champ pour le message */}
          <div className="form-group form-group--textarea">
            <label htmlFor="message" className="form-group__label">Votre Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-group__textarea"
              rows="6" // Nombre de lignes visibles par défaut
              required
            ></textarea>
          </div>

          {/* Bouton de soumission du formulaire */}
          <button type="submit" className="btn btn-primary contact__submit-btn">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

// Export du composant Contact
export default Contact;