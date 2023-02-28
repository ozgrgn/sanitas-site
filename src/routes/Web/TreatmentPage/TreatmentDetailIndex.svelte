<script>
  import TreatmentDetail from "./TreatmentDetail.svelte";
  import { useParams } from "svelte-navigator";
  import TreatmentHero from "./TreatmentHero.svelte";
  import RestService from "$services/rest";
  import SmallForm from "$components/Form/SmallForm.svelte";

  const params = useParams();

  let treatment;
  const getTreatment = async () => {
    let response = await RestService.getTreatmentViaPerma($params.treatment);
    treatment = response["treatment"];
    console.log(response, "grupppp");
  };
  $: getTreatment($params);
  console.log(treatment, "artık bu treatment");
</script>

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
  <div class=" bg-gray-50 pt-20">
    <div class="container mx-auto grid grid-cols-4 gap-10">
      <div class=" col-span-1"><SmallForm /></div>
      <div class="col-span-3  ">
        <TreatmentDetail {treatment} />
      </div>
    </div>
  </div>
{/if}
