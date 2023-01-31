<script>
  import Svg from "../assets/svg.json";
  import { link } from "svelte-navigator";
  import { lang } from "$services/store";

  export let value;
</script>
{#if value}
<a use:link href="/{$lang}/treatments/{value.perma} "class="flex flex-col relative rounded-md shadow-lg">
  <img class="w-full rounded-t-md  " src={value.image} alt="" />

  <div
    class="h-52 w-full bg-light-300  xl:px-7 px-2 rounded-b-md flex flex-col justify-around"
  >
    <div class="">
      <h2 class=" text-2xl text-primary tracking-tight text-left">
        {value.title}
      </h2>
      <p class="text-left text-primary text-sm pt-3">
        {value.shortDesc}
      </p>
    </div>
    <a class="text-left flex" href="/"
      >{@html Svg.forward}
      <p class="pl-1 text-sm italic ">Read More</p>
    </a>
  </div>
</a>
{/if}