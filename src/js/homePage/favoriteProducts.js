export default function initFavoriteProducts() {
  async function fetchData() {
    let favoriteProducts = [];
    try {
      let data = await fetch("http://localhost:3000/favoriteProducts");
      let res = await data.json();
      console.log(res)

      favoriteProducts = res.map((item)=>{
return `     <!-- item ${item.id}  -->
                  <div class="swiper-slide">
                    <a href="#" class="block bg-[#FAFAFA]"
                      ><img
                        src="${item.url}"
                        alt="${item.alt}"
                    /></a>
                  </div>`
      })



    } catch (error) {
      console.log(error.message);
    }
    document.querySelector(".favoriteProducts").innerHTML = favoriteProducts.join("")
  }

  fetchData();
}
