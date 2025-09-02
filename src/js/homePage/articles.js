export default function initArticles() {
  async function fetchData() {
    let articles = [];

    try {
      let data = await fetch("https://panteaei.github.io/jsonDastresi/db.json");
      let res = await data.json();
      let articleData = await res.articles;
      console.log(articleData);
      articles = articleData.map((item) => {
        return `     <!-- card ${item.id}  -->
                  <div class="swiper-slide !bg-transparent">
                    <a class="shadow bg-white rounded-[11px] flex flex-col overflow-hidden gap-2 my-0.5" href="${item.link}">
                      <img
                      class="rounded-b-lg"
                        src="${item.imgUrl}"
                        alt="${item.alt}"
                      />
                      <span class="lg:leading-7 leading-8 text-xs md:text-sm h-16 px-4 text-black text-center line-clamp-2 hover:text-blue-800 transition-colors"
                        >${item.title}
                        </span
                      >
                    </a>
                  </div>`;
      });
      document.querySelector(".articleCards").innerHTML = articles.join("");
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchData();
}
