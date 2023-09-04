<script>
  import FeaturesCard from "$components/FeaturesCard.svelte";
  import StepsCard from "$components/StepsCard.svelte";
import { Splide, SplideSlide } from "@splidejs/svelte-splide";
import "@splidejs/svelte-splide/css";
  export let steps

</script>
<Splide
  aria-label="My Favorite Images"
  options={{
    arrows: false,
    pagination: true,
    autoplay:true,
  }}
>

{#if steps}
{#each steps as step, i}
   

<SplideSlide>

    <div
      class=""
    >
      <StepsCard
        customClass="h-52 border text-primary px-4 text-lg z-10 {step.hover
          ? 'text-secondary '
          : 'text-primary'} "
        readMoreButton="forward"
        color="bg-white"
        number={i+1}
        iconClass=" border rounded-full h-20 w-20 transition-all {step.hover
          ? 'bg-secondary border-secondary'
          : 'bg-primary border-primary'}"
        svg={step.svg}
        header={step.title}
        text={step.description}
      />
    </div>

</SplideSlide>

{/each}
{/if}


  </Splide>