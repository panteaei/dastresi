export default function initArticles() {
  async function fetchData() {
    let articles = [];

    try {
      let data = await fetch("http://localhost:3000/articles");
      let res = await data.json();
      console.log(res);
      articles = res.map((item) => {
        return `     <!-- card ${item.id}  -->
                  <div class="swiper-slide !bg-transparent sm:!flex sm:!justify-center 1177:!block  ">
                    <a class="shadow bg-white rounded-[11px] flex flex-col overflow-hidden gap-2 xl:w-[278px] 1177:w-[250px] lg:w-[86%] md:w-[70%] sm:w-[80%]   my-0.5 " href="${item.link}">
                      <img
                      class="rounded-b-lg"
                        src="${item.imgUrl}"
                        alt="${item.alt}"
                      />
                      <span class="leading-7 text-xs md:text-sm h-16 px-4 text-black text-center line-clamp-2 hover:text-blue-800 transition-colors"
                        >${item.title}
                        </span
                      >
                    </a>
                  </div>`;
      });
      document.querySelector(".articleCards").innerHTML = articles;
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchData();
}
