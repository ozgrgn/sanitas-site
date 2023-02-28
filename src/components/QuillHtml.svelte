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
  :global(.quill-text h1) {
    font-weight: bold;
    font-size: 1.5rem;
  }
  :global(.quill-text h2) {
    font-weight: bold;
    font-size: 1.3rem;
  }
  :global(.quill-text h3) {
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>
