<script>
  import { Router, Route } from "svelte-navigator";
  import Top from "./Web/Header/Top.svelte";
  import Header from "./Web/Header/Header.svelte";
  import Index from "./Web/Home/Index.svelte";
  import Footer from "./Web/Footer/Footer.svelte";
  import TreatmentsGroupIndex from "./Web/TreatmentsGroupPage/TreatmentsGroupIndex.svelte";
  import TreatmentDetailIndex from "./Web/TreatmentPage/TreatmentDetailIndex.svelte";
  import AboutIndex from "./Web/About/AboutIndex.svelte";
  import ContactIndex from "./Web/Contact/ContactIndex.svelte";
  import RestService from "$services/rest";

  import {
    lang,
    langs,
    groups,
    treatments,
    general,
    translate,
    features,
  } from "$services/store";
  import FaqIndex from "./Web/FAQ/FaqIndex.svelte";
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

<div class="flex flex-col justify-between">
  <div>
    <Top />
    <Header />
  </div>
<div class="min-h-screen h-full">
  {#if $groups && $treatments && features}
  <Router>
    <Route path="home" component={Index} />
    <Route path="about" component={AboutIndex} />
    <Route path="contact" component={ContactIndex} />
    <Route path="faqs" component={FaqIndex} />


    <Route path="treatments/:treatment" component={TreatmentDetailIndex} />
    <Route path="departments/:group" component={TreatmentsGroupIndex} />

    <Route path="" component={Index} />
  </Router>
  {/if}
</div>
<Footer/>
</div>
