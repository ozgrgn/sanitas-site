<script>
  import Svg from "../../../assets/svg.json";
  import { useLocation, navigate, useParams } from "svelte-navigator";
  import { lang } from "$services/store";

  const location = useLocation();
  console.log($lang, "şşkşk");

  let treatmentsGroups = [
    { name: "Group1", perma: "sr1", subMenu: true },
    { name: "Group2", perma: "sr2", subMenu: false },
    { name: "Group3", perma: "sr3", subMenu: true },
  ];
  let treatments = [
    { group: "Group1", title: "İsim1", perma: "fs1" },
    { group: "Group2", title: "İsim2", perma: "fs2" },
    { group: "Group3", title: "İsim3", perma: "fs3" },
    { group: "Group3", title: "İsim4", perma: "fs4" },
  ];
</script>

<div class="container mx-auto h-20 border-b flex flex-col justify-center">
  <div class="flex justify-between">
    <a href="/" class="z-10">
      <img class="" src="/assets/img/logo/sanitas-logo.png" alt="" />
    </a>
    <div class="flex font-medium justify-evenly self-center w-full px-28">
      <div class=""><span>Home </span></div>
      <div class="">About Us</div>
      <div class="">FAQ</div>
      <div class="dropdown inline-block relative z-20">
        <button
          class="bg-white rounded inline-flex items-center rounded-xl"
        >
          <div class="flex">
            <span>Treatments </span>
            <div class="p-[0.3rem]">{@html Svg.angleDown}</div>
          </div>
        </button>
        <ul
          class="dropdown-content pt-4 bg-white rounded-xl absolute hidden text-primary w-40"
        >
          {#each treatmentsGroups as treatmentsGroup}
            {#if !treatmentsGroup.subMenu}
              <li class="">
                <a class="py-2 px-4 block whitespace-no-wrap" href= {`/${$lang}/treatments/${treatmentsGroup.perma}`}
                  >{treatmentsGroup.name}</a
                >
              </li>
            {:else}
              <li class="dropdown">
                <a class="py-2 px-4 block whitespace-no-wrap" href= {`/${$lang}/groups/${treatmentsGroup.perma}`}
                  >
                  <div class="flex">
                    <span>{treatmentsGroup.name} </span>
                    <div class="p-[0.3rem]">{@html Svg.angleRight}</div>
                  </div>
                  
                  </a
                >
                <ul
                  class="dropdown-content bg-white rounded absolute hidden text-primary pl-5 ml-36 -mt-10"
                >
                  {#each treatments as treatment}
                    {#if treatment.group == treatmentsGroup.name}
                      <li>
                        <a
                          class="py-2 px-2 block whitespace-no-wrap w-40"
                          href="/#">
                          {treatment.title}</a
                        >
                      </li>
                    {/if}
                  {/each}
                </ul>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
      <div class="">Contact</div>


    </div>
    <div class="w-1/4 flex flex-col justify-center">
      <button class="btn py-3 px-2 py-1 rounded-sm bg-primary text-white font-semibold"
        >FREE CONSULTATION</button
      >
    </div>
  </div>
</div>
<style>
  .dropdown:hover > .dropdown-content {
    display: block;
  }
</style>