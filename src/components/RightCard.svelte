<script>
  import Svg from "../assets/svg.json";
  import { fade } from "svelte/transition";
  import { lang,translate } from "$services/store";

  export let value;
</script>

<div class="relative flex flex-col rounded-md border-b bg-white  ">
  <div class="h-40"
  on:mouseover={() => (value.hover = true)}
  on:mouseout={() => (value.hover = false)}
  on:focus
  on:blur>
  {#if value.hover}
  <img transition:fade={{ y: 200, duration: 200 }} class="bg-primary absolute w-full h-40 object-cover rounded-t-md" src={value.image} alt="" />
<div class="absolute opacity-70 h-full bg-primary w-full"></div>
{/if}
  <div
    class="absolute w-full bg-light-300 pt-4 xl:px-7 px-2 rounded-b-md flex flex-col  justify-around {value.hover?"text-white":"text-primary"}"
  >
    <div class="">
      <h2 class=" text-xl tracking-tight text-left">
        {value.title}
      </h2>
      <p class="text-left text-sm pt-3">
      {value.description}
      </p>
    </div>
    <a class="text-left flex" href={`/${$lang}/departments/${value.perma}`}
      >{@html Svg[value.hover?"forwardWhite":"forward"]}
      <p class="pl-1 text-sm italic ">{$translate?.read_more}</p>
    </a>
  </div>
</div>
</div>
