<script>
  import MainSliderDesk from "$components/Sliders/MainSliderDesk.svelte";
  import Title from "$components/Title.svelte";
  import Svg from "../../../assets/svg.json";
  import Box from "./Box.svelte";
  import Card from "../../../components/Card.svelte";
  import Faq from "./Faq.svelte";
  import Reviews from "./Reviews.svelte";
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

  let faqs = [
    {
      _id:1,
      sort:1,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id:2,
      sort:2,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id:3,
      sort:3,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },
    {
      _id:4,
      sort:4,
      q: "Böyle Güzel bir Web sitesi nasıl olabilir?",
      a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
    },

  ];
</script>

<div class="relative">
  <MainSliderDesk />
  <div class="absolute text-white flex justify-end top-0 w-full h-full z-2">
    <div class="flex flex-col justify-center px-28">
      <div class="h-fit flex justify-end">
        <h1 class="text-7xl py-2 px-5 bg-primary w-fit font-extrabold">
          WE PROVIDE
        </h1>
      </div>
      <div class="bg-gray-500 mt-5">
        <h3 class="text-4xl py-2 px-5 w-fit font-semibold">
          TOTAL HEALTH CARE SOLUTION
        </h3>
      </div>
      <div class="mt-5 z-2">
        <p class="text-white font-semibold text-end text-lg">
          See your cardiovascular system in action with our interactive <br /> illustrations
          and animations
        </p>
      </div>
      <div class="mt-10 flex justify-end">
        <button
          class="min-h-16 w-52 py-3 px-2 rounded-sm border-2 border-primary text-sm font-semibold px-6 bg-transparent hover:border-primary hover:bg-primary hover:text-white text-primary"
          >FREE CONSULTATION</button
        >
        <button
          class="flex py-3 px-2 rounded-sm items-center justify-center text-sm font-semibold min-h-16 w-52 border-primary text-md bg-primary text-white hover:bg-whatsapp hover:border-whatsapp ml-4"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="pt-1"
            width="24"
            height="20"
            fill="#fff"
            viewBox="0 0 70 70"
          >
            {@html Svg.whatsapp}
          </svg> WHATSAPP</button
        >
      </div>
    </div>
  </div>
  <div class="absolute w-full -mt-14">
    <Box />
  </div>
</div>
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
<div class=" mt-20">
<Faq faqs={faqs} />
</div>
<Reviews></Reviews>
