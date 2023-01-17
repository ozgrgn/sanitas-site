<script>
  import Card from "$components/Card.svelte";
  import Title from "$components/Title.svelte";

  let treatmentsGroups = [
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Eye Treatments",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Plastic Surgery",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Weight Loss Surgery",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Dental Treatment",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Orthopedic Treatments",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Varicose Veins Treatments",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
  ];
</script>

<div class="container mx-auto mt-28 text-center">
  <Title title1="OUR" title2="TREATMENTS" />
  <div class="grid grid-cols-3 gap-8">
    {#if treatmentsGroups}
      {#each treatmentsGroups as treatmentsGroup}
        <Card value={treatmentsGroup} />
      {/each}
    {/if}
  </div>
</div>
