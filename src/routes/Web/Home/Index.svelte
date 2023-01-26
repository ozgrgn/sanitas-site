<script>
  import MainSliderDesk from "$components/Sliders/MainSliderDesk.svelte";
  import Box from "./Box.svelte";
  import Faq from "./Faq.svelte";
  import Reviews from "./Reviews.svelte";
  import HomeTreatmentsGroup from "./HomeTreatmentsGroup.svelte";
  import { lang } from "$services/store";
  import RestService from "$services/rest";


  let sliders;

const getSliders = async () => {
  let response = await RestService.getSliders($lang);
  sliders = response["sliders"];
  console.log(sliders);
};
getSliders();
  let faqs = [
    {
      _id:1,
      sort:1,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id:2,
      sort:2,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id:3,
      sort:3,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id:4,
      sort:4,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },

  ];
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
