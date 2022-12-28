<script>
  import Card from "$components/Card.svelte";
  import Title from "$components/Title.svelte";
  import TreatmentsGroupHero from "./TreatmentsGroupHero.svelte";


  let treatments = [
    {
      group: "1",
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      group: "1",
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      group: "1",
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      group: "1",
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
  ];
</script>
<div class="relative bg-primary h-96 w-full z-1">
  <img
    class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
    src="/assets/img/treatments/back1.jpeg"
    alt=""
  />
</div>
<div class="absolute top-0 left-0 w-full">
  <div class="container mx-auto z-20">
    <TreatmentsGroupHero/>
  </div>
</div>
  
<div class="container mx-auto mt-28 text-center">
  <Title title1="PLASTIC SURGERY" title2="TREATMENTS" />
      <div class="grid grid-cols-3 gap-8">
        {#if treatments}
          {#each treatments as value}
            <Card {value} />
          {/each}
        {/if}
      </div>   </div>