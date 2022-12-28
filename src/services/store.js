import { writable } from "svelte/store";
import moment from "moment"



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


export const seats = writable(JSON.parse(localStorage.getItem("seats")) || null);
seats.subscribe((value) => {
  localStorage.setItem("seats", JSON.stringify(value));
});


export const modal = writable(null);
export let perma = writable(null);

export const isOpenSearchBox = writable(false);




