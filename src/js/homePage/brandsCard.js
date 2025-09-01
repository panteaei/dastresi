export default function initBrandsCards() {
  async function fetchData() {
    let brandsCards = [];

    try {
      let data = await fetch("https://panteaei.github.io/jsonDastresi/db.json");
      let res = await data.json();
      let brandsCardsData = await res.brandsCards;
      console.log(brandsCardsData);

      brandsCards = brandsCardsData.map((item) => {
        return `     <!-- card ${item.id}  -->
                  <div class="swiper-slide !bg-transparent">
                    <a href="${item.link}" class="my-4 p-2 flex justify-center items-center bg-white shadow rounded-[11px] translate-0 hover:-translate-y-2 transition-transform">
                      <img
                      class="!w-[96px] !h-[96px]"
                        src="${item.imgUrl}"
                        alt="${item.alt}"
                      />
                     
                    </a>
                  </div>`;
      });
      document.querySelector(".brandsCards").innerHTML = brandsCards.join("");
    } catch (error) {
      console.log(error.message);
    }
  }

  fetchData();
}
