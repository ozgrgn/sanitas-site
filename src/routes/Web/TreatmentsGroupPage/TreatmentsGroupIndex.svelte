<script>
  import { lang } from "$services/store";
  import { useParams } from "svelte-navigator";
  import Title from "$components/Title.svelte";
  import TreatmentsGroupHero from "./TreatmentsGroupHero.svelte";
  import TreatmentCard from "$components/TreatmentCard.svelte";
  import RestService from "$services/rest";
  import TreatmentDetailIndex from "../TreatmentPage/TreatmentDetailIndex.svelte";
  import TreatmentHero from "../TreatmentPage/TreatmentHero.svelte";
  import TreatmentDetail from "../TreatmentPage/TreatmentDetail.svelte";
  import SmallForm from "$components/Form/SmallForm.svelte";

  const params = useParams();
  let groupTreatment;
  let group;
  const getGroup = async () => {
    let response = await RestService.getGroupViaPerma($params.group);
    group = response["group"];
    if (group && !group.department) {
      getTreatmentViaGroupId(group._id);
    }
    getTreatments();
  };
  $: getGroup($params);
  const getTreatmentViaGroupId = async (groupId) => {
    let response = await RestService.getTreatmentViaGroupId(groupId);
    groupTreatment = response["treatment"];
  };

  let treatments;
  const getTreatments = async () => {
    let response = await RestService.getTreatments($lang, group._id);
    treatments = response["treatments"];
  };
</script>
<svelte:head>
  {#if group}
  <title>Sanitas Health Travel | {group.title}</title>
  <meta property="description" content={group.description} />
  {/if}
</svelte:head>
{#if group && group.department}
  <div class="relative bg-primary h-96 w-full z-1 mb-10 ">
    <img
      class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
      src="/assets/img/treatments/back1.jpeg"
      alt=""
    />
  </div>
  <div class="absolute top-0 left-0 w-full">
    <div class="container mx-auto z-20 ">
      <TreatmentsGroupHero {group} />
    </div>
  </div>

  <div class="container mx-auto mt-28 text-center mb-10">
    <Title customClass={"uppercase"} title2={group.title} title1="" />
    <div class="grid grid-cols-3 gap-8">
      {#if treatments}
        {#each treatments as value}
          <TreatmentCard {value} />
        {/each}
      {/if}
    </div>
  </div>
{:else if groupTreatment}
  <div class="relative bg-primary h-96 w-full z-1">
    <img
      class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
      src="/assets/img/treatments/back1.jpeg"
      alt=""
    />
  </div>
  <div class="absolute top-0 left-0 w-full">
    <div class="container mx-auto z-20">
      <TreatmentHero treatment={groupTreatment} />
    </div>
  </div>
  <div class=" bg-gray-50 pt-20">
    <div class="container mx-auto grid grid-cols-4 gap-10">
      <div class=" col-span-1"><SmallForm /></div>
      <div class="col-span-3  ">
        <TreatmentDetail treatment={groupTreatment} />
      </div>
    </div>
  </div>
{/if}
