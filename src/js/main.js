import bannerData from "./homePage/banner";
import initCountdown from "./homePage/countdown";
import discountProductsData from "./homePage/discountProducts";
import initFavoriteProducts from "./homePage/favoriteProducts";
import initMostSaledProducts from "./homePage/mostSaledProducts";
import initStockProducts from "./homePage/stockProducts";
import menu from "./Menu/menu";
import initSwipers from "./swiper/mySwiper";
import initBrandsCards from "./homePage/brandsCard";
import initArticles from "./homePage/articles";
import initScrollToTop from "./scrollToTop";


// Wait for FULL page load (including images/styles)
window.addEventListener("load", () => {
  menu(); // Initialize menu first
  initSwipers(); // Then Swiper ...
  initCountdown();
  bannerData();
  discountProductsData();
  initFavoriteProducts();
  initStockProducts();
  initMostSaledProducts();
  initBrandsCards();
  initArticles();
initScrollToTop();

});
