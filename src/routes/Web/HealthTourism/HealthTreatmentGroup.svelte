<script>
  import RightCard from "$components/RightCard.svelte";
    import Title from "$components/Title.svelte";
  import {groups} from "$services/store"
  </script>
  

    <div class="flex flex-col h-full">
      {#if $groups}
        {#each  $groups as treatmentsGroup}
          <RightCard value={treatmentsGroup} />
        {/each}
      {/if}
    </div>

  