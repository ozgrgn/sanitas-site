<script>
  import Box from "./Box.svelte";
  import Faq from "./Faq.svelte";
  import Reviews from "./Reviews.svelte";
  import HomeTreatmentsGroup from "./HomeTreatmentsGroup.svelte";
  import { lang, general, translate } from "$services/store";
  import RestService from "$services/rest";
  import MobMainSlider from "$components/Sliders/MobMainSlider.svelte";
  import LogoSlider from "$components/Sliders/LogoSlider.svelte";

  let sliders;
  let faqs = [];
  let referenceLogos;

  const getSliders = async (lang) => {
    let response = await RestService.getSliders(lang);
    sliders = response["sliders"];
  };
  $: getSliders($lang);
  const getFaqs = async (lang) => {
    let response = await RestService.getFaqs(lang, true, undefined, true);
    faqs = response["faqs"];
    faqs[0].active = true;
  };
  $: getFaqs($lang);

  const getReferenceLogos = async (lang) => {
    let response = await RestService.getReferenceLogos(lang);
    referenceLogos = response["referenceLogos"];
    console.log(response,"responses")
    referenceLogos[0].active = true;
  };
  $:getReferenceLogos($lang);
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
    <Faq {faqs} translate={$translate} />
  </div>
  {#if referenceLogos && referenceLogos[0]}

  <div class=" px-5">
    <LogoSlider logoSlides={referenceLogos}/></div>
    {/if}  <Reviews />
{/if}
