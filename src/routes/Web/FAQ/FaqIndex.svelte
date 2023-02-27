<script>
  import FeaturesCard from "$components/FeaturesCard.svelte";
  import Title from "$components/Title.svelte";
  import AboutHero from "./FaqHero.svelte";
  import AboutTreatmentGroup from "./FaqTreatmentGroup.svelte";
  import { lang,features,translate,general } from "$services/store";
  import RestService from "$services/rest";
  import FaqHero from "./FaqHero.svelte";
  import FaqDetail from "$components/FaqDetail.svelte";

let faqs=[]
console.log($features,"featuressss")

  const getFaqs = async () => {
    let response = await RestService.getFaqs($lang,true,undefined,true);
    faqs = response["faqs"];
    faqs[0].active=true
    console.log(faqs, "faqs");
  };
  getFaqs();


</script>

<div class="relative bg-primary h-96 w-full z-1">
  <img
    class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
    src="/assets/img/treatments/back1.jpeg"
    alt=""
  />
</div>
<div class="absolute top-0 left-0 w-full">
  <div class="container mx-auto z-20">
    <FaqHero/>
  </div>
</div>
<div class="container mx-auto grid grid-cols-6 mt-8 gap-10">
  <div class="col-span-4">
    <Title title1={$translate.faq1} title2={$translate.faq2} />
  
<FaqDetail {faqs}/>
   
  </div>
  <div class="-mt-28 z-20 bg-white shadow-2xl col-span-2">
    <div class="bg-primary border-2 border-white flex flex-col justify-center w-full text-white text-center text-2xl h-16"><h3>{$translate?.treatments}</h3></div>
    <AboutTreatmentGroup/>
  </div>
</div>

