<script>
  import Svg from "../../../assets/svg.json";
  import { useLocation, link } from "svelte-navigator";
  import { lang,groups,treatments,translate, modal } from "$services/store";
  


  const location = useLocation();
  console.log($lang, "şşkşk");



</script>
<!-- <Modal
  classContent="modal-payment-item bg-[#f5f5f5] rounded text-white w-full"
  styleWindow={{ width: "75% !important", "max-width": "550px !important" }}
  styleContent={{ padding: "0 !important" }}
  styleCloseButton={{ top: "1.2rem !important" }}
  show={$paymentItemModal}
/> -->
<div class="container mx-auto h-20 border-b flex flex-col justify-center ">
  <div class="flex justify-between">
    <a href="/" class="z-10">
      <img class="" src="/assets/img/logo/sanitas-logo.png" alt="" />
    </a>
    <div class="flex font-medium justify-evenly self-center w-full px-28 z-20">
      {#if $translate}
      <a use:link href={`/${$lang}/home`} class=""><span>{$translate.homePage} </span></a>
      <a use:link href={`/${$lang}/about`} class="">{$translate.about}</a>
      <a use:link href={`/${$lang}/faq`} class="">FAQ</a>
      
      <div class="dropdown inline-block relative z-20">
        <button
          class="bg-white rounded inline-flex items-center rounded-xl"
        >
          <div class="flex">
            <span>{$translate.treatments} </span>
            <div class="p-[0.3rem]">{@html Svg.angleDown}</div>
          </div>
        </button>
        <ul
          class="dropdown-content pt-4 bg-white rounded-xl absolute hidden text-primary w-48"
        >
        {#if $groups}
          {#each $groups as group}
            {#if !group.department}
              <li class="">
                <a class="py-2 px-4 block whitespace-no-wrap" href= {`/${$lang}/treatments/${group.perma}`}
                  >{group.title}</a
                >
              </li>
            {:else}
              <li class="dropdown">
                <a class="py-2 px-4 block whitespace-no-wrap" href= {`/${$lang}/departments/${group.perma}`}
                  >
                  <div class="flex">
                    <span>{group.title} </span>
                    <div class="p-[0.3rem]">{@html Svg.angleRight}</div>
                  </div>
                  
                  </a
                >
                <ul
                  class="dropdown-content bg-white rounded absolute hidden text-primary pl-5 ml-40 -mt-10"
                >
                {#if $treatments}
                  {#each $treatments as treatment}
                    {#if treatment.group == group._id}
                      <li>
                        <a
                          class="pr-2 pl-4 py-2 block whitespace-no-wrap w-40"
                          href="/#">
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
      <div class="">{$translate.contact}</div>

      {/if}
    </div>
    <div class="w-1/4 flex flex-col justify-center">

      <button on:click={()=>modal.set(!$modal)} class="btn py-4 px-2 rounded-sm bg-primary text-white font-semibold uppercase"
        >Free Consultation</button
      >
    </div>
  </div>
</div>
<style>
  .dropdown:hover > .dropdown-content {
    display: block;
  }
</style>