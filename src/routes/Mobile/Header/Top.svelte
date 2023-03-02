<script>
  import Svg from "../../../assets/svg.json";
  import LangSelect from "$components/Form/LangSelect.svelte";
  import { navigate } from "svelte-navigator";
  import { langs, lang, general,translate } from "$services/store";
  let newLang;
  console.log($translate, "translate");
  const langTrigger = (_lang) => {
    lang.set(_lang);
    let splittedPathName = window.location.pathname.split("/");
    console.log(splittedPathName, "splittedPathName");
    navigate(
      `/${_lang}/${splittedPathName[2] ? splittedPathName[2] : ""}${
        splittedPathName[3] ? "/" + splittedPathName[3] : ""
      }`
    );
  };
</script>

{#if $general}
  <div
    class="h-12 bg-secondary text-sm text-white flex flex-col justify-center cursor-pointer z-[1000] "
  >
    <div class="w-screen flex justify-between z-[1000]">
      <div class="w-full flex justify-around">
        <a class="flex pl-2" href="tel:{$general?.phone1}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="pt-1 "
            width="32"
            height="32"
            fill="#fff"
            viewBox="0 0 30 30"
          >
            {@html Svg.phone}
        </svg>
        </a>
       
        <a class="flex" href="https://api.whatsapp.com/send?phone={$general.whatsapp}"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="pt-1 "
            width="32"
            height="32"
            fill="#fff"
            viewBox="0 0 80 80"
          >
            {@html Svg.whatsapp}
          </svg>
        </a>
       
        <a class="flex" href="mailto:info@sanitastravel.com.tr"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="pt-[0.2rem] "
            width="34"
            height="34"
            fill="#fff"
            viewBox="0 0 30 30"
          >
            {@html Svg.mail}
          </svg>
        </a>
       
        <a href="{$general?.facebook}" class="cursor-pointer  self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" "
            width="25"
            height="25"
            fill="#bc74a5"
            viewBox="0 0 37 37"
          >
            {@html Svg.facebook}
          </svg>
        </a>
       

        <a href="{$general.instagram}" class=" self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" "
            width="25"
            height="25"
            fill="#bc74a5"
            viewBox="0 0 37 37"
          >
            {@html Svg.instagram}
          </svg>
        </a>
       

        <a href="{$general.youtube}" class=" self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" "
            width="25"
            height="25"
            viewBox="0 0 115 115"
          >
            {@html Svg.youtube}
          </svg>
        </a>
      </div>

       
       
       
        {#if $langs}
          <LangSelect
            value={newLang}
            change={(value) => langTrigger(value)}
            values={$langs}
            title={"Lang"}
            valuesKey={"lang"}
            valuesTitleKey={"lang"}
            required={false}
            customClass={"uppercase text-lg font-bold bg-transparent w-16 pb-1 appearance-none shadow-none border border-transparent rounded-md pl-3 text-light-300 focus:outline-none focus:ring-white focus:border-white sm:text-sm "}
          />
        {/if}
      </div>
  </div>
{/if}
