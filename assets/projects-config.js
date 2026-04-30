/**
 * CONFIGURATION DES PROJETS — PORTFOLIO SANDRINE KELLAM
 * 1. Glisse tes photos dans le dossier du projet
 * 2. Ajoute le nom du fichier dans le tableau "images"
 * 3. Sauvegarde + recharge le navigateur
 *
 * Pour les videos : utilise un chemin .mp4 dans le tableau images.
 * La galerie detecte automatiquement et affiche un lecteur video.
 *
 * Champs bilingues : subtitle / subtitle_en | description / description_en | tags / tags_en
 */

const PROJECTS_CONFIG = [

  /* 1. MASTER MEC */
  {
    id: "mec1",
    title: "Master MEC",
    subtitle: "Direction artistique & shooting photo",
    subtitle_en: "Artistic direction & photo shoot",
    description: "Direction artistique et production d'un shooting photo professionnel. Mise en scene, coordination des modeles (Anne, JC, Sandrine) et post-production des visuels.",
    description_en: "Artistic direction and production of a professional photo shoot. Set design, model coordination (Anne, JC, Sandrine) and post-production of visuals.",
    tags: ["Shooting", "Support oral", "Photo"],
    tags_en: ["Shooting", "Oral Presentation", "Photography"],
    tagColor: "red",
    bgGradient: "linear-gradient(145deg,#1a0505 0%,#3d1010 40%,#7c1a1a 75%,#b52020 100%)",
    icon: "📚",
    images: [
      "assets/photos/projects/Master MEC/Expose-CNIL.png",
      "assets/photos/projects/Master MEC/TD1.png",
      "assets/photos/projects/Master MEC/TD2.png",
      "assets/photos/projects/Master MEC/TD3.png"
    ]
  },

  /* 2. POWER BI */
  {
    id: "power-bi",
    title: "Power BI",
    subtitle: "Tableaux de bord & analyse de données",
    subtitle_en: "Dashboards & data analysis",
    description: "Conception de dashboards interactifs Power BI pour le suivi des campagnes marketing direct, l'analyse des KPIs de collecte et le reporting hebdomadaire.",
    description_en: "Design of interactive Power BI dashboards to track direct marketing campaigns, analyse fundraising KPIs and produce weekly reports for management.",
    tags: ["Data", "Dashboards", "Reporting"],
    tags_en: ["Data", "Dashboards", "Reporting"],
    tagColor: "blue",
    bgGradient: "linear-gradient(145deg,#0a0a1a 0%,#1a1a3e 40%,#2d2d6e 70%,#f2c811 100%)",
    icon: "📊",
    images: [
      "assets/photos/projects/Power BI/dashboard-france.png",
      "assets/photos/projects/Power BI/dashboard-us.png",
      "assets/photos/projects/Power BI/bike-sales-1.png",
      "assets/photos/projects/Power BI/bike-sales-2.png"
    ]
  },

  /* 3. POULET MIKAT */
  {
    id: "poulet-mikat",
    title: "Poulet Mikat",
    subtitle: "Branding & Identité visuelle complète",
    subtitle_en: "Branding & Full Visual Identity",
    description: "Identité visuelle complète pour ce restaurant de cuisine congolaise : charte graphique (2 logos), flyers, carte des boissons et carte de fidélité.",
    description_en: "Full visual identity for this Congolese restaurant: brand guidelines (2 logos), flyers, drinks menu and loyalty card.",
    tags: ["Branding complet", "Identité visuelle", "Social Media"],
    tags_en: ["Full Branding", "Visual Identity", "Social Media"],
    tagColor: "orange",
    bgGradient: "linear-gradient(135deg,#7c2d12 0%,#a84010 25%,#d97706 60%,#92400e 100%)",
    icon: "🍗",
    images: [
      "assets/photos/projects/poulet-mikat/1.png",
      "assets/photos/projects/poulet-mikat/02-charte.png",
      "assets/photos/projects/poulet-mikat/2.png"
    ]
  },

  /* 4. DAMCOMPANY */
  {
    id: "damcompany",
    title: "DamCompany",
    subtitle: "Agence web & développement digital",
    subtitle_en: "Web agency & digital development",
    description: "Collaboration avec l'agence DamCompany pour la conception et le développement de sites web professionnels. Design, intégration et déploiement de solutions digitales sur mesure.",
    description_en: "Collaboration with DamCompany agency for the design and development of professional websites. Design, integration and deployment of custom digital solutions.",
    tags: ["Web", "Design", "Digital"],
    tags_en: ["Web", "Design", "Digital"],
    tagColor: "gold",
    bgGradient: "linear-gradient(145deg,#1a1400 0%,#2e2200 35%,#4a3800 65%,#f2c200 100%)",
    icon: "⚡",
    images: [
      "assets/photos/projects/DamCompany/1-cover.png",
      "assets/photos/projects/DamCompany/Peace-of-Mind.png",
      "assets/photos/projects/DamCompany/NadMotivation.png",
      "assets/videos/damcompany/damcompany-realisation-01.mp4",
      "assets/videos/damcompany/damcompany-realisation-02.mp4",
      "assets/videos/damcompany/damcompany-realisation-03.mp4",
      "assets/videos/damcompany/damcompany-realisation-04.mp4"
    ]
  },

  /* 5. MA1 */
  {
    id: "ma1",
    title: "MA1",
    subtitle: "Ton assistant personnel de la route",
    subtitle_en: "Your personal road companion",
    description: "Création du logo et de l'identité visuelle pour MA1 — une application d'intelligence artificielle pour les conducteurs.",
    description_en: "Logo design and visual identity for MA1 — an artificial intelligence application for drivers.",
    tags: ["Logo", "Tech & IA", "Automobile"],
    tags_en: ["Logo", "Tech & AI", "Automotive"],
    tagColor: "blue",
    bgGradient: "linear-gradient(145deg,#000000 0%,#0a0e1e 40%,#1a2e5f 70%,#0052cc 100%)",
    icon: "🚗",
    images: [
      "assets/photos/projects/ma1/1.png",
      "assets/photos/projects/ma1/2.png",
      "assets/photos/projects/ma1/3.png",
      "assets/photos/projects/ma1/4.png",
      "assets/photos/projects/ma1/5.png",
      "assets/photos/projects/ma1/6.png"
    ]
  },

  /* 6. VTCSR */
  {
    id: "vtcsr",
    title: "VTCSR",
    subtitle: "Site web & communication visuelle",
    subtitle_en: "Website & visual communication",
    description: "Création d'une maquette de site web, cartes de visite et supports de communication pour VTCSR, société de VTC à Roissy-en-Brie.",
    description_en: "Creation of a website mockup, business cards and communication materials for VTCSR, a private hire vehicle company based in Roissy-en-Brie.",
    tags: ["Site web", "Carte de visite", "VTC"],
    tags_en: ["Website", "Business Card", "Private Hire"],
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
      "assets/photos/projects/vtcsr/15.png"
    ]
  },

  /* 7. KINGBREL */
  {
    id: "kingbrel",
    title: "Kingbrel",
    subtitle: "The Brel Attitude — Barbershop",
    subtitle_en: "The Brel Attitude — Barbershop",
    description: "Carte de visite et carte de fidélité pour le barbershop \"The Brel Attitude\" à Livry-Gargan. Style black & gold premium.",
    description_en: "Business card and loyalty card for the \"The Brel Attitude\" barbershop in Livry-Gargan. Premium black & gold style.",
    tags: ["Barbershop", "Fidélisation", "Black & Gold"],
    tags_en: ["Barbershop", "Loyalty", "Black & Gold"],
    tagColor: "gold",
    bgGradient: "linear-gradient(145deg,#000000 0%,#1a1200 40%,#3d2e00 70%,#b8960c 100%)",
    icon: "✂️",
    images: [
      "assets/photos/projects/kingbrel/1.png",
      "assets/photos/projects/kingbrel/2.png"
    ]
  },

  /* 8. TOKYO ZEN */
  {
    id: "tokyo-zen",
    title: "Tokyo Zen",
    subtitle: "Massage & Bien-être",
    subtitle_en: "Massage & Wellness",
    description: "Carte de visite et menu des prestations pour un institut de massage & bien-être en Île-de-France. Design épuré aux tons terre et ivoire.",
    description_en: "Business card and service menu for a massage & wellness institute in the Paris region. Clean design in earth and ivory tones.",
    tags: ["Bien-être", "Carte de visite", "Grille tarifaire"],
    tags_en: ["Wellness", "Business Card", "Price List"],
    tagColor: "beige",
    bgGradient: "linear-gradient(155deg,#3d1f12 0%,#8b5e3c 40%,#d4a47c 75%,#e8c9a8 100%)",
    icon: "🌸",
    images: [
      "assets/photos/projects/tokyo-zen/1.png",
      "assets/photos/projects/tokyo-zen/2.png"
    ]
  },

  /* 9. IL RESTAURE ENCORE */
  {
    id: "il-restaure-encore",
    title: "Il restaure encore !",
    subtitle: "La parole aux femmes — Gabriella Ibata",
    subtitle_en: "Women's voices — Gabriella Ibata",
    description: "Visuel promotionnel pour \"La parole aux femmes\" de Gabriella Ibata — recueil de témoignages, cri d'espoir et de foi. Disponible sur Amazon.fr.",
    description_en: "Promotional visual for \"Women's voices\" by Gabriella Ibata — a collection of testimonies, a cry of hope and faith. Available on Amazon.fr.",
    tags: ["Témoignages", "Féminin", "Spiritualité"],
    tags_en: ["Testimonies", "Women", "Spirituality"],
    tagColor: "purple",
    bgGradient: "linear-gradient(145deg,#2e1065 0%,#5b21b6 40%,#7c3aed 70%,#a78bfa 100%)",
    icon: "💜",
    images: [
      "assets/photos/projects/Il restaure encore - Livre/1.png",
      "assets/photos/projects/Il restaure encore - Livre/2.png",
      "assets/photos/projects/Il restaure encore - Livre/3.png",
      "assets/photos/projects/Il restaure encore - Livre/4.png"
    ]
  },

  /* 10. DESTINEE */
  {
    id: "destinee",
    title: "Destinée",
    subtitle: "Le chemin — Livre 1 · Manyinga Serge",
    subtitle_en: "The Path — Book 1 · Manyinga Serge",
    description: "Visuels promotionnels et supports de communication pour le roman \"Destinée – Le chemin, Livre 1\" de Manyinga Serge. Disponible sur Amazon.",
    description_en: "Promotional visuals and communication materials for the novel \"Destinée – Le chemin, Livre 1\" by Manyinga Serge. Available on Amazon.",
    tags: ["Promotion livre", "Amazon", "Direction artistique"],
    tags_en: ["Book Promotion", "Amazon", "Art Direction"],
    tagColor: "green",
    bgGradient: "linear-gradient(145deg,#042f1c 0%,#0a4a2a 35%,#155a35 65%,#22773f 100%)",
    icon: "📖",
    images: [
      "assets/photos/projects/Livre - destinee/1.png",
      "assets/photos/projects/Livre - destinee/2.png",
      "assets/photos/projects/Livre - destinee/3.png",
      "assets/photos/projects/Livre - destinee/4.png",
      "assets/photos/projects/Livre - destinee/5.png"
    ]
  },

  /* 11. SDG */
  {
    id: "sdg",
    title: "SDG",
    subtitle: "Projet créatif & communication",
    subtitle_en: "Creative project & communication",
    description: "Création visuelle et supports de communication pour le projet SDG. Identité graphique soignée et cohérente sur l'ensemble des supports produits.",
    description_en: "Visual creation and communication materials for the SDG project. Carefully crafted, consistent graphic identity across all produced materials.",
    tags: ["Design", "Créativité", "Communication"],
    tags_en: ["Design", "Creativity", "Communication"],
    tagColor: "purple",
    bgGradient: "linear-gradient(145deg,#1e1b4b 0%,#3730a3 45%,#6366f1 100%)",
    icon: "✨",
    images: [
      "assets/photos/projects/SDG/1.png","assets/photos/projects/SDG/2.png",
      "assets/photos/projects/SDG/3.png","assets/photos/projects/SDG/4.png",
      "assets/photos/projects/SDG/5.png"
    ]
  },

  /* 12. NOUVEAU PROJET */
  {
    id: "projet-12",
    title: "Nouveau projet",
    subtitle: "En cours de mise à jour ✨",
    subtitle_en: "Update in progress ✨",
    description: "Prochain projet créatif à venir. Restez connecté(e) !",
    description_en: "Next creative project coming soon. Stay tuned!",
    tags: ["Coming soon"],
    tags_en: ["Coming soon"],
    tagColor: "silver",
    bgGradient: "linear-gradient(145deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
    icon: "🏰",
    images: []
  }

];

const PROFILE_PHOTO = "assets/photos/profile/sandrine-portrait-pro.jpeg";
