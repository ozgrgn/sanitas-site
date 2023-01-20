<script>
  export let banner;
  export let content;
  export let title;
</script>

<div class="modal-custom bg-black border-black z-30 ">
  <h1 class="text-xl font-bold p-3 ">{title}</h1>
  <img src={`${banner}`} class="block mx-auto mb-2 pb-10" alt="promo" />
  <div class="text-sm leading-6 p-3 ">
    {@html content}
  </div>
</div>
