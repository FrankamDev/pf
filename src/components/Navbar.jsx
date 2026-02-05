// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { id: "acceuil", title: "Acceuil" },
//   { id: "pricing", title: "Tarifs" },
//   { id: "project", title: "Projets" },
//   { id: "contact", title: "Contact" },
// ];

// const Navbar = () => {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [hideNav, setHideNav] = useState(false);
//   let lastScrollY = 0;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setHideNav(currentScrollY > lastScrollY && currentScrollY > 50);
//       lastScrollY = currentScrollY;
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = (title) => {
//     setActive(title);
//     setToggle(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
//         scrolled
//           ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/30"
//           : "bg-slate-950/30 backdrop-blur-lg border-b border-slate-800/30"
//       }`}
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
//                   ${active === nav.title
//                     ? "text-cyan-400"
//                     : "text-gray-200 hover:text-white"}
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
//             className="md:hidden p-3 rounded-full hover:bg-slate-800/60 transition-all duration-200 active:scale-95"
//             onClick={() => setToggle(!toggle)}
//             aria-label="Menu mobile"
//           >
//             {toggle ? <X className="w-7 h-7 text-cyan-300" /> : <Menu className="w-7 h-7 text-cyan-300" />}
//           </button>
//         </div>
//       </div>

//       {/* Menu mobile - slide depuis la droite */}
//       <div
//         className={`
//           md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400
//           ${toggle ? "opacity-100" : "opacity-0 pointer-events-none"}
//         `}
//         onClick={() => setToggle(false)}
//       >
//         <div
//           className={`
//             absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800
//             transition-transform duration-500 ease-in-out
//             ${toggle ? "translate-x-0" : "translate-x-full"}
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
//                 onClick={() => setToggle(false)}
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
  { id: "apropos", title: "A propos" },
  { id: "projet", title: "Projet" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  // Pour détecter la direction du scroll
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // On a scrollé vers le bas ET on est assez bas sur la page
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Mise à jour du style "scrolled"
      setScrolled(currentScrollY > 80);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (title) => {
    setActive(title);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${
          visible
            ? "translate-y-0"
            : "-translate-y-full"
        }
        ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/40"
            : "bg-slate-950/40 backdrop-blur-lg border-b border-slate-800/40"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-white">Frankam</span>
              <span className="text-cyan-400">Dev</span>
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`
                  text-base font-medium transition-all duration-300 relative group
                  ${active === nav.title ? "text-cyan-400" : "text-gray-200 hover:text-white"}
                `}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300
                    ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            ))}
          </div>

          {/* Burger button mobile */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-slate-800/60 transition-all duration-200 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu mobile"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-cyan-300" />
            ) : (
              <Menu className="w-7 h-7 text-cyan-300" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400
          ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`
            absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800
            transition-transform duration-500 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800/60">
              <span className="text-xl font-bold">
                <span className="text-white">Frankam</span>
                <span className="text-cyan-400">Dev</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800/60 transition"
              >
                <X className="w-7 h-7 text-gray-300" />
              </button>
            </div>

            {/* Liens */}
            <div className="flex-1 overflow-y-auto py-12 px-6 space-y-4 text-xl">
              {navLinks.map((nav) => (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  className={`
                    block px-6 py-4 font-medium rounded-xl transition duration-300
                    ${active === nav.title
                      ? "bg-slate-800/70 text-cyan-400"
                      : "text-gray-200 hover:bg-slate-800/50 hover:text-white"}
                  `}
                  onClick={() => handleLinkClick(nav.title)}
                >
                  {nav.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;