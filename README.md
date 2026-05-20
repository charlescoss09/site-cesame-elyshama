# CESAME ELYSHAMA — Frontend

Frontend moderne et premium créé avec **Vite + React + Tailwind CSS** pour un centre de santé naturelle et holistique.

## 🎯 Fonctionnalités

✅ **Page d'accueil immersive** avec sections complètes  
✅ **Navbar sticky responsive** avec menu mobile  
✅ **Footer premium** avec liens et réseaux sociaux  
✅ **Pages complètes** : About, Services, Products, Appointment, Contact  
✅ **Animations fluides** avec Framer Motion  
✅ **Formulaires avec validation** (Appointment, Contact)  
✅ **Boutons flottants** WhatsApp et réseaux sociaux  
✅ **Design responsive** (mobile, tablette, desktop)  
✅ **Palette de couleurs premium** (Vert, Or, Beige)  
✅ **API Axios prête** pour intégration Node.js/Express  

## 🛠 Stack Technique

- **React 18.2** — Composants réutilisables
- **Vite** — Build rapide et moderne
- **Tailwind CSS 3.4** — Styling utilitaire
- **React Router DOM 6** — Navigation fluide
- **Framer Motion 10** — Animations élégantes
- **Axios 1.4** — Requêtes HTTP
- **React Icons** — Icônes vectorielles

## 📋 Prérequis

- **Node.js 18+** ([télécharger](https://nodejs.org))
- **npm** (inclus avec Node.js)

## 🚀 Installation & Démarrage

```bash
# 1. Accédez au dossier du projet
cd "c:\Users\HP\Documents\site-cesame-elyshama"

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur de développement
npm run dev
```

L'app se lance sur `http://localhost:5173`.

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

## 📁 Structure du projet

```
src/
├── assets/              # Images et médias (à compléter)
├── components/          # Composants réutilisables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── ProductCard.jsx
│   ├── ServiceCard.jsx
│   ├── TeamCard.jsx
│   ├── TestimonialSlider.jsx
│   ├── AppointmentForm.jsx
│   ├── ContactForm.jsx
│   ├── WhatsAppButton.jsx
│   ├── SocialFloatingButtons.jsx
│   ├── SectionTitle.jsx
│   └── CTASection.jsx
├── pages/               # Pages principales
│   ├── Home.jsx         # Page d'accueil avec toutes sections
│   ├── About.jsx        # À propos avec mission et valeurs
│   ├── Services.jsx     # Services détaillés
│   ├── Products.jsx     # Boutique vitrine
│   ├── Appointment.jsx  # Formulaire rendez-vous
│   └── Contact.jsx      # Formulaire contact
├── layouts/
│   └── MainLayout.jsx   # Layout global (Navbar, Footer)
├── data/                # Données statiques
│   ├── products.js
│   ├── services.js
│   ├── team.js
│   └── testimonials.js
├── services/
│   └── api.js           # Instance Axios configurée
├── App.jsx              # Routes principales
├── main.jsx             # Point d'entrée React
└── index.css            # Styles globaux + Tailwind
```

## 🎨 Palette de couleurs

- **Vert principal** : `#16A34A` (Tailwind: `cesame-green`)
- **Vert foncé** : `#14532D` (Tailwind: `cesame-dark`)
- **Blanc** : `#FFFFFF`
- **Beige naturel** : `#F5F5DC` (Tailwind: `cesame-beige`)
- **Or léger** : `#D4AF37` (Tailwind: `cesame-gold`)
- **Gris clair** : `#F8FAFC` (Tailwind: `cesame-gray`)

## ⚙️ Configuration Tailwind

Couleurs personnalisées dans `tailwind.config.cjs` :

```js
theme: {
  extend: {
    colors: {
      'cesame-green': '#16A34A',
      'cesame-dark': '#14532D',
      'cesame-beige': '#F5F5DC',
      'cesame-gold': '#D4AF37',
      'cesame-gray': '#F8FAFC'
    }
  }
}
```

## 🔌 Intégration API (Backend)

L'instance Axios est configurée dans `src/services/api.js` :

```js
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
})
```

### Variables d'environnement

Créez un fichier `.env.local` :

```env
VITE_API_URL=http://localhost:4000/api
```

### Points d'API attendus (à implémenter sur le backend)

```
POST /api/appointments  # Prise de rendez-vous
POST /api/contact       # Formulaire de contact
```

## 🎯 Prochaines étapes

1. **Installer Node.js** si ce n'est pas fait
2. **`npm install`** pour installer les dépendances
3. **`npm run dev`** pour lancer le serveur dev
4. **Vérifier la structure** et commencer à tester
5. **Intégrer le backend** Node.js/Express avec Nodemailer pour les formulaires
6. **Remplacer les images placeholder** par les vraies images
7. **Compléter les numéros de contact** et liens réseaux sociaux

## 📝 Fichiers de configuration

- `vite.config.js` — Configuration Vite
- `tailwind.config.cjs` — Configuration Tailwind
- `postcss.config.cjs` — Configuration PostCSS
- `package.json` — Dépendances et scripts

## 🤝 Support

Pour toute question ou amélioration, consultez la documentation ou contactez l'équipe de développement.

---

**Version** : 0.1.0  
**Date** : Mai 2026  
**Statut** : En développement active
