/**
 * CONFIGURATION DES PROJETS — PORTFOLIO SANDRINE KELLAM
 * 1. Glisse tes photos dans le dossier du projet concerné
 * 2. Ajoute le nom du fichier dans le tableau "images" ici
 * 3. Sauvegarde + recharge le navigateur
 */

const PROJECTS_CONFIG = [

  /* ── 1. MASTER MEC ── */
  {
    id: "mec1",
    title: "Master MEC",
    subtitle: "Direction artistique & shooting photo",
    description: "Direction artistique et production d'un shooting photo professionnel. Mise en scène, coordination des modèles (Anne, JC, Sandrine) et post-production des visuels.",
    tags: ["Shooting", "Support oral", "Photo"],
    tagColor: "red",
    bgGradient: "linear-gradient(145deg,#1a0505 0%,#3d1010 40%,#7c1a1a 75%,#b52020 100%)",
    icon: "📚",
    images: [
      "assets/photos/projects/Master MEC/Expose-CNIL.png",
      "assets/photos/projects/Master MEC/TD1.png",
      "assets/photos/projects/Master MEC/TD2.png",
      "assets/photos/projects/Master MEC/TD3.png",
      "assets/photos/projects/Master MEC/2.png",
      "assets/photos/projects/Master MEC/18.png","assets/photos/projects/Master MEC/Anne.png",
      "assets/photos/projects/Master MEC/Anne (2).png","assets/photos/projects/Master MEC/Anne (3).png",
      "assets/photos/projects/Master MEC/Anne (4).png","assets/photos/projects/Master MEC/JC.png",
      "assets/photos/projects/Master MEC/JC (2).png","assets/photos/projects/Master MEC/JC (3).png",
      "assets/photos/projects/Master MEC/JC (4).png","assets/photos/projects/Master MEC/JC (5).png",
      "assets/photos/projects/Master MEC/JC (6).png","assets/photos/projects/Master MEC/JC (7).png",
      "assets/photos/projects/Master MEC/Sandrine.png","assets/photos/projects/Master MEC/Sandrine (2).png",
      "assets/photos/projects/Master MEC/Sandrine (3).png","assets/photos/projects/Master MEC/Sandrine (4).png",
    ]
  },

  /* ── 2. POWER BI ── */
  {
    id: "power-bi",
    title: "Power BI",
    subtitle: "Tableaux de bord & analyse de données",
    description: "Conception de dashboards interactifs Power BI pour le suivi des campagnes marketing direct, l'analyse des KPIs de collecte et le reporting hebdomadaire auprès de la direction.",
    tags: ["Data", "Dashboards", "Reporting"],
    tagColor: "blue",
    bgGradient: "linear-gradient(145deg,#0a0a1a 0%,#1a1a3e 40%,#2d2d6e 70%,#f2c811 100%)",
    icon: "📊",
    images: [
      "assets/photos/projects/Power BI/dashboard-france.png",
      "assets/photos/projects/Power BI/dashboard-us.png",
      "assets/photos/projects/Power BI/bike-sales-1.png",
      "assets/photos/projects/Power BI/bike-sales-2.png",
    ]
  },

  /* ── 3. POULET MIKAT ── */
  {
    id: "poulet-mikat",
    title: "Poulet Mikat",
    subtitle: "Branding & Identité visuelle complète",
    description: "Identité visuelle complète pour ce restaurant de cuisine congolaise : charte graphique (2 logos), flyers, carte des boissons et carte de fidélité. \"L'Afrique à porter de chez vous.\"",
    tags: ["Branding complet", "Identité visuelle", "Social Media"],
    tagColor: "orange",
    bgGradient: "linear-gradient(135deg,#7c2d12 0%,#a84010 25%,#d97706 60%,#92400e 100%)",
    icon: "🍗",
    images: [
      "assets/photos/projects/poulet-mikat/1.png",
      "assets/photos/projects/poulet-mikat/02-charte.png",
      "assets/photos/projects/poulet-mikat/2.png",
      "assets/photos/projects/poulet-mikat/3.png",
      "assets/photos/projects/poulet-mikat/4.png",
      "assets/photos/projects/poulet-mikat/5.png",
      "assets/photos/projects/poulet-mikat/6.png",
      "assets/photos/projects/poulet-mikat/7.jpeg",
      "assets/photos/projects/poulet-mikat/8.jpeg",
    ]
  },

  /* ── 4. DAMCOMPANY ── */
  {
    id: "damcompany",
    title: "DamCompany",
    subtitle: "Agence web & développement digital",
    description: "Collaboration avec l'agence DamCompany pour la conception et le développement de sites web professionnels. Design, intégration et déploiement de solutions digitales sur mesure.",
    tags: ["Web", "Design", "Digital"],
    tagColor: "gold",
    bgGradient: "linear-gradient(145deg,#1a1400 0%,#2e2200 35%,#4a3800 65%,#f2c200 100%)",
    icon: "⚡",
    images: [
      "assets/photos/projects/DamCompany/1-cover.png",
      "assets/photos/projects/DamCompany/Peace-of-Mind.png",
      "assets/photos/projects/DamCompany/NadMotivation.png",
    ]
  },

  /* ── 5. MA1 ── */
  {
    id: "ma1",
    title: "MA1",
    subtitle: "Ton assistant personnel de la route",
    description: "Création du logo et de l'identité visuelle pour MA1 — une application d'intelligence artificielle pour les conducteurs.",
    tags: ["Logo", "Tech & IA", "Automobile"],
    tagColor: "blue",
    bgGradient: "linear-gradient(145deg,#000000 0%,#0a0e1e 40%,#1a2e5f 70%,#0052cc 100%)",
    icon: "🚗",
    images: [
      "assets/photos/projects/ma1/1.png","assets/photos/projects/ma1/2.png",
      "assets/photos/projects/ma1/3.png","assets/photos/projects/ma1/4.png",
      "assets/photos/projects/ma1/5.png","assets/photos/projects/ma1/6.png",
    ]
  },

  /* ── 6. VTCSR ── */
  {
    id: "vtcsr",
    title: "VTCSR",
    subtitle: "Site web & communication visuelle",
    description: "Création d'une maquette de site web, cartes de visite et supports de communication pour VTCSR, société de VTC à Roissy-en-Brie.",
    tags: ["Site web", "Carte de visite", "VTC"],
    tagColor: "teal",
    bgGradient: "linear-gradient(145deg,#0f172a 0%,#164e63 50%,#0e7490 100%)",
    icon: "🚖",
    images: [
      "assets/photos/projects/vtcsr/1.png","assets/photos/projects/vtcsr/2.png",
      "assets/photos/projects/vtcsr/3.png","assets/photos/projects/vtcsr/4.png",
      "assets/photos/projects/vtcsr/5.png","assets/photos/projects/vtcsr/6.png",
      "assets/photos/projects/vtcsr/7.png","assets/photos/projects/vtcsr/8.png",
      "assets/photos/projects/vtcsr/9.png","assets/photos/projects/vtcsr/10.png",
      "assets/photos/projects/vtcsr/11.png","assets/photos/projects/vtcsr/12.png",
      "assets/photos/projects/vtcsr/13.png","assets/photos/projects/vtcsr/14.png",
      "assets/photos/projects/vtcsr/15.png",
    ]
  },

  /* ── 7. KINGBREL ── */
  {
    id: "kingbrel",
    title: "Kingbrel",
    subtitle: "The Brel Attitude — Barbershop",
    description: "Carte de visite et carte de fidélité pour le barbershop \"The Brel Attitude\" à Livry-Gargan. Style black & gold premium.",
    tags: ["Barbershop", "Fidélisation", "Black & Gold"],
    tagColor: "gold",
    bgGradient: "linear-gradient(145deg,#000000 0%,#1a1200 40%,#3d2e00 70%,#b8960c 100%)",
    icon: "✂️",
    images: [
      "assets/photos/projects/kingbrel/1.png",
      "assets/photos/projects/kingbrel/2.png",
    ]
  },

  /* ── 8. TOKYO ZEN ── */
  {
    id: "tokyo-zen",
    title: "Tokyo Zen",
    subtitle: "Massage & Bien-être",
    description: "Carte de visite et menu des prestations pour un institut de massage & bien-être en Île-de-France. Design épuré aux tons terre et ivoire.",
    tags: ["Bien-être", "Carte de visite", "Grille tarifaire"],
    tagColor: "beige",
    bgGradient: "linear-gradient(155deg,#3d1f12 0%,#8b5e3c 40%,#d4a47c 75%,#e8c9a8 100%)",
    icon: "🌸",
    images: [
      "assets/photos/projects/tokyo-zen/1.png",
      "assets/photos/projects/tokyo-zen/2.png",
    ]
  },

  /* ── 9. IL RESTAURE ENCORE ── */
  {
    id: "il-restaure-encore",
    title: "Il restaure encore !",
    subtitle: "La parole aux femmes — Gabriella Ibata",
    description: "Visuel promotionnel pour \"La parole aux femmes\" de Gabriella Ibata — recueil de témoignages, cri d'espoir et de foi. Disponible sur Amazon.fr.",
    tags: ["Témoignages", "Féminin", "Spiritualité"],
    tagColor: "purple",
    bgGradient: "linear-gradient(145deg,#2e1065 0%,#5b21b6 40%,#7c3aed 70%,#a78bfa 100%)",
    icon: "💜",
    images: [
      "assets/photos/projects/Il restaure encore - Livre/1.png",
      "assets/photos/projects/Il restaure encore - Livre/2.png",
      "assets/photos/projects/Il restaure encore - Livre/3.png",
      "assets/photos/projects/Il restaure encore - Livre/4.png",
    ]
  },

  /* ── 10. DESTINÉE ── */
  {
    id: "destinee",
    title: "Destinée",
    subtitle: "Le chemin — Livre 1 · Manyinga Serge",
    description: "Visuels promotionnels et supports de communication pour le roman \"Destinée – Le chemin, Livre 1\" de Manyinga Serge. Disponible sur Amazon.",
    tags: ["Promotion livre", "Amazon", "Direction artistique"],
    tagColor: "green",
    bgGradient: "linear-gradient(145deg,#042f1c 0%,#0a4a2a 35%,#155a35 65%,#22773f 100%)",
    icon: "📖",
    images: [
      "assets/photos/projects/Livre - destinee/1.png",
      "assets/photos/projects/Livre - destinee/2.png",
      "assets/photos/projects/Livre - destinee/3.png",
      "assets/photos/projects/Livre - destinee/4.png",
      "assets/photos/projects/Livre - destinee/5.png",
    ]
  },

  /* ── 11. SDG ── */
  {
    id: "sdg",
    title: "SDG",
    subtitle: "Projet créatif & communication",
    description: "Création visuelle et supports de communication pour le projet SDG. Identité graphique soignée et cohérente sur l'ensemble des supports produits.",
    tags: ["Design", "Créativité", "Communication"],
    tagColor: "purple",
    bgGradient: "linear-gradient(145deg,#1e1b4b 0%,#3730a3 45%,#6366f1 100%)",
    icon: "✨",
    images: [
      "assets/photos/projects/SDG/1.png","assets/photos/projects/SDG/2.png",
      "assets/photos/projects/SDG/3.png","assets/photos/projects/SDG/4.png",
      "assets/photos/projects/SDG/5.png",
    ]
  },

  /* ── 12. NOUVEAU PROJET ── */
  {
    id: "projet-12",
    title: "Nouveau projet",
    subtitle: "En cours de mise à jour ✨",
    description: "Prochain projet créatif à venir. Restez connecté(e) !",
    tags: ["Coming soon"],
    tagColor: "silver",
    bgGradient: "linear-gradient(145deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
    icon: "🏰",
    images: []
  },

];

const PROFILE_PHOTO = "assets/photos/profile/sandrine.jpg";
