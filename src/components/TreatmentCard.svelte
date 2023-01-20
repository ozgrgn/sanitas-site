<script>
  import Svg from "../assets/svg.json";
  import { link } from "svelte-navigator";
  import { lang } from "$services/store";

  export let value;
  console.log(value, "aa");
</script>
{#if value}
<a use:link href="/{$lang}/treatments/{value.perma} "class="flex flex-col relative rounded-md shadow-lg">
  <img class="w-full rounded-t-md " src={value.image} alt="" />
  <div
    class="absolute border-2 border-white/90 bg-secondary shadow-2xl drop-shadow rounded-xl bg-white 2xl:top-52 xl:top-52 lg:top-36 top-24 left-8 lg:h-16 lg:w-16 h-16 w-16 flex flex-col justify-center items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="p-2"
      width="60"
      height="60"
      fill="#fff"
      viewBox="0 0 128 128"
    >
      {@html value.svg}
    </svg>
  </div>
  <div
    class="h-52 w-full bg-light-300 pt-12 xl:px-7 px-2 rounded-b-md flex flex-col justify-around"
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