<script>
      import Svg from "../../../assets/svg.json";

    export let icon;
    export let header;
    export let text;
    export let color;
    export let size;
</script>
<div class="w-1/3 h-28 flex flex-col justify-center pr-4 {color}">
    <div class="grid grid-cols-4">
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pt-1 "
          width="60"
          height="60"
          fill="#fff"
          viewBox="0 0 {size}"
        >
          {@html Svg[icon]}
        </svg>
      </div>
      <div class="col-span-3 text-white flex flex-col  ">
        <h3 class="font-extrabold ">{header}</h3>
        <p class="hidden lg:flex text-sm lg:text-md">{text}</p>
      </div>
    </div>
  </div>