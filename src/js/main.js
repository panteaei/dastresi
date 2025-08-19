// menu data
import { initCountdown } from "./homePage/countdown";
import menu from "./Menu/menu";
// swiper 
import { initSwipers } from "./swiper/mySwiper";
// Wait for FULL page load (including images/styles)
window.addEventListener("load", () => {
  menu(); // Initialize menu first
  initSwipers(); // Then Swiper

});
// initCountdown()
