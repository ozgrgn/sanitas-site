<script>
  import AboutCard from "$components/AboutCard.svelte";
    import Title from "$components/Title.svelte";
  import {groups} from "$services/store"
  </script>
  

    <div class="flex flex-col">
      {#if $groups}
        {#each  $groups as treatmentsGroup}
          <AboutCard value={treatmentsGroup} />
        {/each}
      {/if}
    </div>

  