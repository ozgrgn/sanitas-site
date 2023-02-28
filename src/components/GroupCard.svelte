<script>
  import Svg from "../assets/svg.json";
  import { link } from "svelte-navigator";
  import { lang } from "$services/store";

  export let value;
  console.log(value, "aa");
</script>
{#if value}
<a use:link href="/{$lang}/departments/{value.perma} "class="flex flex-col relative rounded-md shadow-lg">

  <img class="w-full rounded-t-md " src={value.image} alt="" />
  <div
    class="absolute border-2 border-white/90 bg-secondary shadow-2xl drop-shadow rounded-xl bg-white 2xl:top-48 xl:top-48 lg:top-36 top-36 left-8 lg:h-16 lg:w-16 h-16 w-16 flex flex-col justify-center items-center"
  >
 
      {@html value.svg}
  </div>
  <div
    class="h-56 w-full bg-light-300 pt-12 xl:px-7 px-2 rounded-b-md flex flex-col justify-around"
  >
    <div class="h-28 px-2 md:px-0">
      <h2 class=" text-2xl text-primary tracking-tight text-left">
        {value.title}
      </h2>
      <p class="text-left text-primary text-sm pt-3 ">
        {value.description}
      </p>
    </div>
    <a class="text-left flex px-2 md:px-0" href="/"
      >{@html Svg.forward}
      <p class="pl-1  text-sm italic ">Read More</p>
    </a>
  </div>
</a>
{/if}