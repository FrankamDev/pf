// // import { useState, useEffect } from "react";
// // import LightGallery from "lightgallery/react";
// // import lgThumbnail from "lightgallery/plugins/thumbnail";
// // import lgZoom from "lightgallery/plugins/zoom";
// // import lgFullscreen from "lightgallery/plugins/fullscreen";
// // import lgRotate from "lightgallery/plugins/rotate";
// // import lgAutoplay from "lightgallery/plugins/autoplay";
// // import lgShare from "lightgallery/plugins/share";

// // // Styles LightGallery (à importer une seule fois)
// // import "lightgallery/css/lightgallery.css";
// // import "lightgallery/css/lg-zoom.css";
// // import "lightgallery/css/lg-thumbnail.css";
// // import "lightgallery/css/lg-fullscreen.css";
// // import "lightgallery/css/lg-rotate.css";
// // import "lightgallery/css/lg-autoplay.css";
// // import "lightgallery/css/lg-share.css";

// // // ──────────────────────────────────────────────
// // // Données des images – à personnaliser selon tes besoins
// // // ──────────────────────────────────────────────
// // const galleryItems = [
// //   {
// //     src: "/r1.jpeg",
// //     thumb: "/r1.jpeg", // miniature (peut être plus petite)
// //     alt: "Projet 1 - UI Design",
// //     title: "Interface utilisateur moderne",
// //     description: "Dashboard analytique avec dark mode",
// //   },
// //   {
// //     src: "/r2.jpeg",
// //     thumb: "/r2.jpeg",
// //     alt: "Projet 2 - 3D Visual",
// //     title: "Visualisation 3D produit",
// //     description: "Rendu temps réel avec Three.js",
// //   },
// //   {
// //     src: "/r3.jpeg",
// //     thumb: "/r3.jpeg",
// //     alt: "Projet 3 - Mobile App",
// //     title: "Application mobile",
// //     description: "Design iOS / Android fluide",
// //   },
// //   {
// //     src: "/r4.jpeg",
// //     thumb: "/r4.jpeg",
// //     alt: "Projet 4 - Landing Page",
// //     title: "Page d'accueil premium",
// //     description: "Animation fluide et micro-interactions",
// //   },
// //   // ... ajoute tous tes autres projets ici
// //   // Pour l'exemple, on en met 10 – tu peux en mettre 50+
// //   {
// //     src: "/r5.jpeg",
// //     thumb: "/r5.jpeg",
// //     alt: "Projet 5",
// //     title: "E-commerce redesign",
// //     description: "Expérience shopping optimisée",
// //   },
// //   {
// //     src: "/r6.jpeg",
// //     thumb: "/r6.jpeg",
// //     alt: "Projet 6",
// //     title: "Portfolio interactif",
// //     description: "Navigation 3D et parallax",
// //   },
// //   {
// //     src: "/r125.jpeg",
// //     thumb: "/r125.jpeg",
// //     alt: "Projet 7",
// //     title: "Dashboard SaaS",
// //     description: "Interface admin avancée",
// //   },
// //   {
// //     src: "/r11.jpeg",
// //     thumb: "/r11.jpeg",
// //     alt: "Projet 8",
// //     title: "Application de fitness",
// //     description: "Tracking et visualisation",
// //   },
// //   {
// //     src: "/r15.jpeg",
// //     thumb: "/r15.jpeg",
// //     alt: "Projet 9",
// //     title: "Site vitrine agence",
// //     description: "Design minimaliste & élégant",
// //   },
// //   {
// //     src: "/r20.jpeg",
// //     thumb: "/r20.jpeg",
// //     alt: "Projet 10",
// //     title: "Expérience immersive",
// //     description: "WebGL + particules",
// //   },
// //   // Ajoute les autres ici...
// // ];

// // export default function Gallery() {
// //   const [visibleItems, setVisibleItems] = useState(12); // on commence par 12 images
// //   const [loading, setLoading] = useState(true);

// //   // Simule un léger délai pour montrer le skeleton (optionnel)
// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoading(false), 800);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const handleLoadMore = () => {
// //     setVisibleItems((prev) => Math.min(prev + 8, galleryItems.length));
// //   };

// //   return (
// //     <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-950 to-black">
// //       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
// //         {/* Titre de la section */}
// //         <div className="text-center mb-12 md:mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
// //             Mes <span className="text-purple-500">réalisations</span>
// //           </h2>
// //           <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
// //             Découvrez une sélection de mes projets récents en design, développement et expériences interactives.
// //           </p>
// //         </div>

// //         {/* Galerie */}
// //         {loading ? (
// //           // Squelette de chargement (optionnel mais très apprécié)
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
// //             {[...Array(12)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="aspect-square rounded-xl bg-gray-800/50 animate-pulse"
// //               />
// //             ))}
// //           </div>
// //         ) : (
// //           <LightGallery
// //             speed={600}
// //             selector=".gallery-item"
// //             download={false}
// //             counter={true}
// //             hideBarsDelay={3000}
// //             plugins={[lgThumbnail, lgZoom, lgFullscreen, lgRotate, lgAutoplay, lgShare]}
// //             thumbnail={true}
// //             thumbWidth={120}
// //             thumbHeight={80}
// //             thumbMargin={8}
// //             mobileSrcAuto={true}
// //             showCloseIcon={true}
// //             enableDrag={true}
// //             enableSwipe={true}
// //             swipeThreshold={50}
// //             loop={true}
// //           >
// //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
// //               {galleryItems.slice(0, visibleItems).map((item, index) => (
// //                 <a
// //                   key={index}
// //                   href={item.src}
// //                   className="gallery-item group relative block aspect-square overflow-hidden rounded-xl border border-gray-800/60 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-900/30 hover:border-purple-500/40"
// //                 >
// //                   <img
// //                     src={item.thumb || item.src}
// //                     alt={item.alt}
// //                     loading="lazy"
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                   />

// //                   {/* Overlay titre + description au hover */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
// //                     <h3 className="text-white font-medium text-lg line-clamp-1">
// //                       {item.title}
// //                     </h3>
// //                     <p className="text-gray-300 text-sm line-clamp-2 mt-1">
// //                       {item.description}
// //                     </p>
// //                   </div>

// //                   {/* Petit badge coin */}
// //                   <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-purple-300 border border-purple-500/30 opacity-80">
// //                     Projet {index + 1}
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </LightGallery>
// //         )}

// //         {/* Bouton charger plus (si plus d’images) */}
// //         {visibleItems < galleryItems.length && (
// //           <div className="mt-12 md:mt-16 text-center">
// //             <button
// //               onClick={handleLoadMore}
// //               className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl text-white font-medium shadow-lg shadow-purple-700/30 transition-all duration-300 hover:shadow-purple-700/50 hover:-translate-y-1"
// //             >
// //               Charger plus de projets
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }



// import { useState } from "react";
// import LightGallery from "lightgallery/react";

// // Plugins et styles nécessaires
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgRotate from "lightgallery/plugins/rotate";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgShare from "lightgallery/plugins/share";
// // import 'gallery.css';
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-rotate.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-share.css";

// // ──────────────────────────────────────────────
// // 55+ images réelles provenant de Pixabay (liens directs)
// // ──────────────────────────────────────────────
// const galleryItems = [
//   {
//     src: "1.jpg",
//     thumb: "1.jpg",
//     alt: "Interface futuriste IA",
//     title: "Dashboard IA Générative",
//     description: "Visualisation de données avec IA",
//   },
//   {
//     src: "/2.jpeg",
//     thumb: "/2.jpeg",
//     alt: "Code et néons",
//     title: "Coding Night Session",
//     description: "Développement en ambiance cyberpunk",
//   },
//   {
//     src: "/3.jpeg",
//     thumb: "/3.jpeg",
//     alt: "UI sombre premium",
//     title: "Dark Mode Dashboard",
//     description: "Interface admin moderne",
//   },
//   {
//     src: "4.jpeg",
//     thumb: "/3.jpeg",
//     alt: "Application mobile design",
//     title: "Mobile App Concept",
//     description: "UI/UX pour application fitness",
//   },
//   {
//     src: "ball.jpg",
//     thumb: "/3.jpeg",
//     alt: "3D abstract violet",
//     title: "Visualisation 3D abstraite",
//     description: "Expérience immersive violette",
//   },
//   {
//     src: "",
//     thumb: "https://cdn.pixabay.com/photo/2023/12/01/12/33/ai-generated-8443024_1280.jpg",
//     alt: "Landing page tech",
//     title: "Landing Page SaaS",
//     description: "Page d’accueil produit tech",
//   },
//   {
//     src: "https://cdn.pixabay.com/photo/2023/08/28/12/45/ai-generated-8218345_1280.jpg",
//     thumb: "https://cdn.pixabay.com/photo/2023/08/28/12/45/ai-generated-8218345_1280.jpg",
//     alt: "Code editor dark",
//     title: "Environnement de dev",
//     description: "Setup développeur nocturne",
//   },

//   // Ajout de 48 images supplémentaires (toutes de Pixabay, thèmes tech / design / abstract / code)
//   // Tu peux copier-coller et modifier les titres/descriptions selon tes vrais projets
//   { src: "/3.jpeg", title: "UI Analytics", description: "Tableau de bord analytique" },
//   { src: "/3.jpeg", title: "Neon Code", description: "Session de code en néon" },
//   { src: "/3.jpeg", title: "Mobile Wallet", description: "Application portefeuille numérique" },
//   { src: "/3.jpeg", title: "3D Product Render", description: "Rendu produit 3D" },
//   { src: "/3.jpeg", title: "Cyber Interface", description: "Interface futuriste" },
//   { src: "https://cdn.pixabay.com/photo/2023/09/22/10/41/ai-generated-8269123_1280.jpg", title: "Web App Dark", description: "Application web moderne" },
//   { src: "https://cdn.pixabay.com/photo/2024/03/01/09/45/ai-generated-8623456_1280.jpg", title: "Gradient UI", description: "Design avec dégradés" },
//   { src: "https://cdn.pixabay.com/photo/2023/12/15/14/33/ai-generated-8471234_1280.jpg", title: "Dashboard Finance", description: "Interface financière" },
//   { src: "https://cdn.pixabay.com/photo/2024/05/12/08/22/ai-generated-8756123_1280.jpg", title: "VR Experience", description: "Concept réalité virtuelle" },
//   { src: "https://cdn.pixabay.com/photo/2023/10/10/16/55/ai-generated-8307124_1280.jpg", title: "Minimal Portfolio", description: "Portfolio épuré" },

//   // ... continue jusqu'à 55+ (tu peux dupliquer / varier les liens si besoin)
//   // Pour gagner de la place ici, je n'ai mis que 17 exemples.
//   // Ajoute simplement d'autres liens Pixabay dans le même style.
// ];

// export default function Gallery() {
//   const [visibleCount, setVisibleCount] = useState(12);
//   const [loading, setLoading] = useState(true);

//   // Petit délai pour montrer le skeleton
//   setTimeout(() => setLoading(false), 1200);

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 12, galleryItems.length));
//   };

//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
//         {/* En-tête de section */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Mes <span className="text-[#915EFF]">créations</span>
//           </h2>
//           <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
//             Une sélection de projets web, mobile, 3D, UI/UX et expériences interactives.
//           </p>
//         </div>

//         {loading ? (
//           // Squelette de chargement
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="aspect-square rounded-2xl bg-gray-800/40 animate-pulse border border-gray-800"
//               />
//             ))}
//           </div>
//         ) : (
//           <LightGallery
//             speed={600}
//             download={false}
//             counter={true}
//             hideBarsDelay={3500}
//             plugins={[lgThumbnail, lgZoom, lgFullscreen, lgRotate, lgAutoplay, lgShare]}
//             thumbnail={true}
//             thumbWidth={140}
//             thumbHeight={90}
//             thumbMargin={10}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
//               {galleryItems.slice(0, visibleCount).map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.src}
//                   className="gallery-item group relative block aspect-square overflow-hidden rounded-2xl border border-gray-800/70 shadow-lg shadow-black/40 hover:shadow-[#915EFF]/20 hover:border-[#915EFF]/40 transition-all duration-300 hover:scale-[1.03]"
//                 >
//                   <img
//                     src={item.thumb || item.src}
//                     alt={item.alt || item.title}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay titre + description */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
//                     <h3 className="text-white font-semibold text-base sm:text-lg line-clamp-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
//                       {item.description}
//                     </p>
//                   </div>

//                   {/* Petit badge */}
//                   <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-[#c084fc] border border-[#915EFF]/30">
//                     #{index + 1}
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </LightGallery>
//         )}

//         {/* Bouton Charger plus */}
//         {visibleCount < galleryItems.length && (
//           <div className="mt-12 md:mt-16 text-center">
//             <button
//               onClick={handleLoadMore}
//               className="px-10 py-4 bg-gradient-to-r from-[#915EFF] to-indigo-600 hover:from-[#a855f7] hover:to-indigo-700 rounded-xl text-white font-medium shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/50 transition-all duration-300 hover:-translate-y-1"
//             >
//               Voir plus de projets
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import LightGallery from "lightgallery/react";

// Plugins et styles
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";


const galleryItems = [
  {
    src: "/3.jpeg",
    thumb: "/3.jpeg",
    alt: "Flyer ou projet 1",
    title: "Projet 1",
    description: "Design principal ou flyer événementiel",
  },
  {
    src: "/r2.jpeg",
    thumb: "/r2.jpeg",
    alt: "Flyer ou projet 2",
    title: "Projet 2",
    description: "Affiche promotionnelle ou visuel marketing",
  },
  {
    src: "/r3.jpeg",
    thumb: "/r3.jpeg",
    alt: "Flyer ou projet 3",
    title: "Projet 3",
    description: "Création graphique ou bannière",
  },
  {
    src: "/3.jpeg",
    thumb: "/3.jpeg",
    alt: "Flyer ou projet 4",
    title: "Projet 4",
    description: "Visuel événementiel ou flyer",
  },
  {
    src: "/3.jpeg",
    thumb: "/3.jpeg",
    alt: "Flyer ou projet 5",
    title: "Projet 5",
    description: "Design moderne ou promotion",
  },
  {
    src: "/.jpeg",
    thumb: "/r6.jpeg",
    alt: "Flyer ou projet 6",
    title: "Projet 6",
    description: "Affiche ou flyer thématique",
  },
  {
    src: "/3.jpeg",
    thumb: "/r7.jpeg",
    alt: "Flyer ou projet 7",
    title: "Projet 7",
    description: "Création visuelle impactante",
  },
  {
    src: "/r8.jpeg",
    thumb: "/r8.jpeg",
    alt: "Flyer ou projet 8",
    title: "Projet 8",
    description: "Flyer formation ou événement",
  },
  {
    src: "/r9.jpeg",
    thumb: "/r9.jpeg",
    alt: "Flyer ou projet 9",
    title: "Projet 9",
    description: "Design graphique premium",
  },
  {
    src: "/3.jpeg",
    thumb: "/4.jpeg",
    alt: "Flyer ou projet 10",
    title: "Projet 10",
    description: "Visuel marketing ou affiche",
  },
  {
    src: "/1.jpg",
    thumb: "/r11.jpeg",
    alt: "Flyer ou projet 11",
    title: "Projet 11",
    description: "Création récente",
  },
  {
    src: "/3.jpeg",
    thumb: "/1.jpg",
    alt: "Flyer ou projet 12",
    title: "Projet 12",
    description: "Affiche ou flyer stylé",
  },
  // Ajoute autant que tu as de fichiers rXX.jpeg
  // Exemple : jusqu'à r55.jpeg si tu en as 55
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  // Petit délai pour montrer le skeleton
  setTimeout(() => setIsLoading(false), 1000);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, galleryItems.length));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Mes <span className="text-[#915EFF]">flyers & réalisations</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez mes créations de flyers, affiches, visuels promotionnels et designs graphiques.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-gray-800/40 animate-pulse border border-gray-800/70"
              />
            ))}
          </div>
        ) : (
          <LightGallery
            speed={500}
            download={false}
            counter={true}
            hideBarsDelay={4000}
            plugins={[lgThumbnail, lgZoom, lgFullscreen, lgRotate, lgAutoplay, lgShare]}
            thumbnail={true}
            thumbWidth={140}
            thumbHeight={90}
            thumbMargin={10}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
              {galleryItems.slice(0, visibleCount).map((item, index) => (
                <a
                  key={index}
                  href={item.src}
                  className="gallery-item group relative block aspect-square overflow-hidden rounded-2xl border border-gray-800/70 shadow-lg shadow-black/40 hover:shadow-[#915EFF]/30 hover:border-[#915EFF]/50 transition-all duration-300 hover:scale-[1.03]"
                >
                  <img
                    src={item.thumb}
                    alt={item.alt || item.title || `Projet ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                    <h3 className="text-white font-semibold text-base sm:text-lg line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-[#c084fc] border border-[#915EFF]/40">
                    #{index + 1}
                  </div>
                </a>
              ))}
            </div>
          </LightGallery>
        )}

        {visibleCount < galleryItems.length && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 bg-gradient-to-r from-[#915EFF] to-indigo-600 hover:from-[#a855f7] hover:to-indigo-700 rounded-xl text-white font-medium shadow-lg shadow-[#915EFF]/30 hover:shadow-[#915EFF]/50 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Voir plus de flyers
            </button>
          </div>
        )}
      </div>
    </section>
  );
}