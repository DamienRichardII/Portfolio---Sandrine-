/**
 * CONFIGURATION DES PROJETS — PORTFOLIO SANDRINE KELLAM
 * COMMENT AJOUTER DES PHOTOS ?
 * 1. Glisse tes photos dans le dossier du projet concerné
 * 2. Ajoute le nom du fichier dans le tableau "images" ici
 * 3. Sauvegarde + recharge le navigateur
 */

const PROJECTS_CONFIG = [

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
    ]
  },

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

  {
    id: "tokyo-zen",
    title: "Tokyo Zen",
    subtitle: "Massage & Bien-être",
    description: "Carte de visite et menu des prestations pour un institut de massage & bien-être en Île-de-France. Design épuré aux tons terre et ivoire.",
    tags: ["Bien-être", "Carte de visite", "Menu"],
    tagColor: "beige",
    bgGradient: "linear-gradient(155deg,#3d1f12 0%,#8b5e3c 40%,#d4a47c 75%,#e8c9a8 100%)",
    icon: "🌸",
    images: [
      "assets/photos/projects/tokyo-zen/1.png",
      "assets/photos/projects/tokyo-zen/2.png",
    ]
  },

  {
    id: "sdg",
    title: "SDG",
    subtitle: "Projet créatif & communication",
    description: "Création visuelle et supports de communication pour le projet SDG. Identité graphique soignée et cohérente sur l'ensemble des supports produits.",
    tags: ["Design", "Branding", "Communication"],
    tagColor: "purple",
    bgGradient: "linear-gradient(145deg,#1e1b4b 0%,#3730a3 45%,#6366f1 100%)",
    icon: "✨",
    images: [
      "assets/photos/projects/SDG/1.png","assets/photos/projects/SDG/2.png",
      "assets/photos/projects/SDG/3.png","assets/photos/projects/SDG/4.png",
      "assets/photos/projects/SDG/5.png",
    ]
  },

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
      "assets/photos/projects/ma1/7.png",
    ]
  },

  {
    id: "mec1",
    title: "MEC 1",
    subtitle: "Direction artistique & shooting photo",
    description: "Direction artistique et production d'un shooting photo professionnel. Mise en scène, coordination des modèles (Anne, JC, Sandrine) et post-production des visuels.",
    tags: ["Shooting", "Direction artistique", "Photo"],
    tagColor: "red",
    bgGradient: "linear-gradient(145deg,#1a0505 0%,#3d1010 40%,#7c1a1a 75%,#b52020 100%)",
    icon: "📚",
    images: [
      "assets/photos/projects/MEC 1/1.png","assets/photos/projects/MEC 1/2.png",
      "assets/photos/projects/MEC 1/18.png","assets/photos/projects/MEC 1/Anne.png",
      "assets/photos/projects/MEC 1/Anne (2).png","assets/photos/projects/MEC 1/Anne (3).png",
      "assets/photos/projects/MEC 1/Anne (4).png","assets/photos/projects/MEC 1/JC.png",
      "assets/photos/projects/MEC 1/JC (2).png","assets/photos/projects/MEC 1/JC (3).png",
      "assets/photos/projects/MEC 1/JC (4).png","assets/photos/projects/MEC 1/JC (5).png",
      "assets/photos/projects/MEC 1/JC (6).png","assets/photos/projects/MEC 1/JC (7).png",
      "assets/photos/projects/MEC 1/Sandrine.png","assets/photos/projects/MEC 1/Sandrine (2).png",
      "assets/photos/projects/MEC 1/Sandrine (3).png","assets/photos/projects/MEC 1/Sandrine (4).png",
    ]
  },

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

  {
    id: "action-contre-faim",
    title: "Action contre la Faim",
    subtitle: "Marketing direct & collecte 360°",
    description: "Refonte des supports de collecte (Welcome Pack, courriers, scripts télémarketing). Mise en place et suivi des campagnes marketing direct multicanal pour l'ONG ACF.",
    tags: ["ONG", "Marketing direct", "Campagnes"],
    tagColor: "red",
    bgGradient: "linear-gradient(145deg,#450a0a 0%,#991b1b 50%,#dc2626 100%)",
    icon: "🍽️",
    images: []
  },

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
