<script>
  import { link } from "svelte-navigator";
  import { lang,translate } from "$services/store";
export let treatment
 
</script>
{#if $translate}
<div class="flex text-lg text-white/90 pt-48">
  <a use:link href={`/${$lang}/home`}> {$translate?.homePage} </a>
  <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
  {$translate?.treatments}
  <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
  {treatment.title}
</div>
<div
  class="text-6xl text-white/90 tracking-tight w-fit pt-8 border-b-4 border-white/80 h-28 "
>
  <span class="">{treatment?.title}</span>
</div>
<p class="text-white/90 w-1/2 pt-2 md:pt-8">
{treatment?.description}</p>
{/if}