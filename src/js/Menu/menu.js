export default function menu() {
  async function fetchData() {
    let menuDesktop = [];
    let menuMobile = [];

    try {
      let data = await fetch("http://localhost:3000/menu");
      let res = await data.json();
      console.log(res);
      // menu data for the desktop
      menuDesktop = res.map((item) => {
        if (item.id == 0) {
          return `     <li class="">
                    <a
                      class="flex items-center h-full pb-[30px]"
                      href="${item.link}"
                      >${item.name}</a
                    >
                  </li>`;
        } else {
          return `        <li class="relative group">
                    <a
                      class="flex gap-1.5 items-center h-full pb-[30px]"
                      href="${item.link}"
                    >
                     ${item.name}
                      <svg
                        class="w-4 h-4 fill-[#6A6A6A] group-hover:fill-[#FE5F55]"
                      >
                        <use xlink:href="${item.svgName}" />
                      </svg>
                    </a>
                    <!-- sub menu 1 - layer 2  -->
                ${
                  item.dropDown && item.dropDown.length > 0
                    ? `
  <div
    class=" hidden group-hover:block absolute w-[331px] h-[300px] -bottom-[302px] right-0 py-2 bg-white"
  >
    <ul
      class="[&>*]:text-gray-600 [&>*]:h-[40px] [&>*]:flex [&>*]:items-center [&>*]:hover:bg-gray-100 [&>*]:hover:text-blue-950 [&>*]:px-4"
    >
      ${item.dropDown
        .map(
          (elem) => `
        <li class="hover:[&>div]:block relative">
          <a
            href="${elem.link}"
            class="flex justify-between items-center py-3 w-full"
          >
            ${elem.name}
            <svg class="w-4 h-4">
              <use xlink:href="${elem.svgName || ""}" />
            </svg>
          </a>
          ${
            elem.dropDown && elem.dropDown.length > 0
              ? `
            <div class="absolute hidden w-full -left-full top-0 bg-white">
              <ul
                class="[&>*]:text-gray-600 [&>*]:h-[40px] [&>*]:flex [&>*]:items-center [&>*]:hover:bg-gray-100 [&>*]:hover:text-blue-950 [&>*]:px-4"
              >
                ${elem.dropDown
                  .map(
                    (each) => `
                  <li>
                    <a class="py-3 w-full inline-block" href="${each.link}">
                      ${each.name} 
                    </a>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          `
              : ""
          }
        </li>
      `
        )
        .join("")}
    </ul>
  </div>
`
                    : ""
                }

                  </li>`;
        }
      });
      // menu data for the mobile

      menuMobile = res.map((itemM) => {
        if (itemM.id > 0) {
          return `        <li tabindex="0" class="collapse w-full">
          <input type="checkbox" />
                            <a
                              class="collapse-title flex justify-between items-center h-full pb-4 px-5 active:!bg-transparent active:!text-[#FE5F55] text-[#6A6A6A] hover:text-[#FE5F55] group transition-colors"
                              href="${itemM.link}"
                            >
                              ${itemM.name}
                              <svg
                                class="w-4 h-4 fill-[#6A6A6A] group-hover:fill-[#FE5F55] transition-colors"
                              >
                                <use xlink:href="${itemM.svgName}" />
                              </svg>
                            </a>

                            <!-- layer 2 wrapper  -->
                           ${
                             itemM.dropDown && itemM.dropDown.length > 0
                               ? ` <div
                              class="collapse-content w-full bg-gray-100 flex flex-col items-start gap-5 active:!bg-gray-100 !pb-0"
                            >
                              <a
                                href="#"
                                class="flex items-center gap-1.5 text-gray-400 text-sm"
                              >
                                همه موارد این دسته
                                <svg class="w-4 h-4">
                                  <use xlink:href="#leftArrow" />
                                </svg>
                              </a>
                              <!-- layer 2  -->
                              <ul
                                class="w-full p-0 m-0 text-[#6A6A6A] flex flex-col gap-5"
                              >
                               ${itemM.dropDown
                                 .map((elemM) => {
                                   return ` 
                          
                                <li class="collapse">
                                 <input  type="checkbox" />
                                  <a
                                    class="collapse-title p-0 active:!bg-transparent active:!text-[#6A6A6A]"
                                    href="${elemM.link}"
                                  >
                                    ${elemM.name}
                                    <svg class="w-3.5 h-3.5">
                                      <use xlink:href="${elemM.svgName}" />
                                    </svg>
                                  </a>
                                  <!-- layer 3 wrapper  -->
                                  ${
                                    elemM.dropDown && elemM.dropDown.length > 0
                                      ? `       <div 
                                    class="collapse-content w-full bg-gray-100 active:!bg-gray-100 flex flex-col items-start gap-5 pr-0 mt-3 border-r-2 border-r-red-400 rounded-none"
                                  >
                                    <a
                                      href="#"
                                      class="flex items-center gap-1.5 text-gray-400 text-xs pr-5"
                                    >
                                      همه موارد این دسته
                                      <svg class="w-4 h-4">
                                        <use xlink:href="#leftArrow" />
                                      </svg>
                                    </a>
                                    <!-- layer 3  -->
                                    <ul
                                      class="w-full text-[#6A6A6A] flex flex-col gap-5 [&>*]:text-xs mr-0"
                                    >
                                 ${elemM.dropDown
                                   .map((eachM) => {
                                     return `   <li>
                                        <a
                                          class="active:!bg-transparent active:!text-[#6A6A6A]"
                                          href="${eachM.link}"
                                          >
                                          ${eachM.name} 
                                        </a>
                                      </li>`;
                                   })
                                   .join("")}
                              
                                   
                                    </ul>
                                  </div>`
                                      : ""
                                  }
                           
                                </li>`;
                                 })
                                 .join("")}
                              </ul>
                            </div>`
                               : ""
                           }
                          </li>`;
        }
      });
    } catch (error) {
      console.log(error.message);
    }
    document.querySelector(".secondMenuDesktop").innerHTML =
      menuDesktop.join(" ");
    document.querySelector(".secondMenuMobile").innerHTML =
      menuMobile.join(" ");
  }
  fetchData();
}
