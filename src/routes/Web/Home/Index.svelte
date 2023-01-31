<script>
  import MainSliderDesk from "$components/Sliders/MainSliderDesk.svelte";
  import Box from "./Box.svelte";
  import Faq from "./Faq.svelte";
  import Reviews from "./Reviews.svelte";
  import HomeTreatmentsGroup from "./HomeTreatmentsGroup.svelte";
  import { lang } from "$services/store";
  import RestService from "$services/rest";


  let sliders;
  let faqs=[]

const getSliders = async () => {
  let response = await RestService.getSliders($lang);
  sliders = response["sliders"];
  console.log(sliders);
};
getSliders();
const getFaqs = async () => {
    let response = await RestService.getFaqs($lang,true,undefined,true);
    faqs = response["faqs"];
    faqs[0].active=true
    console.log(faqs, "faqs");
  };
  getFaqs();
</script>
{#if sliders}
<div class="relative">
  <MainSliderDesk {sliders} />

  <div class="absolute w-full -mt-14">
    <Box />
  </div>
</div>
<HomeTreatmentsGroup/>
<div class=" mt-20">
<Faq faqs={faqs} />
</div>
<Reviews></Reviews>
{/if}
