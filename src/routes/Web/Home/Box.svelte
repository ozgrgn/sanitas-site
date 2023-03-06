<script>
  import RestService from "$services/rest";
  import { lang } from "$services/store";

  import FeaturesCard from "$components/FeaturesCard.svelte";
  let features;
  const getFeatures = async () => {
    let response = await RestService.getFeatures(undefined, undefined, $lang);
    features = response["features"];
  };
  getFeatures();
</script>

<div class="container mx-auto flex justify-center shadow-2xl w-4/5">
  {#if features}
    {#each Array(3) as feature, i}
      {#if features[i] && i < 3}
        <FeaturesCard
          customClass="w-1/3 h-28 text-white"
          svgColor="fill-white"
          color={i==1?"bg-primary":"bg-secondary"}
          readMoreButton="forwardWhite"
          size="128 128"
          svg={features[i]?.svg}
          header={features[i]?.title}
          text={features[i]?.description}
        />
      {/if}
    {/each}
  {/if}


</div>
