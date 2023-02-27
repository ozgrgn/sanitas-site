<script>
  import Svg from "../../../assets/svg.json";
  import { useLocation, link } from "svelte-navigator";
  import { lang, groups, treatments, translate, modal } from "$services/store";

  const location = useLocation();
</script>

<!-- <Modal
  classContent="modal-payment-item bg-[#f5f5f5] rounded text-white w-full"
  styleWindow={{ width: "75% !important", "max-width": "550px !important" }}
  styleContent={{ padding: "0 !important" }}
  styleCloseButton={{ top: "1.2rem !important" }}
  show={$paymentItemModal}
/> -->
<div class="container mx-auto h-20 border-b flex flex-col justify-center ">
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
        <a use:link href={`/${$lang}/contact`} class=""
          ><span>{$translate.contact} </span></a
        >
        <a use:link href={`/${$lang}/detox`} class=""
        ><span>DETOX </span></a
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
</div>

<style>
  .dropdown:hover > .dropdown-content {
    display: block;
  }
</style>
