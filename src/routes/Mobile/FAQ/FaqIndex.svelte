<script>
  import FeaturesCard from "$components/FeaturesCard.svelte";
  import Title from "$components/Title.svelte";
  import { lang,features,translate,general } from "$services/store";
  import RestService from "$services/rest";
  import FaqHero from "./FaqHero.svelte";
  import FaqDetail from "$components/FaqDetail.svelte";

let faqs=[]

  const getFaqs = async () => {
    let response = await RestService.getFaqs($lang,true,undefined,true);
    faqs = response["faqs"];
    faqs[0].active=true
  };
  getFaqs();


</script>
<svelte:head>
  <title>Sanitas Health Travel | {$translate?.faq}</title>
  <meta name="description" content={$general?.shortDesc} />
</svelte:head>
<div class="relative bg-primary h-96 w-full z-1">
  <img
    class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
    src="/assets/img/treatments/back1.jpeg"
    alt=""
  />
</div>
<div class="absolute top-0 left-0 w-full ">
  <div class="container mx-auto z-20">
    <FaqHero/>
  </div>
</div>
<div class="container mx-auto mt-8 px-4 mb-10">
  <div class="">
    <Title title1={$translate?.faq1} title2={$translate?.faq2} />
  
<FaqDetail {faqs}/>
   
  </div>

</div>

