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
        <div class="relative h-screen">
          <img
            class="h-screen w-screen object-cover object-top"
            src={slider.mobileBanner}
            alt=""
          />
          <div class="absolute left-0 top-0 w-screen h-screen bg-primary/40" />
        </div>
        <div
          class="absolute text-white flex w-screen h-screen bottom-40  z-2"
        >
          <div class="absolute bottom-0 w-full flex flex-col ">
            <div class="h-fit text-center bg-primary ">
              <h1 class="text-4xl py-2   w-full font-extrabold">
                {slider.title1}
              </h1>
           
                <h2 class="w-full text-xl pb-2 px-2  font-semibold">
                  {slider?.title2}
                </h2>
           
            </div>
          
            <div class="mt-10 flex gap-2 mx-2">
              {#if translate}
              <PopupButton
                buttonText={$translate.book_an_appointment}
                  customCss="min-h-16 w-1/2 py-2 px-2 rounded-sm border-2 border-primary text-md font-semibold px-2 bg-white/50 hover:border-primary hover:bg-primary hover:text-white text-primary"
                />
              {/if}
              {#if general}
                <a
                class="w-1/2"
                  href="https://api.whatsapp.com/send?phone={$general.whatsapp}"
                >
                  <button
                    class="w-full flex py-3 rounded-sm items-center justify-center text-sm font-semibold  text-md bg-primary text-white hover:bg-whatsapp hover:border-whatsapp "
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
