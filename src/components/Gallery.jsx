// import LightGallery from "lightgallery/react";
// import "./gallery.css";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-rotate.css";
// import "lightgallery/css/lg-share.css";

// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgRotate from "lightgallery/plugins/rotate";
// import lgShare from "lightgallery/plugins/share";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

// const images = [
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/3.jpeg", alt: "image-1" },
//   { src: "/4.jpeg", alt: "image-1" },
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/3.jpeg", alt: "image-1" },
//   { src: "/4.jpeg", alt: "image-1" },
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/3.jpeg", alt: "image-1" },
//   { src: "/4.jpeg", alt: "image-1" },
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/3.jpeg", alt: "image-1" },
//   { src: "/4.jpeg", alt: "image-1" },
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/3.jpeg", alt: "image-1" },
//   { src: "/4.jpeg", alt: "image-1" },
//   { src: "/1.jpg", alt: "image-1" },
//   { src: "/2.jpeg", alt: "image-1" },
//   { src: "/3.jpeg", alt: "image-1" },
//   { src: "/4.jpeg", alt: "image-1" },

// ];

// export default function Gallery() {
//   return (
    // <LightGallery
    //   speed={500}
    //   plugins={[
    //     lgThumbnail,
    //     lgRotate,
    //     lgShare,
    //     lgAutoplay,
    //     lgFullscreen,
    //     lgZoom
    //   ]}
    // >
    //   {images.map((image, index) => (
    //     <a key={index} href={image.src}>
    //       <img src={image.src} alt={image.alt} />
    //     </a>
    //   ))}
    // </LightGallery>
//   );
// }



import LightGallery from "lightgallery/react";

// Styles LightGallery (tous les plugins que tu utilises)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";


import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";


 import "./gallery.css";

const images = [
  { src: "/1.jpg", alt: "Image 1" },
  { src: "/2.jpeg", alt: "Image 2" },
  { src: "/3.jpeg", alt: "Image 3" },
  { src: "/4.jpeg", alt: "Image 4" },
  { src: "/1.jpg", alt: "Image 5" },
  { src: "/2.jpeg", alt: "Image 6" },
  { src: "/3.jpeg", alt: "Image 7" },
  { src: "/4.jpeg", alt: "Image 8" },
  { src: "/1.jpg", alt: "Image 9" },
  { src: "/2.jpeg", alt: "Image 10" },
  { src: "/3.jpeg", alt: "Image 11" },
  { src: "/4.jpeg", alt: "Image 12" },
  { src: "/1.jpg", alt: "Image 13" },
  { src: "/2.jpeg", alt: "Image 14" },
  { src: "/1.jpg", alt: "Image 15" },
  { src: "/2.jpeg", alt: "Image 16" },
  { src: "/3.jpeg", alt: "Image 17" },
  { src: "/4.jpeg", alt: "Image 18" },
  { src: "/1.jpg", alt: "Image 19" },
  { src: "/2.jpeg", alt: "Image 20" },
  { src: "/3.jpeg", alt: "Image 21" },
  { src: "/4.jpeg", alt: "Image 22" },
  { src: "/1.jpg", alt: "Image 23" },
  { src: "/2.jpeg", alt: "Image 24" },
  { src: "/3.jpeg", alt: "Image 25" },
  { src: "/4.jpeg", alt: "Image 26" },
];

export default function Gallery() {
  return (
    <section className="py-8 md:py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="  px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Réalisations <br/> <span>&</span> <br/> <span className="text-blue-400">Affiches</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Clique sur une image pour l’agrandir
          </p>
        </div>

        <LightGallery
      speed={500}
      plugins={[
        lgThumbnail,
        lgRotate,
        lgShare,
        lgAutoplay,
        lgFullscreen,
        lgZoom
      ]}
    >
      {images.map((image, index) => (
        <a className="" key={index} href={image.src}>
          <img src={image.src} alt={image.alt} />
        </a>
      ))}
    </LightGallery>
      </div>
    </section>
  );
}