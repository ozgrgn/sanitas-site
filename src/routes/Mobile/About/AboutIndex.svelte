<script>
  import Title from "$components/Title.svelte";
  import AboutHero from "./AboutHero.svelte";
  import { lang, features, translate, general } from "$services/store";
  import RestService from "$services/rest";
  import MobFeaturesSlider from "$components/Sliders/MobFeaturesSlider.svelte";
  import QuillHtml from "$components/QuillHtml.svelte";

  let about;

  const getAbout = async () => {
    let response = await RestService.getAbouts($lang);
    about = response["abouts"][0];
  };
  getAbout();
</script>

<svelte:head>
  <title>Sanitas Health Travel | {$translate.about}</title>
  <meta property="description" content={$general.shortDesc} />
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
<div class="container px-4  mt-8 ">
  <div class="">
    <Title title1="Welcome to" title2="Sanitas Health Travel" />
    <div class="flex flex-col gap-8">
      <MobFeaturesSlider features={$features} />
    </div>
  </div>
  {#if about?.about_right}
    <div class=" pt-10"><QuillHtml text={about?.about_right} /></div>
  {/if}
</div>
