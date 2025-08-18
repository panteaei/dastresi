// swiper
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function initSwipers() {
  // Initialize each slider differently

  // init Swiper:
  const swiper = new Swiper(".mySwiper1", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay, EffectFade],

    // Optional parameters

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   
     
    },
      effect: "fade",
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });
}
