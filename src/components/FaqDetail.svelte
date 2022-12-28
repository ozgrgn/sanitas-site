<script>
  import { fly } from "svelte/transition";

  export let faqs;
  faqs[0].active = true;
  const opened = (a) =>
    faqs.map((faq, index) => {
      if (faqs[index]._id == a) {
        faq.active = true;
      } else {
        faqs[index].active = false;
      }
    });
</script>

{#if faqs}
  {#each faqs as faq}
    <div class="border-2 shadow border-gray-100 rounded-lg  ">
      <button
        on:click={() => opened(faq._id)}
        on:keydown
        class="flex items-center justify-between w-full p-4"
      >
        <h3 class="font-semibold text-primary">
          {faq.q}
        </h3>

        <span class="text-gray-400 bg-gray-200 rounded-full">
          {#if faq.active}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="#005b70"
              viewBox="0 0 24 24"
              stroke="#005b70"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          {/if}
        </span>
      </button>
      {#if faq.active}
        <div in:fly={{ y: 200, duration: 200 }}>
          <hr class="border-gray-200" />
          <p class="py-8 px-4 text-sm text-primary">
            {faq.a}
          </p>
        </div>
      {/if}
    </div>
  {/each}
{/if}
