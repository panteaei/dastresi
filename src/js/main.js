// menu data 
import menu from "./Menu/menu";

import { initSwipers } from "./swiper/mySwiper";
// Wait for FULL page load (including images/styles)
window.addEventListener('load', () => {
  menu();      // Initialize menu first
  initSwipers(); // Then Swiper
});
 initSwipers(); // Then Swiper
