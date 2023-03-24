<script>
  import FaqDetail from "$components/FaqDetail.svelte";
  import QuillHtml from "$components/QuillHtml.svelte";
  import TreatmentSlider from "$components/Sliders/TreatmentSlider.svelte";
  import TreatmentFaq from "./TreatmentFaq.svelte";
  export let treatment;
  export let faqs;
</script>

<div class="">
  <TreatmentSlider sliders={treatment.images} />
  <h1 class="text-4xl text-center pt-10">DETOX & WEIGHT LOSS</h1>
  <div class="mt-10">
    <QuillHtml text={treatment.text} />
  </div>
  <div class="flex justify-center">
    <div
      class="h-full lg:w-2/3 shadow-xl border border-primary/5 pl-4 pr-2 py-4 my-10"
    >
      <QuillHtml text={treatment.text2} />
    </div>
  </div>
  <div class="sticky top-0 h-full">
    <TreatmentFaq {faqs} treatment={treatment._id} />
  </div>
</div>
