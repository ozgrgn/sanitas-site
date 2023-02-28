<script>
  import Title from "$components/Title.svelte";
  import {groups } from "$services/store";
  import GroupCard from "$components/GroupCard.svelte";
  import MobTreatmentSlider from "$components/Sliders/MobTreatmentSlider.svelte";



</script>

<div class="treatments container mx-auto mt-28 text-center">
  <Title title1="OUR" title2="TREATMENTS" />
  <div class="">
<MobTreatmentSlider/>
  </div>
</div>
