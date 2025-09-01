export default function initFavoriteProducts() {
  async function fetchData() {
    let favoriteProducts = [];
    try {
      let data = await fetch("https://panteaei.github.io/jsonDastresi/db.json");
      let res = await data.json();
      let favoriteProductsData = await res.favoriteProducts;
      console.log(favoriteProductsData);

      favoriteProducts = favoriteProductsData.map((item) => {
        return `     <!-- item ${item.id}  -->
                  <div class="swiper-slide">
                    <a href="#" class="block bg-[#FAFAFA]"
                      ><img
                        src="${item.url}"
                        alt="${item.alt}"
                    /></a>
                  </div>`;
      });
    } catch (error) {
      console.log(error.message);
    }
    document.querySelector(".favoriteProducts").innerHTML =
      favoriteProducts.join("");
  }

  fetchData();
}
