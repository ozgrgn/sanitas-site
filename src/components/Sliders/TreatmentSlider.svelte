<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { lang } from "$services/store";
  import RestService from "$services/rest";

  import "@splidejs/svelte-splide/css";
 export let sliders;
 console.log(sliders,"teatment imagess")

</script>

<Splide
  aria-label="My Favorite Images"
  options={{
      type: "loop",
      arrows: false,
      autoplay: true,
      interval: 3000,
  }}
>
  
    {#if sliders}
      {#each sliders as slider}
      <SplideSlide>
        <div class="relative ">
          <img
            class="w-full object-cover object-top"
            src={slider.image}
            alt=""
          />
        </div>
      </SplideSlide>
      {/each}
    {/if}

</Splide>
