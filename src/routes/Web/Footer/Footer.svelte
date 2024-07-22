<script>
  import { link, navigate } from "svelte-navigator";

  import Svg from "../../../assets/svg.json";
  import LangSelect from "../../../components/Form/LangSelect.svelte";
  import {
    lang,
    treatments,
    translate,
    general,
    groups,
    langs,
  } from "$services/store";
  const langTrigger = (_lang) => {
    lang.set(_lang);
    navigate(`/${_lang}/home`);
  };
</script>

{#if $general && $translate}
  <footer class="relative bg-primary mt-5" aria-labelledby="footer-heading">
    <div class="max-w-7xl mx-auto py-12">
      <div class="pb-8 md:grid xl:grid-cols-6 xl:gap-1">
        <div class="md:grid md:grid-cols-2 gap-8 xl:col-span-4">
          <div class="first">
            <div class="md:grid-cols-1 md:gap-8">
              <div>
                <h3
                  class="text-sm font-semibold text-white tracking-wider uppercase"
                >
                  {$general?.brand}
                </h3>

                <div class="">
                  <p class=" px-2 pt-5 text-sm tracking-tight text-gray-200">
                    {$general?.shortDesc}
                  </p>
                  <a href="https://www.tursab.org.tr/tr/ddsv" target="_blank"
                    ><img
                      class="h-10 mt-4"
                      src="/assets/tursab-dvs-7996.png"
                      alt=""
                    /></a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 md:mt-0 md:grid md:grid-cols-1">
            <div>
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                {$translate?.treatments}
              </h3>
              <div class="grid-rows-1">
                <div class="grid grid-cols-2">
                  <div class="">
                    <ul class="mt-4 space-y-1">
                      {#each Array(5) as treatment, i}
                        {#if $groups && $groups[i]}
                          <li>
                            <a
                              use:link
                              href="/{$lang}/departments/{$groups[i].perma}"
                              class="text-sm text-gray-200 hover:text-white"
                            >
                              {$groups[i].title}
                            </a>
                          </li>
                        {/if}
                      {/each}
                    </ul>
                  </div>
                  <ul class="mt-4 space-y-1 text-sm">
                    {#each Array(5) as treatment, i}
                      {#if $groups && $groups[i + 5]}
                        <li>
                          <a
                            use:link
                            href="/{$lang}/departments/{$groups[i + 5].perma}"
                            class="text-sm text-gray-200 hover:text-white"
                          >
                            {$groups[i + 5].title}
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
          <div class=" mt-10 lg:mt-0 md:grid md:grid-cols-1">
            <div>
              <h3
                class="text-sm font-semibold text-white tracking-wider uppercase"
              >
                {$translate?.contact}
              </h3>
              {#if $general}
                <div class="px-2">
                  <p class=" pt-5 text-sm tracking-tight text-gray-200">
                    <a href="tel:{$general?.phone2}">
                      {$general?.phone2}
                    </a>
                  </p>
                  <p class=" pt-4 text-sm tracking-tight text-gray-200">
                    <a href="mailto:{$general?.email1}"> {$general?.email1}</a>
                  </p>
                  <p class=" pt-4 text-sm tracking-tight text-gray-200">
                    {$general?.address1}
                    {$general?.address2}
                  </p>
                </div>
              {/if}
            </div>
          </div>
        </div>
        <div class="mt-12 xl:mt-0">
          <div class=" text-white text-sm gap-2">
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#d12d24"
                  ></rect>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                  <path
                    fill="#fff"
                    d="M19.807 16L21 14.358 19.069 14.985 17.876 13.342 17.876 15.373 15.945 16 17.876 16.627 17.876 18.658 19.069 17.015 21 17.642 19.807 16z"
                  ></path>
                  <path
                    d="M15.953,19.325c-1.837,1.65-4.663,1.5-6.314-.337s-1.5-4.663,.337-6.314c1.837-1.65,4.663-1.5,6.314,.337-.442-.699-1.035-1.292-1.734-1.734-2.608-1.65-6.06-.874-7.711,1.734-1.65,2.608-.874,6.06,1.734,7.711,2.608,1.65,6.06,.874,7.711-1.734-.106,.118-.219,.231-.337,.337Z"
                    fill="#fff"
                  ></path>
                </svg>
                <span>Antalya</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+905317253346"
                >+905317253346</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#fff"
                  ></rect>
                  <path
                    fill="#be2a2a"
                    d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>London</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+447551236460"
                >+447551236460</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#fff"
                  ></rect>
                  <path
                    fill="#be2a2a"
                    d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>Birmingham</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+447771414764"
                >+447771414764</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path fill="#f1c142" d="M1 10H31V22H1z"></path>
                  <path
                    d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                    fill="#a0251e"
                  ></path>
                  <path
                    d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 16 24.5)"
                    fill="#a0251e"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>Valencia</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+34670357049"
                >+34670357049</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path fill="#f8dc51" d="M10 4H22V28H10z"></path>
                  <path
                    d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  ></path>
                  <path
                    d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 26 16)"
                    fill="#dd4446"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>Bruxelles</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+905320664170"
                >+905320664170</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path fill="#f8dc51" d="M10 4H22V28H10z"></path>
                  <path
                    d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                  ></path>
                  <path
                    d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 26 16)"
                    fill="#dd4446"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>Antwerpen</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+905320664170"
                >+905320664170</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path fill="#fff" d="M1 11H31V21H1z"></path>
                  <path
                    d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                    fill="#a1292a"
                  ></path>
                  <path
                    d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 16 24)"
                    fill="#264387"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>Amsterdam</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+905320664170"
                >+905320664170</a>
              </div>
            </div>
            
            <div class="flex justify-between gap-2">
              <div class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path fill="#fff" d="M10 4H22V28H10z"></path>
                  <path
                    d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    fill="#092050"
                  ></path>
                  <path
                    d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 26 16)"
                    fill="#be2a2c"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
                <span>Paris</span>
              </div>
              <div class="flex justify-start w-full">
                <a
                  class="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500"
                  href="tel:+905320664170"
                >+905320664170</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div
        class="mt-8 border-t border-white/50 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a href={$general?.facebook}>
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
          <a href={$general?.instagram}>
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
          <a href={$general?.youtube}>
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
          <a href="https://api.whatsapp.com/send?phone={$general.whatsapp}">
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
{/if}
