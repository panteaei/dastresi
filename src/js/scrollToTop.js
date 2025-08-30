export default function initScrollToTop() {
  let goUp = document.querySelector(".scrollToTop");
  goUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
