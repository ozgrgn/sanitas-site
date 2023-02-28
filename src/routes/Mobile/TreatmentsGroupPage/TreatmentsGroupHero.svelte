<script>
  import { link } from "svelte-navigator";
  import { lang,translate } from "$services/store";

export let group
console.log(group,"group")

</script>
{#if $translate && group}
<div class="flex text-lg text-white/90 pt-28">
  <a use:link href={`/${$lang}/home`}> {$translate.homePage} </a>
  <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
 Departments
  <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
  {group?.title}
</div>
<div
  class="text-6xl text-white/90 tracking-tight w-fit pt-8 border-b-4 border-white/80 h-28 "
>
  <span class="">{group?.title}</span>
</div>
<p class="text-white/90 w-1/2 pt-2 md:pt-8">
{group?.description2}</p>
{/if}