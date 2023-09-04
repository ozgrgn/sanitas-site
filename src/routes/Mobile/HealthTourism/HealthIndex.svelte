<script>
  import Title from "$components/Title.svelte";
  import HealthHero from "./HealthHero.svelte";
  import { lang, translate, general } from "$services/store";
  import RestService from "$services/rest";
  import MobFeaturesSlider from "$components/Sliders/MobFeaturesSlider.svelte";
  import QuillHtml from "$components/QuillHtml.svelte";
  import MobStepsSlider from "$components/Sliders/MobStepsSlider.svelte";

  let health;

  const getHealth = async () => {
    let response = await RestService.getHealths($lang);
    health = response["healths"][0];
    console.log(health);
  };
  getHealth();

  let steps;
  console.log($general, $translate);
  const getSteps = async () => {
    let response = await RestService.getSteps($lang);
    steps = response["steps"];
    console.log(steps);
  };
  getSteps();
</script>

<svelte:head>
  {#if $general}
    <title>Sanitas Health Travel | {$translate?.health_tourism}</title>
    <meta name="description" content={$general?.shortDesc} />
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
    <HealthHero {health} />
  </div>
</div>
<div class="container px-4 mt-8">
  <div class="">
    <Title
      title1={health?.health_subTitle1} 
      title2={health?.health_subTitle2}
    />
    <div class="flex flex-col gap-8">
      <MobStepsSlider {steps} />
    </div>
  </div>
  {#if health?.health_right}
    <div class=" py-10"><QuillHtml text={health?.health_right} /></div>
  {/if}
</div>
