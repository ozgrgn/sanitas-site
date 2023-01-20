<script>
  import { link } from "svelte-navigator";

  import Svg from "../../../assets/svg.json";
  import LangSelect from "../../../components/Form/LangSelect.svelte";
  import { lang,features,translate,general,groups } from "$services/store";


  let treatments = [
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
    {
      image: "/assets/img/cards/ws1.jpg",
      name: "Treatment One",
      icon: "svg....",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!",
      perma: "/",
    },
  ];
  const langTrigger = (_lang) => {
    document.documentElement.setAttribute("lang", _lang);
    setTimeout(() => {
      lang.set(_lang);
      window.location.reload();
    }, 1); // cause svelte is faster than browser
  };
</script>

<footer class="relative bg-primary" aria-labelledby="footer-heading">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="pb-8 md:grid xl:grid-cols-6 xl:gap-2">
      <div class="md:grid md:grid-cols-2 gap-16 xl:col-span-4">
        <div class="first">
          <div class="md:grid-cols-1 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                {$general?.brand}
              </h3>

              <div class="">
                <p class=" px-2 pt-5 text-md tracking-tight text-gray-200 ">
                  {$general?.shortDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 md:mt-0 md:grid md:grid-cols-1 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold text-white tracking-wider uppercase "
            >
              {$translate?.treatments}
            </h3>
            <div class="grid-rows-1">
              <div class="grid grid-cols-2 ">
                <div class="">
                  <ul class="mt-4 space-y-4 px-2">
                    {#each Array(4) as treatment, i}
                      {#if $groups && $groups[i]}
                        <li>
                          <a
                            use:link
                            href="/{$lang}/departments/{$groups[i].perma}"
                            class="text-base text-gray-200 hover:text-white"
                          >
                            {$groups[i].title}
                          </a>
                        </li>
                      {/if}
                    {/each}
                  </ul>
                </div>
                <ul class="mt-4 space-y-4 px-2">
                  {#each Array(4) as treatment, i}
                    {#if $groups && $groups[i + 4]}
                      <li>
                        <a
                          use:link
                          href="/{$lang}/departments/{$groups[i+4].perma}"
                          class="text-base text-gray-200 hover:text-white"
                        >
                          {$groups[i + 4].name}
                        </a>
                      </li>
                    {/if}
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="third">
        <div class=" mt-10 lg:mt-0 md:grid md:grid-cols-1 ">
          <div>
            <h3
              class="text-sm font-semibold text-white tracking-wider uppercase"
            >
              contact
            </h3>
            {#if $general}
              <div class="px-2">
                <p class=" pt-5 text-md tracking-tight text-gray-200">
                  <a href="tel:{$general?.phone2}">
                    {$general?.phone2}
                  </a>
                </p>
                <p class=" pt-5 text-md tracking-tight text-gray-200 ">
                  <a href="mailto:{$general?.email1}"> {$general?.email1}</a>
                </p>
                <p class=" pt-5 text-md tracking-tight text-gray-200 ">
                  {$general?.address1}
                  {$general?.address2}
                </p>
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div class="mt-12 xl:mt-0">
        <h3 class="text-sm font-semibold text-white tracking-wider uppercase">
          Dil
        </h3>
      </div>
    </div>

    <div
      class="mt-8 border-t border-white/50 pt-8 md:flex md:items-center md:justify-between"
    >
      <div class="flex space-x-6 md:order-2">
        <a href={"/" + $general?.facebook}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" "
            width="25"
            height="25"
            fill="#bc74a5"
            viewBox="0 0 35 35"
          >
            {@html Svg.facebook2}
          </svg>
        </a>
        <a href={"/" + $general?.instagram} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" "
            width="25"
            height="25"
            fill="#bc74a5"
            viewBox="0 0 35 35"
          >
            {@html Svg.instagram2}
          </svg>
        </a>
        <a href={"/" + $general?.youtube}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" "
            width="25"
            height="25"
            viewBox="0 0 100 100"
          >
            {@html Svg.youtube}
          </svg>
        </a>
        <a href={$general?.whatsapp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=""
            width="30"
            height="30"
            fill="#fff"
            viewBox="0 0 80 80"
          >
            {@html Svg.whatsapp2}
          </svg>
        </a>
      </div>
      <p class="mt-8 text-base text-white md:mt-0 md:order-1">
        {$general?.copright}
      </p>
    </div>
  </div>
</footer>
