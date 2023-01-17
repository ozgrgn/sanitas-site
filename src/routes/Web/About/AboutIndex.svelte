<script>
  import Card2 from "$components/Card2.svelte";
  import Title from "$components/Title.svelte";
  import AboutHero from "./AboutHero.svelte";
  import AboutTreatmentGroup from "./AboutTreatmentGroup.svelte";
  let features = [
    {
      header: "Free Hotel Accommodation",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "hotel",
      size: "128 128",
      perma: "/x",
      sort: "1",
    },
    {
      header: "Free Hotel Accommodation",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "bank",
      size: "512 512",
      perma: "/x",
      sort: "1",
    },
    {
      header: "Free Hotel Accommodation",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "hotel",
      size: "128 128",
      perma: "/x",
      sort: "1",
    },
    {
      header: "Free Hotel Accommodation",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "hotel",
      size: "128 128",
      perma: "/x",
      sort: "1",
    },
  ];
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
    <AboutHero />
  </div>
</div>
<div class="container mx-auto grid grid-cols-6 mt-8 gap-10">
  <div class="col-span-4">
    <Title title1="Welcome to" title2="Sanitas Health Travel" />
    <div class="grid grid-cols-2 gap-8">
      {#if features}
        {#each features as feature}
          <div
            on:mouseover={() => (feature.hover = true)}
            on:mouseout={() => (feature.hover = false)}
            on:focus
            on:blur
            class=""
          >
            <Card2
              customClass="h-52 border text-primary px-4 text-lg {feature.hover
                ? 'text-secondary '
                : 'text-primary'} "
              readMoreButton="forward"
              color="bg-white"
              svgColor="fill-white"
              iconClass=" border rounded-full h-20 w-20 transition-all {feature.hover
                ? 'bg-secondary border-secondary'
                : 'bg-primary border-primary'}"
              size={feature.size}
              icon={feature.icon}
              header={feature.header}
              text={feature.text}
            />
          </div>
        {/each}
      {/if}
    </div>
  </div>
  <div class="-mt-28 z-20 bg-white shadow-2xl col-span-2">
    <div class="bg-primary border-2 border-white flex flex-col justify-center w-full text-white text-center text-2xl h-16"><h3>Our Services</h3></div>
    <AboutTreatmentGroup/>
  </div>
</div>
