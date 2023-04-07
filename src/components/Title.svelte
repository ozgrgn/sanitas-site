<script>
  export let title1;
  export let title2;
  export let customClass;
</script>

<h3
  class="{title1
    ? ''
    : 'hidden'}  text-4xl font-extrabold pb-6 text-secondary {customClass}"
>
  {@html title1} <span class="text-primary"> {title2}</span>
</h3>
