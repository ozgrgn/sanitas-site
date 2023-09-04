<script>
  import { link } from "svelte-navigator";
  import { lang, translate } from "$services/store";
  export let health;
</script>

{#if $translate && health}
  <div class="flex text-lg text-white/90 pt-28 z-1 px-4">
    <a use:link href={`/${$lang}/home`}> {$translate?.homePage} </a>
    <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
    {$translate?.health_tourism}
  </div>
  <div
    class="text-6xl text-white/90 tracking-tight w-fit pt-8 border-b-4 border-white/80 h-28 mx-4"
  >
    <span class="">{health.health_title}</span>
  </div>
  <p class="text-white/90 pt-2 md:pt-8 px-4">
    {health.health_left}
  </p>
{/if}
