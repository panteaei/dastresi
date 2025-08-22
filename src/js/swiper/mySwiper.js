// swiper
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function initSwipers() {
  // Initialize each slider differently

  // init Swiper banner homePage:
  const swiper1 = new Swiper(".mySwiper1", {
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
  // init Swiper favorites homePage:
  const swiper2 = new Swiper(".mySwiper2", {
    // configure Swiper to use modules
    modules: [Navigation, Autoplay],
 loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
        breakpoints: {
          
        380: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
           447: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
              600: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
           843: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
    navigation: {
      nextEl: ".swiper-favorites-button-next",
      prevEl: ".swiper-favorites-button-prev",
    },
  });
    // init Swiper stock homePage:
  const swiper3 = new Swiper(".mySwiper3", {
    // configure Swiper to use modules
    modules: [Navigation, Autoplay],
 loop:true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
        breakpoints: {
          
             380: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
             472: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        776: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
     
           891: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    navigation: {
      nextEl: ".swiper-stock-button-next",
      prevEl: ".swiper-stock-button-prev",
    },
  });
}
