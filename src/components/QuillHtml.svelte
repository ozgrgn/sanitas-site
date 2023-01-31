<script>
  export let text;
</script>

<div class="quill-text">
  {@html text}
</div>

<style>
  :global(.quill-text ul) {
    list-style-position: inside;
    list-style-type: disc;
  }
</style>
