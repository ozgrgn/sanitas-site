<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import { translate, general } from "$services/store";
  export let sliders;
  import Svg from "../../assets/svg.json";
  import PopupButton from "$components/Buttons/PopupButton.svelte";
</script>

<Splide
  aria-label="My Favorite Images"
  options={{
    arrows: false,
    pagination: false,
  }}
>
  <SplideSlide>
    {#if sliders}
      {#each sliders as slider}
        <div class="relative ">
          <img
            class="h-[calc(100vh-130px)] w-full object-cover object-top"
            src={slider.backgroundBanner}
            alt=""
          />
          <div class="absolute top-0 w-full h-full bg-primary/40" />
        </div>
        <div
          class="absolute text-white flex justify-end top-0 w-full h-full z-2"
        >
          <div class="flex flex-col justify-center px-28">
            <div class="h-fit flex justify-end">
              <h1 class="text-7xl py-2 px-5 bg-primary w-fit font-extrabold">
                {slider.title1}
              </h1>
            </div>
            <div class="h-fit flex justify-end">
              <div class="bg-gray-500 mt-5 w-fit ">
                <h2 class="text-4xl py-2 px-5 w-fit font-semibold">
                  {slider?.title2}
                </h2>
              </div>
            </div>
            <div class="mt-5 z-2">
              <p class="h-16 text-white font-semibold text-end text-lg">
                {@html slider?.description}
              </p>
            </div>
            <div class="mt-10 flex justify-end">
              {#if $translate}
                <PopupButton
                buttonText={$translate?.book_an_appointment}
                  customCss="min-h-16 w-52 py-3 px-2 rounded-sm border-2 border-primary text-sm font-semibold px-6 bg-transparent hover:border-primary hover:bg-primary hover:text-white text-primary"
                />
             
              {/if}
              {#if $general}
                <a
                  href="https://api.whatsapp.com/send?phone={$general.whatsapp}"
                >
                  <button
                    class="flex py-3 px-2 rounded-sm items-center justify-center text-sm font-semibold min-h-16 w-52 border-primary text-md bg-primary text-white hover:bg-whatsapp hover:border-whatsapp ml-4"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="pt-1"
                      width="24"
                      height="20"
                      fill="#fff"
                      viewBox="0 0 70 70"
                    >
                      {@html Svg.whatsapp}
                    </svg> WHATSAPP</button
                  >
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </SplideSlide>
</Splide>
