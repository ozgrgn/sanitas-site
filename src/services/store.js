import { writable } from "svelte/store";

export const groups = writable(null);
export const treatments = writable(null);
export const general = writable(null);
export const translate = writable(null);
export const features = writable(null);
export const langs = writable(null);


// function isLocalStorageAvailable() {
//   try {

//     const _lang =
//       localStorage.getItem("lang") && localStorage.getItem("lang") != "null"
//         ? localStorage.getItem("lang")
//         : (navigator.language || navigator.userLanguage).split("-")[0];
//     console.log(navigator)

//     lang.set(_lang);
//     lang.subscribe((value) => {
//       document.documentElement.setAttribute("lang", value);
//       localStorage.setItem("lang", value);

//       return true;
//     });
//   } catch (e) {
//     lang.set("en");
//     return false;
//   }
// }
// isLocalStorageAvailable()

// function isLocalStorageAvailable() {
//   try {
const _lang =
  localStorage.getItem("lang") && localStorage.getItem("lang") != "null"
    ? localStorage.getItem("lang")
    : (navigator.language || navigator.userLanguage).split("-")[0];
if (_lang != "en" && _lang != "ru" && _lang != "de") {
  _lang = "en"
}

export const lang = writable(_lang);
lang.subscribe((value) => {
  document.documentElement.setAttribute("lang", value);
  localStorage.setItem("lang", value);
});

export const modal = writable(null);
export let perma = writable(null);

export const isOpenSearchBox = writable(false);




