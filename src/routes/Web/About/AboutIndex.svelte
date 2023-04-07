<script>
  import FeaturesCard from "$components/FeaturesCard.svelte";
  import Title from "$components/Title.svelte";
  import AboutHero from "./AboutHero.svelte";
  import AboutTreatmentGroup from "./AboutTreatmentGroup.svelte";
  import { lang, features, translate, general } from "$services/store";
  import RestService from "$services/rest";
  import QuillHtml from "$components/QuillHtml.svelte";

  let about;
console.log($general,$translate)
  const getAbout = async () => {
    let response = await RestService.getAbouts($lang);
    about = response["abouts"][0];
    console.log(about)
  };
  getAbout();
</script>

<svelte:head>
  {#if $general}
  <title>Sanitas Health Travel | {$translate?.about}</title>
  <meta name="description" content={$general.shortDesc} />
  {/if}
</svelte:head>
<div class="relative bg-primary h-96 w-full z-1">
  <img
    class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
    src="/assets/img/treatments/back1.jpeg"
    alt=""
  />
</div>
<div class="absolute top-0 left-0 w-full">
  <div class="container mx-auto z-20">
    <AboutHero {about} />
  </div>
</div>
<div class="container mx-auto grid grid-cols-6 mt-8 gap-10">
  <div class="col-span-4">
    <Title title1={about?.about_subTitle1} title2={about?.about_subTitle2} />
    <div class="grid grid-cols-2 gap-8">
      {#if $features}
        {#each $features as feature}
          <div
            on:mouseover={() => (feature.hover = true)}
            on:mouseout={() => (feature.hover = false)}
            on:focus
            on:blur
            class=""
          >
            <FeaturesCard
              customClass="h-52 border text-primary px-4 text-lg {feature.hover
                ? 'text-secondary '
                : 'text-primary'} "
              readMoreButton="forward"
              color="bg-white"
              svgColor="fill-white"
              iconClass=" border rounded-full h-20 w-20 transition-all {feature.hover
                ? 'bg-secondary border-secondary'
                : 'bg-primary border-primary'}"
              svg={feature.svg}
              header={feature.title}
              text={feature.description}
            />
          </div>
        {/each}
      {/if}
    </div>
    {#if about?.about_right}
      <div class=" py-10"><QuillHtml text={about?.about_right} /></div>
    {/if}
  </div>
  <div class="-mt-28 z-20 bg-white shadow-2xl col-span-2">
    <div
      class="bg-primary border-2 border-white flex flex-col justify-center w-full text-white text-center text-2xl h-16"
    >
      <h3>{$translate?.treatments}</h3>
    </div>
    <div class="">
    <AboutTreatmentGroup /></div>
  </div>
</div>
