<script>
    import FaqDetail from "$components/FaqDetail.svelte";
    import Title from "$components/Title.svelte";
    export let faqs;
  </script>
  
  <section class="bg-white bg-gray-50">
    <div class="container py-10 mx-auto ">
      <h3
        class="text-3xl font-semibold text-center text-gray-800 lg:text-4xl text-white"
      >
        <Title title1="WHY" title2="SANITAS HEALTH TRAVEL" />
      </h3>
      <div class="mt-4">
        <FaqDetail {faqs} />
      </div>
    </div>
  </section>