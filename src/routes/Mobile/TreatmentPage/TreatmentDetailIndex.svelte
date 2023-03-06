<script>
  import TreatmentDetail from "./TreatmentDetail.svelte";
  import { useParams } from "svelte-navigator";
  import TreatmentHero from "./TreatmentHero.svelte";
  import RestService from "$services/rest";
  import SmallForm from "$components/Form/SmallForm.svelte";
  import { lang, general, treatments } from "$services/store";
  if($treatments)
  console.log($treatments, "treatmenteesss");
  const params = useParams();
  console.log($params.treatment, "params");
  // const getTreatment = async () => {
  //   treatment=undefined
  //   let response = await RestService.getTreatmentViaPerma($params.treatment);
  //   treatment = response["treatment"];

  // };
  let treatment;
  const getTreatment = (perma) => {
    treatment = $treatments.find((x) => x.perma == perma.treatment);
  };
  $: getTreatment($params);
</script>

<svelte:head>
  {#if treatment}
    <title>Sanitas Health Travel | {treatment.title}</title>
    <meta property="description" content={treatment.shortDesc} />
  {/if}
</svelte:head>
{#if treatment}
  <div class="relative bg-primary h-96 w-full z-1">
    <img
      class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
      src="/assets/img/treatments/back1.jpeg"
      alt=""
    />
  </div>
  <div class="absolute top-0 left-0 w-full">
    <div class="container mx-auto z-20">
      <TreatmentHero {treatment} />
    </div>
  </div>
  <div class=" bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="">
        <TreatmentDetail {treatment} />
      </div>
      <div class="mb-8"><SmallForm /></div>
    </div>
  </div>
{/if}
