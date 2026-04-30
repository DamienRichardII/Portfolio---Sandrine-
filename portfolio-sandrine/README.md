# 🏰 Portfolio Sandrine Kellam-Nonga
## Guide d'utilisation — Ajouter des photos

---

## 📁 Structure du dossier

```
portfolio-sandrine/
│
├── index.html                    ← Portfolio principal (ouvrir dans un navigateur)
│
├── assets/
│   ├── projects-config.js        ← ⭐ FICHIER DE CONFIGURATION (éditer ici)
│   │
│   └── photos/
│       ├── profile/
│       │   └── sandrine.jpg      ← Ta photo de profil (remplacer par ton image)
│       │
│       └── projects/
│           ├── poulet-mikat/     ← Photos du projet Poulet Mikat
│           ├── tokyo-zen/        ← Photos du projet Tokyo Zen
│           ├── kingbrel/         ← Photos du projet Kingbrel
│           ├── destinee/         ← Photos du projet Destinée
│           ├── il-restaure-encore/ ← Photos du projet Il restaure encore
│           ├── ma1/              ← Photos du projet MA1
│           ├── vtcsr/            ← Photos du projet VTCSR
│           ├── action-contre-faim/ ← Photos ACF
│           └── autres/           ← Autres projets
```

---

## ✅ Comment ajouter des photos en 3 étapes

### Étape 1 — Glisse les photos dans le bon dossier
Place tes images dans `assets/photos/projects/NOM-DU-PROJET/`

**Formats acceptés :** `.jpg` `.jpeg` `.png` `.webp` `.gif`

> 💡 Conseil : nomme tes fichiers simplement `01.jpg`, `02.jpg`, `03.jpg`...

---

### Étape 2 — Ouvre `assets/projects-config.js` avec un éditeur de texte
(Notepad, VS Code, TextEdit...)

Trouve le projet concerné et mets à jour le tableau `images` :

```javascript
{
  id: "poulet-mikat",
  title: "Poulet Mikat",
  // ...
  images: [
    "assets/photos/projects/poulet-mikat/01.jpg",   // ← ligne existante
    "assets/photos/projects/poulet-mikat/02.jpg",   // ← AJOUTE des lignes comme ça
    "assets/photos/projects/poulet-mikat/03.jpg",   // ← autant que tu veux
  ]
}
```

### Étape 3 — Recharge le portfolio dans ton navigateur
Appuie sur **F5** ou **Ctrl+R** (Cmd+R sur Mac) → les photos apparaissent automatiquement !

---

## 🖼️ Ajouter ta photo de profil

1. Mets ta photo dans `assets/photos/profile/`
2. Renomme-la `sandrine.jpg` (ou modifie la dernière ligne de `projects-config.js`)
3. Recharge le portfolio → l'encadré "SK" est remplacé par ta photo !

---

## ➕ Ajouter un nouveau projet

Dans `projects-config.js`, copie-colle un bloc existant à la fin et remplis :

```javascript
{
  id: "nom-court-sans-espaces",      // identifiant unique
  title: "Nom affiché",
  subtitle: "Sous-titre",
  description: "Description du projet...",
  tags: ["Tag 1", "Tag 2"],          // max 3 tags conseillé
  tagColor: "purple",                // orange/gold/green/purple/blue/teal/red/beige
  bgGradient: "linear-gradient(145deg, #DEBUT 0%, #FIN 100%)",
  icon: "🎨",
  images: [
    "assets/photos/projects/nom-court-sans-espaces/01.jpg",
  ]
}
```

---

## 🌐 Mettre en ligne le portfolio

Pour héberger en ligne, upload le **dossier entier** `portfolio-sandrine/` sur :
- **Netlify** (gratuit) — drag & drop du dossier sur netlify.com/drop
- **GitHub Pages** (gratuit)
- **Vercel** (gratuit)

> ⚠️ Important : garde toujours la même structure de dossiers lors de l'upload !

---

*Portfolio créé avec 🏰 magie Disney · 2025*
