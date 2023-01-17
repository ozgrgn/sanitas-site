import { writable } from "svelte/store";



const _lang =
  localStorage.getItem("lang") && localStorage.getItem("lang") != "null"
    ? localStorage.getItem("lang")
    : (navigator.language || navigator.userLanguage).split("-")[0];
console.log(navigator)

export const lang = writable(_lang);
lang.subscribe((value) => {
  document.documentElement.setAttribute("lang", value);
  localStorage.setItem("lang", value);
});



export const modal = writable(null);
export let perma = writable(null);

export const isOpenSearchBox = writable(false);




