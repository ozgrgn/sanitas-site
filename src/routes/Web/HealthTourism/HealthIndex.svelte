<script>
  import FeaturesCard from "$components/FeaturesCard.svelte";
  import Title from "$components/Title.svelte";

  import { lang, translate, general } from "$services/store";
  import RestService from "$services/rest";
  import QuillHtml from "$components/QuillHtml.svelte";
  import HealthHero from "./HealthHero.svelte";
  import HealthTreatmentGroup from "./HealthTreatmentGroup.svelte";
  import StepsCard from "$components/StepsCard.svelte";

  let health;
  console.log($general, $translate);
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
    <title>Sanitas Health Travel | {$translate?.health}</title>
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
    <HealthHero {health} />
  </div>
</div>
<div class="container mx-auto grid grid-cols-6 mt-8 gap-10">
  <div class="col-span-4">
    <Title
      title1={health?.health_subTitle1}
      title2={health?.health_subTitle2}
    />
    <div class="grid grid-cols-2 gap-8">
      {#if steps}
        {#each steps as step, index}
          <div
            on:mouseover={() => (step.hover = true)}
            on:mouseout={() => (step.hover = false)}
            on:focus
            on:blur
            class=""
          >
            <StepsCard
              customClass="h-52 border text-primary px-4 text-lg {step.hover
                ? 'text-secondary '
                : 'text-primary'} "
              readMoreButton="forward"
              color="bg-white"
              number={index + 1}
              iconClass=" border rounded-full h-20 w-20 transition-all {step.hover
                ? 'bg-secondary border-secondary'
                : 'bg-primary border-primary'}"
              svg={step.svg}
              header={step.title}
              text={step.description}
            />
          </div>
        {/each}
      {/if}
    </div>
    {#if health?.health_right}
      <div class=" py-10"><QuillHtml text={health?.health_right} /></div>
    {/if}
  </div>
  <div class="-mt-28 z-20 bg-white shadow-2xl col-span-2 h-fit">
    <div
      class="bg-primary border-2 border-white flex flex-col justify-center w-full text-white text-center text-2xl h-16"
    >
      <h3>{$translate?.treatments}</h3>
    </div>
    <div class="">
      <HealthTreatmentGroup />
    </div>
  </div>
</div>
