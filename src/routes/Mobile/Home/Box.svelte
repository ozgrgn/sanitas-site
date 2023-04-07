<script>
  import RestService from "$services/rest";
  import { lang } from "$services/store";
  import MobSlider from "$components/Sliders/MobSlider.svelte";
  let features;
  const getFeatures = async (lang) => {
    let response = await RestService.getFeatures(lang);
    features = response["features"];
  };
  $: getFeatures($lang);
</script>

<div class="container mx-auto flex justify-center shadow-2xl w-5/6">
 <MobSlider {features}/>


</div>
