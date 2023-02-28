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
  }}
>

{#if features}
{#each Array(3) as feature, i}
  {#if features[i] && i < 3}
   

<SplideSlide>
    <FeaturesCard    
    customClass=" h-28 pt-1 text-white"
    svgColor="fill-white"
    color={i==1?"bg-primary":"bg-secondary"}
    readMoreButton="forwardWhite"
    size="128 128"
    svg={features[i]?.svg}
    header={features[i]?.title}
    text={features[i]?.description}
  />
</SplideSlide>
  {/if}
{/each}
{/if}


  </Splide>