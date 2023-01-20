<script>
  import { lang, groups } from "$services/store";
  import { useParams } from "svelte-navigator";
  import Title from "$components/Title.svelte";
  import TreatmentsGroupHero from "./TreatmentsGroupHero.svelte";
  import TreatmentCard from "$components/TreatmentCard.svelte";
  import RestService from "$services/rest";

  const params = useParams();
  console.log($params);
  let group;
  if (($params, $groups))
    group = $groups.find((a) => a.perma == $params.groupId);
  let treatments;
  const getTreatments = async () => {
    let response = await RestService.getTreatments($lang, group._id);
    treatments = response["treatments"];

    console.log(treatments, "treatments");
  };
  getTreatments();
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
    {#if group}
      <TreatmentsGroupHero {group} />
    {/if}
  </div>
</div>

<div class="container mx-auto mt-28 text-center">
  <Title customClass={"uppercase"} title2="{group.title}" title1="" />
  <div class="grid grid-cols-3 gap-8">
    {#if treatments}
      {#each treatments as value}
        <TreatmentCard {value} />
      {/each}
    {/if}
  </div>
</div>
