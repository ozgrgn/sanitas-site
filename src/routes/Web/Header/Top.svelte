<script>
  import Svg from "../../../assets/svg.json";
  import LangSelect from "$components/Form/LangSelect.svelte";
  import { navigate } from "svelte-navigator";
  import { lang } from "$services/store";

  let newLang;
  let langs = [
    { key: "en", name: "EN" },
    { key: "tr", name: "TR" },
  ];
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

<div
  class="h-12 bg-secondary text-sm text-white flex flex-col justify-center cursor-pointer "
>
  <div class="container mx-auto flex justify-between">
    <div class="flex justify-around self-center">
      <a class="flex" href="tel:0902423490909">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pt-1 "
          width="22"
          height="25"
          fill="#fff"
          viewBox="0 0 30 30"
        >
          {@html Svg.phone}
        </svg> Tel:+90 242 349 09 09
      </a>
      <span class="px-3">|</span>
      <a class="flex" href="mailto:info@sanitastravel.com.tr"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="pt-1 "
          width="22"
          height="24"
          fill="#fff"
          viewBox="0 0 80 80"
        >
          {@html Svg.whatsapp}
        </svg>Whatsapp:+90 242 349 09 09
      </a>
      <span class="px-3">|</span>
      <a class="flex" href="mailto:info@sanitastravel.com.tr"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="pt-[0.03rem] "
          width="22"
          height="26"
          fill="#fff"
          viewBox="0 0 30 30"
        >
          {@html Svg.mail}
        </svg>info@sanitastravel.com.tr
      </a>
    </div>

    <div class="flex justify-between">
      <a href="/#" class="cursor-pointer pr-2 self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class=" "
          width="25"
          height="25"
          fill="#bc74a5"
          viewBox="0 0 35 35"
        >
          {@html Svg.facebook}
        </svg>
      </a>
      <a href="/#" class="pr-2 self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class=" "
          width="25"
          height="25"
          fill="#bc74a5"
          viewBox="0 0 35 35"
        >
          {@html Svg.instagram}
        </svg>
      </a>
      <a href="/#" class="pr-5 self-center">
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

      <LangSelect
        value={newLang}
        change={(value) => langTrigger(value)}
        values={langs}
        title={"Lang"}
        valuesKey={"key"}
        valuesTitleKey={"key"}
        required={false}
        customClass={"uppercase text-sm bg-transparent w-20 appearance-none shadow-none border border-transparent rounded-md pl-3 text-light-300 focus:outline-none focus:ring-white focus:border-white sm:text-sm "}
      />
    </div>
  </div>
</div>
