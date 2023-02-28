<script>
  import FeaturesCard from "$components/FeaturesCard.svelte";
import { Splide, SplideSlide } from "@splidejs/svelte-splide";
import "@splidejs/svelte-splide/css";
  export let features

</script>
<Splide
  aria-label="My Favorite Images"
  options={{
    arrows: false,
    pagination: false,
    autoplay:true,
  }}
>

{#if features}
{#each features as feature, i}
   

<SplideSlide>

    <div
      class=""
    >
      <FeaturesCard
        customClass="h-52 border text-primary px-4 text-lg {feature.hover
          ? 'text-secondary '
          : 'text-primary'} "
        readMoreButton="forward"
        color="bg-white"
        svgColor="fill-white"
        iconClass=" border rounded-full h-20 w-20 transition-all {feature.hover
          ? 'bg-secondary border-secondary'
          : 'bg-primary border-primary'}"
        svg={feature.svg}
        header={feature.title}
        text={feature.description}
      />
    </div>

</SplideSlide>

{/each}
{/if}


  </Splide>