<!-- App.svelte -->
<script>
  import Routes from "./routes/Web/Routes.svelte";
  import { Router, Route, navigate } from "svelte-navigator";
  import { onDestroy, onMount } from "svelte";
  import { isDesktop } from "$services/utils";
  import DesktopRoutes from "./routes/Web/Routes.svelte";
  import MobileRoutes from "./routes/Mobile/Routes.svelte";
  import {
    lang,
  } from "$services/store";
  import moment from "moment/dist/moment.js";
  import "moment/dist/locale/tr.js";
  moment.locale($lang);

  onMount(() => {
    if (window.location.pathname == "/" || !window.location.pathname) {
      navigate(`/${$lang}/home`);
    }
    let splittedPathName = window.location.pathname.split("/");
    if (splittedPathName && splittedPathName[1].length > 2) {
      splittedPathName.splice(1, 0, $lang);
      navigate(splittedPathName.join("/"));
    }

    if (splittedPathName && splittedPathName[1].length == 2) {
      lang.set(splittedPathName[1]);
    }
  });
 
</script>
<Router primary={false}>
{#if isDesktop()}
<Route path="/:lang/*" component={DesktopRoutes} />
{:else}
<Route path="/:lang/*" component={MobileRoutes} />
{/if}
</Router>

