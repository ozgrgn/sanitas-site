<script>
  import QuillHtml from "$components/QuillHtml.svelte";
  import TreatmentSlider from "$components/Sliders/TreatmentSlider.svelte";
  import TreatmentFaq from "./TreatmentFaq.svelte";
  export let treatment

</script>

<div class="">
  <TreatmentSlider sliders={treatment.images}/>
  <div class="mt-10">
  <QuillHtml text={treatment.text}/>
  </div>
  <div class="sticky top-0 h-full">
    <TreatmentFaq treatment={treatment._id} />
  </div>
</div>
