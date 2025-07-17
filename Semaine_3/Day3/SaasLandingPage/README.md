# StreamLine - Landing Page en React

## 🧩 Description du Projet

**StreamLine** est une landing page moderne et responsive conçue pour une plateforme SaaS fictive spécialisée dans l’automatisation des workflows et la gestion de projets centralisée. L’objectif est de mettre en valeur les services de l’entreprise de manière claire, professionnelle et engageante, en ciblant notamment les startups, agences de marketing et PME.

Ce projet est construit avec **React.js** et **Vite**, en suivant les principes du **Clean Code** et une **architecture modulaire basée sur les composants**, afin d'assurer la maintenabilité et l’évolutivité du code.

---

## 🎨 Identité Visuelle

- **Style général :** Moderne, épuré, professionnel, aéré.
- **Palette de couleurs :**
  - Bleu principal : `#4A90E2`
  - Vert pour les CTA : `#50E3C2`
  - Texte : `#333333`
  - Sous-titres : `#AAAAAA`
  - Fonds : `#FFFFFF` et `#F8F9FA`
- **Typographie :** Google Font [Poppins](https://fonts.google.com/specimen/Poppins) (400, 600, 700)
- **Iconographie :** [react-icons](https://react-icons.github.io/react-icons/) (inspiré de Feather Icons / Heroicons)

---

## 🗂️ Architecture du Projet

```bash
/streamline-landing-page
├── public/                 # Fichiers statiques (ex : index.html)
├── src/
│   ├── assets/             # Images, logos, icônes personnalisés
│   ├── components/         # Tous les composants React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Composant principal
│   ├── index.css           # Styles globaux + composants
│   └── main.jsx            # Point d'entrée React
├── .gitignore
├── package.json
├── package-lock.json
└── README.md               # Ce fichier
```

---

## 🧱 Composants Clés

- **Header.jsx** : Barre de navigation avec logo, liens et CTA. Responsive avec menu burger.
- **Hero.jsx** : Titre fort, sous-titre descriptif, bouton principal.
- **Features.jsx** : Trois fonctionnalités principales affichées dynamiquement depuis un tableau d’objets.
- **Testimonials.jsx** : Témoignages de deux clients satisfaits.
- **Pricing.jsx** : Trois offres avec mise en avant du plan "Pro" (style conditionnel).
- **FinalCTA.jsx** : Dernier appel à l'action pour convertir l’utilisateur.
- **Footer.jsx** : Liens de navigation, mentions légales et réseaux sociaux.

---

## 🛠️ Technologies Utilisées

- **React.js** (v18+)
- **Vite** (v5+)
- **JavaScript** (ES6+)
- **CSS3** (Flexbox, Grid, Media Queries)
- **react-icons**

---

## 🚀 Installation et Lancement

1. **Cloner le dépôt :**
    ```bash
    git clone https://github.com/votre-utilisateur/streamline-landing-page.git
    cd streamline-landing-page
    ```

2. **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Démarrer le serveur de développement :**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    Accès via : [http://localhost:5173](http://localhost:5173)

4. **(Optionnel) Générer la version production :**
    ```bash
    npm run build
    # ou
    yarn build
    ```

---

## 👨‍💻 Auteur

- **Malick** – Développeur Front-End
- **Jean (IA)** – Assistant expert React

> 💡 N'oublie pas de personnaliser cette section si tu publies ton projet sur GitHub ou dans un portfolio.

---

## 📎 Licence

Projet réalisé à des fins pédagogiques. Aucun usage commercial ou déploiement officiel.