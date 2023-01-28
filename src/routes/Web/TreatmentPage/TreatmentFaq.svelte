<script>
    import RestService from "$services/rest";
    import { lang } from "$services/store";

    import FaqDetail from "$components/FaqDetail.svelte";
    let faqs;
    export let treatment
    const getFaqs = async () => {
    let response = await RestService.getFaqs(
      $lang,
      true,
      treatment,
    );
    faqs = response["faqs"];
    console.log(faqs, "faqs");
  };
  getFaqs();
  </script>
  {#if faqs}
  <section class="bg-white bg-gray-50">
    <div class="container py-5 mx-auto ">
      <div class="mt-4">
        <FaqDetail {faqs} />
      </div>
    </div>
  </section>
  {/if}