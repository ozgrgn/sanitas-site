<script>
  import FaqDetail from "$components/FaqDetail.svelte";
  import QuillHtml from "$components/QuillHtml.svelte";
  import TreatmentSlider from "$components/Sliders/TreatmentSlider.svelte";
  import { text } from "svelte/internal";
  import TreatmentFaq from "./TreatmentFaq.svelte";
  export let treatment
  let faqs = [
    {
      _id: 1,
      sort: 1,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id: 2,
      sort: 2,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id: 3,
      sort: 3,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id: 4,
      sort: 4,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
  ];
</script>

<div class="">
  <TreatmentSlider sliders={treatment.images}/>
  <div class="mt-10">
  <QuillHtml text={treatment.text}/>
  </div>
  <div class="sticky top-0 h-full">
    <TreatmentFaq {faqs} treatment={treatment._id} />
  </div>
</div>
