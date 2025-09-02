import menu from "./Menu/menu.js";
import bannerData from "./homePage/banner.js";
import initCountdown from "./homePage/countdown.js";
import discountProductsData from "./homePage/discountProducts.js";
import initFavoriteProducts from "./homePage/favoriteProducts.js";
import initMostSaledProducts from "./homePage/mostSaledProducts.js";
import initStockProducts from "./homePage/stockProducts.js";
import initSwipers from "./swiper/mySwiper.js";
import initBrandsCards from "./homePage/brandsCard.js";
import initArticles from "./homePage/articles.js";
import initScrollToTop from "./scrollToTop.js";

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
