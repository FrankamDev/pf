import { motion } from "framer-motion";
import { styles } from "../styles";
import Gallery from "./Gallery";
import Particles from "./Particles";

const Hero = () => {
  return (
    <>
    <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles

          particleColors={["#ffffff", "#60a5fa", "#38bdf8", "#a5b4fc"]}
          particleCount={600}
          particleSpread={25}
          speed={0.08}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={window.devicePixelRatio || 1}
        />
      </div>
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-950 via-indigo-950/30 to-gray-950 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20">
      {/* Fond décoratif subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-10 sm:top-20 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute right-0 bottom-0 sm:-bottom-20 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* ==================== GAUCHE : PHOTO ==================== */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="relative group w-72 sm:w-80 md:w-[420px] lg:w-[460px] xl:w-[520px]">
              {/* Glow / halo */}
              <div className="absolute -inset-5 bg-gradient-to-tr from-purple-600/35 via-indigo-500/25 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Carte photo */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900/70 to-gray-950/80 backdrop-blur-md shadow-2xl shadow-black/60">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 z-10 pointer-events-none"></div>

                <img
                  src="/img/mee.png"
                  alt="Frank Kamgang - Développeur"
                  className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-[1.5deg]"
                  loading="eager"
                />

                {/* Badge */}
                <div className="absolute bottom-5 right-5 z-20 px-5 py-1.5 bg-black/65 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-purple-300 shadow-lg">
                  Développeur Full-Stack
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================== DROITE : TEXTE ==================== */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left space-y-8 md:space-y-10"
          >
            <div className="flex items-start gap-5 justify-center lg:justify-start">
              <div className="flex flex-col items-center mt-4 lg:mt-6">
                <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                <div className="w-1 h-48 sm:h-64 lg:h-80 violet-gradient" />
              </div>

              <div className="space-y-6 md:space-y-8">
                <h1 className={`${styles.heroHeadText} text-white leading-tight tracking-tight`}>
                  Salut, je suis{" "}
                  <span className="text-[#915EFF]">Frank Kamgang</span>
                </h1>

                <p className={`${styles.heroSubText} mt-4 text-gray-200 max-w-3xl leading-relaxed`}>
                  Je crée des expériences numériques modernes : interfaces utilisateur soignées, animations 3D immersives et applications web performantes.
                </p>

                <p className="text-lg md:text-xl text-gray-400 font-light">
                  React • Next.js • Three.js • TypeScript • Tailwind • UI/UX
                </p>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-wrap gap-5 md:gap-6 justify-center lg:justify-start pt-4 md:pt-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#915EFF] to-indigo-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center gap-3"
              >
                Voir mes projets
                <svg
                  className="w-5 h-5 group-hover:translate-x-1.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/15 hover:border-white/30 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-1"
                >
                Me contacter
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-8 bottom-10 left-0 right-0 flex justify-center items-center z-10">
        <a href="#about" aria-label="Aller à la section À propos">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>
  
    </section>
              </>
  );
};

export default Hero;
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-between">
//       <div
//         className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-row items-start gap-3 sm:gap-5 mt-20 sm:mt-24`}
//       >
//         <div className="flex flex-col justify-center items-center mt-2">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div className="flex-1">
//           <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
//             Hey, je suis <br className="sm:hidden" />{" "}
//             <span className="text-[#915EFF]">Frank Kamgang</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-3 sm:mt-4 text-white-100`}>
//             Je développe des visuels 3D, des interfaces utilisateur
//             <br className="sm:block hidden" /> et des applications web
//           </p>
//         </div>
//       </div>

// <div className="w-full flex justify-center mt-10">
//   <a
//     href="./assets/cv.pdf"
//     download
//     className="text-cyan-300 text-2xl font-bold"
//   >
//     <span className="font-boder">Télécharger</span> le CV
//     <img src="./assets/downloadd.png" alt="download" className="ml-2" />
//   </a>
// </div>

//       {/* Image */}
//       <div className="w-full flex justify-center mt-10">
//         <ComputersCanvas />
//         <img
//           src="/oki.jpg"
//           alt="Photo"
//           className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto object-cover rounded-xl shadow-2xl"
//         />
//       </div>

//       {/* Scroll indicator */}
//       <div className="w-full flex justify-center items-center mb-6">
//         <a href="#about" aria-label="Scroll to About section">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
