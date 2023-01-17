<script>
    import Svg from "../assets/svg.json";

  export let icon;
  export let header;
  export let text;
  export let color;
  export let size;
  export let svgColor;
   export let iconClass;
  export let customClass;
  export let readMoreButton;
  console.log(readMoreButton,"readMoreButton")
</script>
<div class="{customClass} flex flex-col justify-center pr-4 {color}">
  <div class="grid grid-cols-4">
    <div class="{iconClass} flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="pt-1 {svgColor}"
        width="60"
        height="60"
        viewBox="0 0 {size}"
      >
        {@html Svg[icon]}
      </svg>
    </div>
    <div class="col-span-3  flex flex-col  ">
      <h3 class="font-extrabold ">{header}</h3>
      <p class="hidden lg:flex text-sm lg:text-md">{text}</p>
      <a class="text-left flex pt-2" href="/"
      >{@html Svg[readMoreButton]}
      <p class="pl-1 text-sm italic ">Read More</p>
    </a>
    </div>
  </div>
</div>