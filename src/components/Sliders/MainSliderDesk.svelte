<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  export let sliders;
  console.log(sliders, "sfsf");
</script>

<Splide
  aria-label="My Favorite Images"
  options={{
    arrows: false,
    pagination: false,
  }}
>
  <SplideSlide>
    <div class="relative ">
      <img
        class="h-[calc(100vh-130px)] w-full object-cover object-top"
        src="/assets/img/sliders/bg8.jpg"
        alt=""
      />
      <div class="absolute top-0 w-full h-full bg-primary/40" />
    </div>
  </SplideSlide>
</Splide>
