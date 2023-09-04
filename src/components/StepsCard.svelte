<script>
    import Svg from "../assets/svg.json";

  export let header;
  export let text;
  export let color;
  export let number;
   export let iconClass;
  export let customClass;
  console.log(number)
</script>
<div class="{customClass} flex flex-col justify-center pr-2 {color}">
  <div class="grid grid-cols-4 flex justify-center items-center ">
    <div class="{iconClass} flex flex-col justify-center items-center text-2xl text-white">
     {number}
    </div>
    <div class="col-span-3 flex flex-col pl-2 ">
      <h3 class="font-extrabold h-10 leading-5 flex flex-col justify-center ">{header}</h3>
      <p class=" lg:flex text-sm lg:text-md text-ellipsis overflow-hidden h-16">{text}</p>
     
    </div>
  </div>
</div>