<script>
  import RestService from "$services/rest";
  import { lang } from "$services/store";
  import MobSlider from "$components/Sliders/MobSlider.svelte";
  let features;
  const getFeatures = async () => {
    let response = await RestService.getFeatures(undefined, undefined, $lang);
    features = response["features"];
  };
  getFeatures();
</script>

<div class="container mx-auto flex justify-center shadow-2xl w-5/6">
 <MobSlider {features}/>


</div>
