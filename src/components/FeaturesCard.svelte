<script>
    import Svg from "../assets/svg.json";

  export let svg;
  export let header;
  export let text;
  export let color;
  export let svgColor;
   export let iconClass;
  export let customClass;
  export let readMoreButton;
  console.log(readMoreButton,"readMoreButton")
</script>
<div class="{customClass} flex flex-col justify-center pr-2 {color}">
  <div class="grid grid-cols-4 flex justify-center items-center ">
    <div class="{iconClass} flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="pt-1 {svgColor}"
        width="60"
        height="60"
        viewBox="0 0 128 128 "
      >
        {@html svg}
      </svg>
    </div>
    <div class="col-span-3 flex flex-col pl-2 ">
      <h3 class="font-extrabold h-10 leading-5 flex flex-col justify-center ">{header}</h3>
      <p class=" lg:flex text-sm lg:text-md text-ellipsis overflow-hidden h-16">{text}</p>
     
    </div>
  </div>
</div>