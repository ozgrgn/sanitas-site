<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { lang } from "$services/store";
  import RestService from "$services/rest";
  import {groups } from "$services/store";

  import "@splidejs/svelte-splide/css";
  import GroupCard from "$components/GroupCard.svelte";
 export let sliders;

</script>

<Splide
  aria-label="My Favorite Images"
  options={{
      type: "loop",
      perPage: 1,
      arrows: false,
      autoplay: true,
      interval: 3000,
      classes: {
              pagination: "splide__pagination mobileTreatments-pagination",
              page: "splide__pagination__page mobileTreatments-page",
            },
  }}
>
  
    {#if $groups}
      {#each $groups as treatmentsGroup}
      <SplideSlide>
        <div class="relative p-8 pt-0 mb-2 h-full">
          <GroupCard value={treatmentsGroup}></GroupCard>
        </div>
      </SplideSlide>
      {/each}
    {/if}

</Splide>

<style>
    :global(.treatments .mobileTreatments-page) {
    background-color: #f2f2f2 !important;
  }
  :global(.treatments .mobileTreatments-page.is-active) {
    background-color: #005b70 !important;
  }
</style>