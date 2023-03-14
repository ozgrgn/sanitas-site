<script>
  import Box from "./Box.svelte";
  import Faq from "./Faq.svelte";
  import Reviews from "./Reviews.svelte";
  import HomeTreatmentsGroup from "./HomeTreatmentsGroup.svelte";
  import { lang, general } from "$services/store";
  import RestService from "$services/rest";
  import MobMainSlider from "$components/Sliders/MobMainSlider.svelte";

  let sliders;
  let faqs = [];
console.log($general,"gegreeger")
  const getSliders = async () => {
    let response = await RestService.getSliders($lang);
    sliders = response["sliders"];
  };
  getSliders();
  const getFaqs = async () => {
    let response = await RestService.getFaqs($lang, true, undefined, true);
    faqs = response["faqs"];
    faqs[0].active = true;
  };
  getFaqs();
</script>

<svelte:head>
  <title>Sanitas Health Travel</title>
  {#if $general}
  <meta name="description" content={$general?.shortDesc} />
  {/if}
</svelte:head>
{#if sliders}
  <div class="relative">
    <MobMainSlider {sliders} />

    <div class="absolute w-full -mt-14">
      <Box />
    </div>
  </div>
  <HomeTreatmentsGroup />
  <div class=" mt-10">
    <Faq {faqs} />
  </div>
  <Reviews />
{/if}
