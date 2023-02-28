<script>
  import { link } from "svelte-navigator";
  import { lang,translate } from "$services/store";
export let treatment
 
</script>
{#if $translate}
<div class="flex text-lg font-semibold text-white pt-40 px-4">
  <a use:link href={`/${$lang}/home`}> {$translate.homePage} </a>
  <div class=" w-1 h-1 m-3 mt-3 bg-white  rounded-full" />
  {$translate.treatments}
  <div class=" w-1 h-1 m-3 mt-3 bg-white   rounded-full" />
  {treatment.title}
</div>
<div
  class="text-6xl text-green-800  tracking-tight w-fit pt-8 border-b-4 border-green-800  h-28 mx-4 "
>
  <h3 class="">{treatment?.title}</h3>
</div>
<p class="text-green-800  w-1/2 pt-2 md:pt-8 px-4">
Detox & Weight Loss</p>
{/if}