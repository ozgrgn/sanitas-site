<script>
  import Svg from "../../../assets/svg.json";
  import { useLocation, navigate, link } from "svelte-navigator";
  import {
    lang,
    langs,
    general,
    groups,
    treatments,
    translate,
    modal,
  } from "$services/store";
  import LangSelect from "$components/Form/LangSelect.svelte";
  import Top from "./Top.svelte";
  let y;
  let disabledScroll = true;

  const location = useLocation();
  const langTrigger = (_lang) => {
    document.documentElement.setAttribute("lang", _lang);
    setTimeout(() => {
      lang.set(_lang);
      // window.location.reload();
    }, 1); // cause svelte is faster than browser
  };
  let active = false;
  const changeNavStatus = () => {
    setTimeout(() => {
      active = !active;
    }, 50);
  };
</script>


<div class="z-[1000] 	">
  <div class="relative grid grid-cols-12 ">
    <div
      class="{active
        ? 'opacity-50'
        : 'opacity-0 invisible'} transition ease-in-out delay-150  "
    >
      <div
        class="absolute top-[4rem] w-screen h-screen bg-black  z-[1000] "
        on:click={() => changeNavStatus()}
      />
    </div>
    <div class="flex items-center">
      <button
        on:click={(event) => {
          event.stopPropagation();
          changeNavStatus();
        }}
        class="flex items-center px-2 py-2 border rounded text-black border-black z-20 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="#005b70"
          viewBox="0 0 16 16"
        >
          {@html !active ? Svg.openedToggle : ""}
        </svg>
      </button>
    </div>
    <div class="" />
    <div class=" items-center justify-center h-full py-1 col-span-9">
      <img
        on:click={() => navigate("/")}
        on:keydown={() => navigate("/")}
        src={$general?.logo1}
        class="h-12 object-cover"
        alt=""
      />
    </div>
  </div>
</div>

<div
  class="lg:hidden {active ? 'visible' : 'invisible'} top-20  aside-container "
  class:active
>
  <aside
    class="bg-white w-screen h-full h-screen text-md sm:text-lg fixed transition-all duration-1000 z-[1000] top-0 bottom-0"
  >
    <div class="menu flex flex-col pt-1 pb-10 pl-4">
      <div class="flex justify-around">
        <div class="flex items-center justify-center h-full ">
          <img
            on:click={() => navigate("/")}
            on:keydown={() => navigate("/")}
            src={$general?.logo1}
            class="h-14"
            alt=""
          />
        </div>

        <div class="flex items-center p-2">
          <button
            on:click={(event) => {
              event.stopPropagation();
              changeNavStatus();
            }}
            class="flex items-center px-2 py-2 border rounded text-black border-black "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#005b70"
              viewBox="0 0 16 16"
            >
              {@html active ? Svg.closedToggle : ""}
            </svg>
          </button>
        </div>
      </div>
      {#if $translate}
        <a
          use:link
          on:click={() => changeNavStatus()}
          class="flex items-center px-2  mt-5  h-[2rem] bg-white"
          href={`/${$lang}/about`}>{$translate.about}</a
        >
        <a
          use:link
          on:click={() => changeNavStatus()}
          class="flex items-center px-2   h-[2rem] bg-white"
          href={`/${$lang}/contact`}>{$translate.contact}</a
        >
        <a
        use:link
        on:click={() => changeNavStatus()}
        class="flex items-center px-2   h-[2rem] bg-white"
        href={`/${$lang}/faqs`}>{$translate.faq}</a
      >
        <a
          use:link
          on:click={() => changeNavStatus()}
          href={`/${$lang}/detox`}
          class="flex items-center px-2  w-full h-[2rem] bg-white"
          ><span>DETOX </span></a
        >

        <div class="dropdown px-2 py-2 inline-block relative z-20">
          <button class="bg-white rounded inline-flex items-center rounded-xl">
            <div class="flex">
              <span>{$translate.treatments} </span>
              <div class="p-[0.4rem]">{@html Svg.angleDown}</div>
            </div>
          </button>
          <ul
            class="dropdown-content pt-2 bg-white rounded-xl absolute text-primary w-52 z-50"
          >
            {#if $groups}
              {#each $groups as group}
                {#if !group.department}
                  <li class="w-full" on:click={() => changeNavStatus()}>
                    <div
                      class="py-1 mx-4 block whitespace-no-wrap select-none"
                      >{group.title}</div
                    >
                  </li>
                {:else}
                  <li class="dropdown">
                    <div use:link class="py-1 mx-4 block whitespace-no-wrap">
                      <div class="flex items-center select-none">
                        <span>{group.title} </span>
                        <div class="p-[0.3rem]">{@html Svg.angleRight}</div>
                      </div>
                    </div>
                    <ul
                      class="dropdown-content bg-white rounded absolute hidden text-primary ml-52 -mt-10 pt-[0.1rem]"
                    >
                      {#if $treatments}
                        {#each $treatments as treatment}
                          {#if treatment.group == group._id}
                            <li>
                              <a
                              on:click={() => changeNavStatus()}
                                use:link
                                class="pr-2  py-1 block whitespace-no-wrap w-40 "
                                href={`/${$lang}/treatments/${treatment.perma}`}
                              >
                                {treatment.title}</a
                              >
                            </li>
                          {/if}
                        {/each}
                      {/if}
                    </ul>
                  </li>
                {/if}
              {/each}
            {/if}
          </ul>
        </div>
      {/if}
      <div class="absolute bottom-0 border-primary left-0">
        <Top />
      </div>
    </div>
  </aside>
</div>

<!-- <div class="container mx-auto h-20 border-b flex flex-col justify-center ">
  <div class="flex justify-between items-center">
    <a use:link href={`/${$lang}/home`} class="z-20">
      <img class="" src="/assets/img/logo/sanitas-logo.png" alt="" />
    </a>
    <div class="flex font-medium justify-evenly self-center w-full px-28 z-50">
      {#if $translate}
        <a use:link href={`/${$lang}/home`} class=""
          ><span>{$translate.homePage} </span></a
        >
        <a use:link href={`/${$lang}/about`} class="">{$translate.about}</a>
        <a use:link href={`/${$lang}/faqs`} class="">FAQ</a>

        <div class="dropdown inline-block relative z-20">
          <button class="bg-white rounded inline-flex items-center rounded-xl">
            <div class="flex">
              <span>{$translate.treatments} </span>
              <div class="p-[0.3rem]">{@html Svg.angleDown}</div>
            </div>
          </button>
          <ul
            class="dropdown-content pt-4 bg-white rounded-xl absolute hidden text-primary w-56 z-50"
          >
            {#if $groups}
              {#each $groups as group}
                {#if !group.department}
                  <li class="">
                    <a
                      use:link
                      class="py-2 mx-4 border-b border-secondary/10 block whitespace-no-wrap"
                      href={`/${$lang}/departments/${group.perma}`}
                      >{group.title}</a
                    >
                  </li>
                {:else}
                  <li class="dropdown">
                    <a
                      use:link
                      class="py-2 mx-4 border-b border-secondary/10 block whitespace-no-wrap"
                      href={`/${$lang}/departments/${group.perma}`}
                    >
                      <div class="flex items-center">
                        <span>{group.title} </span>
                        <div class="p-[0.3rem]">{@html Svg.angleRight}</div>
                      </div>
                    </a>
                    <ul
                      class="dropdown-content bg-white rounded absolute hidden text-primary  ml-56 -mt-12"
                    >
                      {#if $treatments}
                        {#each $treatments as treatment}
                          {#if treatment.group == group._id}
                            <li>
                              <a
                                use:link
                                class="pr-2 mx-4 border-b border-secondary/10 py-2 block whitespace-no-wrap w-40"
                                href={`/${$lang}/treatments/${treatment.perma}`}
                              >
                                {treatment.title}</a
                              >
                            </li>
                          {/if}
                        {/each}
                      {/if}
                    </ul>
                  </li>
                {/if}
              {/each}
            {/if}
          </ul>
        </div>

        <a use:link href={`/${$lang}/detox`} class=""><span>DETOX </span></a>
        <a use:link href={`/${$lang}/contact`} class=""
          ><span>{$translate.contact} </span></a
        >
      {/if}
    </div>
    {#if $translate}
      <div class="w-1/4 flex flex-col justify-center">
        <button
          on:click={() => modal.set(!$modal)}
          class="btn py-4 px-2 rounded-sm bg-primary text-white font-semibold uppercase"
          >{$translate.book_an_appointment}</button
        >
      </div>
    {/if}
  </div>
</div> -->
<style>
  .dropdown:hover > .dropdown-content {
    display: block;
  }
  .aside-container {
    position: fixed;
    left: -100vh;

    width: 80%;
    z-index: 999;
  }
  .active {
    left: 0px;
    transition: all 1s;
  }
</style>
