export default function initStockProducts() {
  async function fetchData() {
    let stockProducts = [];

    try {
      let data = await fetch("https://panteaei.github.io/jsonDastresi/db.json");
      let res = await data.json();
      let stockProductsData = await res.stockProducts;
      console.log(stockProductsData);

      stockProducts = stockProductsData.map((item) => {
        // رنگ‌ها
        let colorCircles = "";
        if (item.colors && item.colors.length > 0) {
          colorCircles = item.colors
            .map(
              (color) =>
                `<div class="w-3 h-3 m-1 rounded-full border border-gray-200 ${color}"></div>`
            )
            .join("");
        }

        return `
          <div class="swiper-slide !bg-[#E2E2E2]">
            <a
              href="${item.link}"
              class="bg-[#FAFAFA] shadow group flex flex-col rounded-[11px] overflow-hidden relative "
            >
              <!-- colored circles -->
              <div class="md:flex flex-col absolute left-0 p-1 m-0 md:m-2">
                ${colorCircles}
              </div>

              <img src="${item.imgUrl}" alt="${item.alt || ""}" />

              <div class="p-2 bg-white">
                <h5 class="text-xs text-gray-400 mb-0 md:mb-2 block">
                  ${item.title}
                </h5>
                <p class="line-clamp-1 leading-7 text-sm text-gray-600 group-hover:text-blue-700 transition-colors">
                  ${item.about}
                </p>
              </div>

              <!-- قیمت -->
              <div class="w-full h-[26px] bg-white text-left px-4">
                ${
                  item.offer && item.available
                    ? `<span class="text-gray-400 text-sm h-5 font-number relative">
                        ${item.price}
                        <span class="w-full h-[1px] bg-gray-400 absolute left-0 right-0 top-3.5"></span>
                      </span>`
                    : ""
                }
              </div>

              <div class="flex flex-row items-center md:justify-end justify-center py-5 px-2 md:px-4 bg-white ${
                !item.available ? "hidden" : ""
              }">
                <span class="text-blue-900 font-number font-bold text-lg">
                  ${item.offerPrice || item.price}
                </span>
                <span class="text-gray-800 text-xs mr-1">${item.priceTag}</span>
              </div>

              <!-- وضعیت موجودی -->
              <div class="border-gray-100 border-t bg-red-100 text-red-800 text-sm rounded-b-xl py-6 ${
                item.available ? "hidden" : ""
              }">
                <span>ناموجود</span>
              </div>
            </a>
          </div>`;
      });

      document.querySelector(".stockProducts").innerHTML =
        stockProducts.join("");
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchData();
}
