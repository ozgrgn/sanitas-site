<!-- App.svelte -->
<script>
  import Routes from "./routes/Routes.svelte";
  import { Router, Route, navigate } from "svelte-navigator";
  import { lang } from "$services/store";
  import { onDestroy, onMount } from "svelte";
  import RestService from "$services/rest";

  import moment from "moment/dist/moment.js";
  import "moment/dist/locale/tr.js";
  moment.locale($lang);

  onMount(() => {
    if (window.location.pathname == "/" || !window.location.pathname) {
      navigate(`/${$lang}/home`);
    }
    console.log($lang,"langeefw")
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

  <Route path="/:lang/*" component={Routes} />
</Router>
