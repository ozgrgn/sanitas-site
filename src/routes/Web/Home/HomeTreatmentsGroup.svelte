<script>
  import Title from "$components/Title.svelte";
  import {groups } from "$services/store";
  import GroupCard from "$components/GroupCard.svelte";



</script>

<div class="container mx-auto mt-28 text-center">
  <Title title1="OUR" title2="TREATMENTS" />
  <div class="grid grid-cols-3 gap-8">
      {#each $groups as treatmentsGroup}
        <GroupCard value={treatmentsGroup} />
      {/each}
  </div>
</div>
