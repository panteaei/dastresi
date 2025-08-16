(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const e of l)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function a(l){const e={};return l.integrity&&(e.integrity=l.integrity),l.referrerPolicy&&(e.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?e.credentials="include":l.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(l){if(l.ep)return;l.ep=!0;const e=a(l);fetch(l.href,e)}})();function i(){async function n(){let r=[],a=[];try{let l=await(await fetch("http://localhost:3000/menu")).json();console.log(l),r=l.map(e=>e.id==0?`     <li class="">
                    <a
                      class="flex items-center h-full pb-[30px]"
                      href="${e.link}"
                      >${e.name}</a
                    >
                  </li>`:`        <li class="relative group">
                    <a
                      class="flex gap-1.5 items-center h-full pb-[30px]"
                      href="${e.link}"
                    >
                     ${e.name}
                      <svg
                        class="w-4 h-4 fill-[#6A6A6A] group-hover:fill-[#FE5F55]"
                      >
                        <use xlink:href="${e.svgName}" />
                      </svg>
                    </a>
                    <!-- sub menu 1 - layer 2  -->
                ${e.dropDown&&e.dropDown.length>0?`
  <div
    class=" hidden group-hover:block absolute w-[331px] h-[300px] -bottom-[302px] right-0 py-2 bg-white"
  >
    <ul
      class="[&>*]:text-gray-600 [&>*]:h-[40px] [&>*]:flex [&>*]:items-center [&>*]:hover:bg-gray-100 [&>*]:hover:text-blue-950 [&>*]:px-4"
    >
      ${e.dropDown.map(t=>`
        <li class="hover:[&>div]:block relative">
          <a
            href="${t.link}"
            class="flex justify-between items-center py-3 w-full"
          >
            ${t.name}
            <svg class="w-4 h-4">
              <use xlink:href="${t.svgName||""}" />
            </svg>
          </a>
          ${t.dropDown&&t.dropDown.length>0?`
            <div class="absolute hidden w-full -left-full top-0 bg-white">
              <ul
                class="[&>*]:text-gray-600 [&>*]:h-[40px] [&>*]:flex [&>*]:items-center [&>*]:hover:bg-gray-100 [&>*]:hover:text-blue-950 [&>*]:px-4"
              >
                ${t.dropDown.map(o=>`
                  <li>
                    <a class="py-3 w-full inline-block" href="${o.link}">
                      ${o.name} 
                    </a>
                  </li>
                `).join("")}
              </ul>
            </div>
          `:""}
        </li>
      `).join("")}
    </ul>
  </div>
`:""}

                  </li>`),a=l.map(e=>{if(e.id>0)return`        <li tabindex="0" class="collapse w-full">
          <input type="checkbox" />
                            <a
                              class="collapse-title flex justify-between items-center h-full pb-4 px-5 active:!bg-transparent active:!text-[#FE5F55] text-[#6A6A6A] hover:text-[#FE5F55] group transition-colors"
                              href="${e.link}"
                            >
                              ${e.name}
                              <svg
                                class="w-4 h-4 fill-[#6A6A6A] group-hover:fill-[#FE5F55] transition-colors"
                              >
                                <use xlink:href="${e.svgName}" />
                              </svg>
                            </a>

                            <!-- layer 2 wrapper  -->
                           ${e.dropDown&&e.dropDown.length>0?` <div
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
                               ${e.dropDown.map(t=>` 
                          
                                <li class="collapse">
                                 <input  type="checkbox" />
                                  <a
                                    class="collapse-title p-0 active:!bg-transparent active:!text-[#6A6A6A]"
                                    href="${t.link}"
                                  >
                                    ${t.name}
                                    <svg class="w-3.5 h-3.5">
                                      <use xlink:href="${t.svgName}" />
                                    </svg>
                                  </a>
                                  <!-- layer 3 wrapper  -->
                                  ${t.dropDown&&t.dropDown.length>0?`       <div 
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
                                 ${t.dropDown.map(o=>`   <li>
                                        <a
                                          class="active:!bg-transparent active:!text-[#6A6A6A]"
                                          href="${o.link}"
                                          >
                                          ${o.name} 
                                        </a>
                                      </li>`).join("")}
                              
                                   
                                    </ul>
                                  </div>`:""}
                           
                                </li>`).join("")}
                              </ul>
                            </div>`:""}
                          </li>`})}catch(s){console.log(s.message)}document.querySelector(".secondMenuDesktop").innerHTML=r.join(" "),document.querySelector(".secondMenuMobile").innerHTML=a.join(" ")}n()}i();
