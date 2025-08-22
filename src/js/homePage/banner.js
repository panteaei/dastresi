export default function bannerData() {
  async function fetchData() {
    let bannerImages = [];

    try {
      let data = await fetch("http://localhost:3000/banner");
      let res = await data.json();
      console.log(res);

      bannerImages = res.map((item) => {
        return `     <!-- Slide ${item.id} -->
                <div class="swiper-slide h-full">
                  <a href="#" class="block w-full h-full">
                    <img
                      class="w-full h-full object-cover"
                      src="${item.url}"
                      alt="${item.alt}"
                    />
                  </a>
                </div>`;
      });
    } catch (error) {
      console.log(error.message);
    }
    document.querySelector(".advertisingImages").innerHTML =
      bannerImages.join("");
  }

  fetchData();
}
