<!-- App.svelte -->
<script>
  import Routes from "./routes/Routes.svelte";
  import { Router, Route, navigate } from "svelte-navigator";
  import { onDestroy, onMount } from "svelte";
  import {
    lang,
    langs,
    groups,
    treatments,
    general,
    translate,
    features,
  } from "$services/store";
  import RestService from "$services/rest";
  import moment from "moment/dist/moment.js";
  import "moment/dist/locale/tr.js";
  moment.locale($lang);

  onMount(() => {
    if (window.location.pathname == "/" || !window.location.pathname) {
      navigate(`/${$lang}/home`);
    }
    console.log($lang, "langeefw");
    let splittedPathName = window.location.pathname.split("/");
    if (splittedPathName && splittedPathName[1].length > 2) {
      splittedPathName.splice(1, 0, $lang);
      navigate(splittedPathName.join("/"));
    }

    if (splittedPathName && splittedPathName[1].length == 2) {
      lang.set(splittedPathName[1]);
    }
  });
  const getGroups = async () => {
    let response = await RestService.getGroups(undefined, undefined, $lang);
    groups.set(response["groups"]);

    console.log($groups, "groups");
  };
  getGroups();
  const getFeatures = async () => {
    let response = await RestService.getFeatures($lang);
    features.set(response["features"]);
    console.log(features, "features");
  };
  getFeatures();
  const getTreatments = async () => {
    let response = await RestService.getTreatments($lang, undefined, true);
    treatments.set(response["treatments"]);

    console.log($treatments, "treatments");
  };
  getTreatments();
  const getGenerals = async () => {
    let response = await RestService.getGenerals(undefined, undefined, $lang);

    general.set(response["generals"][0]);
    console.log($general, "general");
  };
  getGenerals();
  const getTranslates = async () => {
    let response = await RestService.getTranslates($lang);
    translate.set(response["translates"][0]);
    console.log($translate, "translate");
  };
  getTranslates();
  const getLangs = async () => {
    let response = await RestService.getLangs();
    langs.set(response["langs"]);
    console.log($langs, "langs");
  };
  getLangs();
</script>

<Router primary={false}>
  <Route path="/:lang/*" component={Routes} />
</Router>
