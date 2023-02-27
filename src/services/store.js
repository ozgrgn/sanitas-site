import { writable } from "svelte/store";

export const groups = writable(null);
export const treatments = writable(null);
export const general = writable(null);
export const translate = writable(null);
export const features = writable(null);
export const langs = writable(null);
export const lang = writable(null);


function isLocalStorageAvailable() {
  try {
 
    const _lang =
      localStorage.getItem("lang") && localStorage.getItem("lang") != "null"
        ? localStorage.getItem("lang")
        : (navigator.language || navigator.userLanguage).split("-")[0];
    console.log(navigator)

    lang.set(_lang);
    lang.subscribe((value) => {
      document.documentElement.setAttribute("lang", value);
      localStorage.setItem("lang", value);

      return true;
    });
  } catch (e) {
    lang.set("en");
    return false;
  }
}
isLocalStorageAvailable()


export const modal = writable(null);
export let perma = writable(null);

export const isOpenSearchBox = writable(false);




