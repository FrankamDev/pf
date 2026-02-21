// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { Menu, X } from "lucide-react";

// // const navLinks = [
// //   { id: "acceuil", title: "Acceuil" },
// //   { id: "pricing", title: "Tarifs" },
// //   { id: "project", title: "Projets" },
// //   { id: "contact", title: "Contact" },
// // ];

// // const Navbar = () => {
// //     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [hideNav, setHideNav] = useState(false);
// //   let lastScrollY = 0;

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setHideNav(currentScrollY > lastScrollY && currentScrollY > 50);
// //       lastScrollY = currentScrollY;
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const [active, setActive] = useState("");
// //   const [toggle, setToggle] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 80);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const handleLinkClick = (title) => {
// //     setActive(title);
// //     setToggle(false);
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
// //         scrolled
// //           ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/30"
// //           : "bg-slate-950/30 backdrop-blur-lg border-b border-slate-800/30"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16 md:h-18">
// //           {/* Logo */}
// //           <Link
// //             to="/"
// //             className="flex items-center gap-3 group"
// //             onClick={() => {
// //               setActive("");
// //               window.scrollTo(0, 0);
// //             }}
// //           >
// //             <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
// //               <span className="text-white">Frankam</span>
// //               <span className="text-cyan-400">Dev</span>
// //             </span>
// //           </Link>

// //           {/* Menu desktop */}
// //           <div className="hidden md:flex items-center gap-10 lg:gap-12">
// //             {navLinks.map((nav) => (
// //               <a
// //                 key={nav.id}
// //                 href={`#${nav.id}`}
// //                 className={`
// //                   text-base font-medium transition-all duration-300 relative group
// //                   ${active === nav.title
// //                     ? "text-cyan-400"
// //                     : "text-gray-200 hover:text-white"}
// //                 `}
// //                 onClick={() => setActive(nav.title)}
// //               >
// //                 {nav.title}
// //                 <span
// //                   className={`
// //                     absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300
// //                     ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
// //                   `}
// //                 />
// //               </a>
// //             ))}
// //           </div>

// //           {/* Burger button mobile */}
// //           <button
// //             className="md:hidden p-3 rounded-full hover:bg-slate-800/60 transition-all duration-200 active:scale-95"
// //             onClick={() => setToggle(!toggle)}
// //             aria-label="Menu mobile"
// //           >
// //             {toggle ? <X className="w-7 h-7 text-cyan-300" /> : <Menu className="w-7 h-7 text-cyan-300" />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Menu mobile - slide depuis la droite */}
// //       <div
// //         className={`
// //           md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400
// //           ${toggle ? "opacity-100" : "opacity-0 pointer-events-none"}
// //         `}
// //         onClick={() => setToggle(false)}
// //       >
// //         <div
// //           className={`
// //             absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800
// //             transition-transform duration-500 ease-in-out
// //             ${toggle ? "translate-x-0" : "translate-x-full"}
// //           `}
// //           onClick={(e) => e.stopPropagation()}
// //         >
// //           <div className="flex flex-col h-full">
// //             {/* Header */}
// //             <div className="flex items-center justify-between p-6 border-b border-slate-800/60">
// //               <span className="text-xl font-bold">
// //                 <span className="text-white">Frankam</span>
// //                 <span className="text-cyan-400">Dev</span>
// //               </span>
// //               <button
// //                 onClick={() => setToggle(false)}
// //                 className="p-2 rounded-full hover:bg-slate-800/60 transition"
// //               >
// //                 <X className="w-7 h-7 text-gray-300" />
// //               </button>
// //             </div>

// //             {/* Liens */}
// //             <div className="flex-1 overflow-y-auto py-12 px-6 space-y-4 text-xl">
// //               {navLinks.map((nav) => (
// //                 <a
// //                   key={nav.id}
// //                   href={`#${nav.id}`}
// //                   className={`
// //                     block px-6 py-4 font-medium rounded-xl transition duration-300
// //                     ${active === nav.title
// //                       ? "bg-slate-800/70 text-cyan-400"
// //                       : "text-gray-200 hover:bg-slate-800/50 hover:text-white"}
// //                   `}
// //                   onClick={() => handleLinkClick(nav.title)}
// //                 >
// //                   {nav.title}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { id: "acceuil", title: "Accueil" },
//   { id: "apropos", title: "A propos" },
//   { id: "projet", title: "Projet" },
//   { id: "contact", title: "Contact" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [active, setActive] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const [visible, setVisible] = useState(true);

//   // Pour détecter la direction du scroll
//   let lastScrollY = window.scrollY;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // On a scrollé vers le bas ET on est assez bas sur la page
//       if (currentScrollY > lastScrollY && currentScrollY > 120) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       // Mise à jour du style "scrolled"
//       setScrolled(currentScrollY > 80);

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = (title) => {
//     setActive(title);
//     setMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <nav
//       className={`
//         fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
//         ${
//           visible
//             ? "translate-y-0"
//             : "-translate-y-full"
//         }
//         ${
//           scrolled
//             ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/40"
//             : "bg-slate-950/40 backdrop-blur-lg border-b border-slate-800/40"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-18">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center gap-3 group"
//             onClick={() => {
//               setActive("");
//               window.scrollTo(0, 0);
//             }}
//           >
//             <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
//               <span className="text-white">Frankam</span>
//               <span className="text-cyan-400">Dev</span>
//             </span>
//           </Link>

//           {/* Menu desktop */}
//           <div className="hidden md:flex items-center gap-10 lg:gap-12">
//             {navLinks.map((nav) => (
//               <a
//                 key={nav.id}
//                 href={`#${nav.id}`}
//                 className={`
//                   text-base font-medium transition-all duration-300 relative group
//                   ${active === nav.title ? "text-cyan-400" : "text-gray-200 hover:text-white"}
//                 `}
//                 onClick={() => setActive(nav.title)}
//               >
//                 {nav.title}
//                 <span
//                   className={`
//                     absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300
//                     ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
//                   `}
//                 />
//               </a>
//             ))}
//           </div>

//           {/* Burger button mobile */}
//           <button
//             className="md:hidden p-3   rounded-full hover:bg-slate-800/60 transition-all duration-200 active:scale-95"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Menu mobile"
//           >
//             {mobileMenuOpen ? (
//               <X className="w-7 h-7 text-cyan-300" />
//             ) : (
//               <Menu className="w-7 h-7 text-cyan-300" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Menu mobile */}
//       <div
//         className={`
//           md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400
//           ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
//         `}
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         <div
//           className={`
//             absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800
//             transition-transform duration-500 ease-in-out
//             ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
//           `}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex flex-col h-full">
//             {/* Header */}
//             <div className="flex items-center justify-between p-6 border-b border-slate-800/60">
//               <span className="text-xl font-bold">
//                 <span className="text-white">Frankam</span>
//                 <span className="text-cyan-400">Dev</span>
//               </span>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="p-2 rounded-full hover:bg-slate-800/60 transition"
//               >
//                 <X className="w-7 h-7 text-gray-300" />
//               </button>
//             </div>

//             {/* Liens */}
//             <div className="flex-1 overflow-y-auto py-12 px-6 space-y-4 text-xl">
//               {navLinks.map((nav) => (
//                 <a
//                   key={nav.id}
//                   href={`#${nav.id}`}
//                   className={`
//                     block px-6 py-4 font-medium rounded-xl transition duration-300
//                     ${active === nav.title
//                       ? "bg-slate-800/70 text-cyan-400"
//                       : "text-gray-200 hover:bg-slate-800/50 hover:text-white"}
//                   `}
//                   onClick={() => handleLinkClick(nav.title)}
//                 >
//                   {nav.title}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "acceuil", title: "Accueil" },
  { id: "about", title: "À propos" },
  { id: "infographie", title: "Infographie" },
  { id: "project", title: "Projets" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Accueil");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Gestion de la visibilité (hide on scroll down)
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Gestion du style au scroll
      setScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50 py-3 shadow-lg"
            : "bg-transparent py-5"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 group z-[110]"
            onClick={() => {
              setActive("Accueil");
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-black text-xl">F</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Frankam<span className="text-cyan-400">Dev</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`
                  text-sm font-medium transition-all duration-300 relative py-2
                  ${active === nav.title ? "text-cyan-400" : "text-gray-300 hover:text-white"}
                `}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
                <span
                  className={`
                    absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300
                    ${active === nav.title ? "w-full" : "w-0"}
                  `}
                />
              </a>
            ))}
            
            {/* Bouton d'action optionnel pour équilibrer le design */}
            <button className="ml-4 px-5 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-all">
              Démarrer un projet
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden z-[110] p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`
          md:hidden fixed inset-0 h-screen bg-slate-950/98 backdrop-blur-2xl
          transition-all duration-500 ease-in-out flex flex-col justify-center items-center
          ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((nav, index) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`
                text-3xl font-bold transition-all transform
                ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                ${active === nav.title ? "text-cyan-400" : "text-white"}
              `}
              onClick={() => {
                setActive(nav.title);
                setMobileMenuOpen(false);
              }}
            >
              {nav.title}
            </a>
          ))}
          
          {/* <button className="mt-4 px-8 py-3 bg-cyan-500 text-white rounded-full font-bold">
            Démarrer un projet
          </button> */}
          <button className="ml-4 px-5 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-all">
              Démarrer un projet
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;