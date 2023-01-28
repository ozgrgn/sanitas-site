<script>
  import { link } from "svelte-navigator";
  import { lang, translate} from "$services/store";
  export let contact;


</script>

{#if $translate && contact}
  <div class="flex text-lg text-white/90 pt-48 z-1">
    <a use:link href={`/${$lang}/home`}> {$translate.homePage} </a>
    <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
    {$translate.contact}
  </div>
  <div
    class="text-6xl text-white/90 tracking-tight w-fit pt-8 border-b-4 border-white/80 h-28 "
  >
    <span class="">{contact.title}</span>
  </div>
  <p class="text-white/90 w-1/2 pt-2 md:pt-8">
    {contact.description}
  </p>
{/if}


