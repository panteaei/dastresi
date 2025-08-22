export default function discountProductsData() {
  async function fetchData() {
    let discountProducts = [];
    try {
      let data = await fetch("http://localhost:3000/discountProducts");
      let res = await data.json();
      console.log(res);
      discountProducts = res.map((item) => {
        if (item.id < 2) {
          return `      <!-- item ${item.id}  -->
              <a
                href="${item.link}"
                class="lg:row-span-3 lg:col-span-1 col-span-3 row-span-1 rounded-[11px] xs:h-[192px] h-[212px] sm:h-auto p-4 bg-white shadow hover:shadow-2xl transition-shadow lg:block flex justify-between gap-2 xs:gap-0"
              >
                <div class="w-40 h-full lg:w-auto lg:h-auto flex items-center">
                  <img
                    class="w-full h-40 lg:h-full"
                    src="${item.imgUrl}"
                    alt="${item.alt}"
                  />
                </div>
                <div class="w-[46%] xs:w-[62%] sm:w-auto">
                  <h3
                    class="lg:line-clamp-2 xs:line-clamp-1 line-clamp-3 mb-3 xs:mb-0 font-estedadMedium xs:text-[16px] text-[14px] text-gray-600 xs:my-5 leading-8 h-[84px] xs:h-auto lg:h-[110px] sm:text-right text-center"
                  >
                   ${item.title}
                  </h3>
                  <div class="flex justify-between items-center gap-2 xs:gap-0">
                    <span class="font-number relative text-gray-400"
                      >${item.firstPrice}
                      <span
                        class="w-full h-[1px] bg-gray-400 absolute left-0 right-0 top-3.5"
                      ></span>
                    </span>
                    <span
                      class="text-red-500 font-estedadMedium xs:text-[14px] text-[12px]"
                      ><span class="font-number">${item.offerPrice}</span> ${item.offerTag}
                      </span
                    >
                  </div>
                  <div class="w-full flex justify-end">
                    <span class="mt-2 inline-block text-gray-900 text-xs"
                      ><span class="font-number text-[18px] text-blue-700"
                        >${item.secondPrice}</span
                      >
                      ${item.secondPriceTag}</span
                    >
                  </div>
                </div>
              </a>
`;
        } else {
          return `       <!-- item ${item.id}  -->
              <a
                href="${item.link}"
                class="rounded-[11px] lg:row-span-1 lg:col-span-1 col-span-3 row-span-1 h-[212px] xs:h-auto p-4 lg:p-0 bg-white shadow hover:shadow-2xl transition-shadow flex justify-between lg:gap-2"
              >
                <div class="flex items-center">
                  <img
                    class="w-40 lg:h-40 h-40"
                    src="${item.imgUrl}"
                    alt="${item.alt}"
                  />
                </div>
                <div class="lg:p-3 lg:w-[60%] xs:w-[62%] sm:w-auto w-[46%]">
                  <h3
                    class="lg:line-clamp-2 xs:line-clamp-1 line-clamp-3 font-estedadMedium lg:text-[14px] xs:text-[16px] text-[14px] text-gray-600 xs:mt-5 lg:my-0 mb-3 mt-0 leading-8 text-center sm:text-right h-[84px] xs:h-auto"
                  >
                  ${item.title}
                  </h3>
                  <div
                    class="flex justify-between gap-x-2 items-center lg:h-[42px] lg:mb-5"
                  >
                    <span class="font-number relative text-gray-400 lg:h-full"
                      >${item.firstPrice}
                      <span
                        class="w-full h-[1px] bg-gray-400 absolute left-0 right-0 top-3.5"
                      ></span>
                    </span>
                    <span
                      class="text-red-500 font-estedadMedium xs:text-[14px] text-[12px] lg:h-full lg:max-w-[91px] lg:w-full xl:max-w-none"
                      ><span class="font-number">${item.offerPrice}</span> ${item.offerTag}
                      </span
                    >
                  </div>
                  <div class="w-full flex justify-end">
                    <span class="mt-2 inline-block text-gray-900 text-xs"
                      ><span class="font-number text-[18px] text-blue-700"
                        >${item.secondPrice}</span
                      >
                      ${item.secondPriceTag}</span
                    >
                  </div>
                </div></a
              >`;
        }
      });
    } catch (error) {
      console.log(error.message);
    }
    document.querySelector(".discountProducts").innerHTML =
      discountProducts.join("");
  }
  fetchData();
}
