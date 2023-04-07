<script>
  import MainSliderDesk from "$components/Sliders/MainSliderDesk.svelte";
  import Box from "./Box.svelte";
  import Faq from "./Faq.svelte";
  import Reviews from "./Reviews.svelte";
  import HomeTreatmentsGroup from "./HomeTreatmentsGroup.svelte";
  import { lang, general,translate } from "$services/store";
  import RestService from "$services/rest";

  let sliders;
  let faqs = [];

  const getSliders = async (lang) => {
    let response = await RestService.getSliders(lang);
    sliders = response["sliders"];
  };
  $:getSliders($lang);
  const getFaqs = async (lang) => {
    let response = await RestService.getFaqs(lang, true, undefined, true);
    faqs = response["faqs"];
    faqs[0].active = true;
  };
  $:getFaqs($lang);
</script>

<svelte:head>
  <title>Sanitas Health Travel</title>
  {#if $general}
  <meta name="description" content={$general.shortDesc} />
  {/if}
</svelte:head>
{#if sliders}
  <div class="relative">
    <MainSliderDesk {sliders} />

    <div class="absolute w-full -mt-14">
      <Box />
    </div>
  </div>
  <HomeTreatmentsGroup />
  <div class=" mt-20">
    <Faq {faqs} translate={$translate} />
  </div>
  <Reviews />
{/if}
