<script>
  import { Router, Route } from "svelte-navigator";
  import Top from "./Header/Top.svelte";
  import Header from "./Header/Header.svelte";
  import Index from "./Home/Index.svelte";
  import Footer from "./Footer/Footer.svelte";
  import TreatmentsGroupIndex from "./TreatmentsGroupPage/TreatmentsGroupIndex.svelte";
  import TreatmentDetailIndex from "./TreatmentPage/TreatmentDetailIndex.svelte";
  import AboutIndex from "./About/AboutIndex.svelte";
  import ContactIndex from "./Contact/ContactIndex.svelte";
  import RestService from "$services/rest";
  import Modal from "svelte-simple-modal";
  import { modal } from "$services/store";
  import {
    lang,
    langs,
    groups,
    treatments,
    general,
    translate,
    features,
  } from "$services/store";
  import FaqIndex from "./FAQ/FaqIndex.svelte";
  import DetoxDetailIndex from "./Detox/DetoxDetailIndex.svelte";
  import WhatsappButton from "$components/Buttons/WhatsappButton.svelte";
  const getGroups = async (lang) => {
    let response = await RestService.getGroups(undefined, undefined, lang);
    groups.set(response["groups"]);
  };
  $: getGroups($lang);
  const getFeatures = async (lang) => {
    let response = await RestService.getFeatures(lang);
    features.set(response["features"]);
  };
  $: getFeatures($lang);
  const getTreatments = async (lang) => {
    let response = await RestService.getTreatments(lang, undefined, true);
    treatments.set(response["treatments"]);
  };
  $: getTreatments($lang);
  const getGenerals = async (lang) => {
    let response = await RestService.getGenerals(lang);

    general.set(response["generals"][0]);
  };
  $: getGenerals($lang);
  const getTranslates = async () => {
    let response = await RestService.getTranslates($lang);
    translate.set(response["translates"][0]);
  };
  $: getTranslates($lang);
  const getLangs = async () => {
    let response = await RestService.getLangs(lang);
    langs.set(response["langs"]);
  };
  $: getLangs($lang);
</script>

<Modal show={$modal} />

<div class="flex flex-col justify-between w-screen overflow-hidden">
  <div>
    <!-- <Top /> -->
    <Header />
  </div>
  <div class="min-h-screen w-screen h-full">
    {#if $groups && features}
      <Router>
        <Route path="home" component={Index} />
        <Route path="about" component={AboutIndex} />
        <Route path="contact" component={ContactIndex} />
        <Route path="faqs" component={FaqIndex} />
        <Route path="detox" component={DetoxDetailIndex} />
        <Route path="treatments/:treatment" component={TreatmentDetailIndex} />
        <Route path="departments/:group" component={TreatmentsGroupIndex} />

        <Route path="" component={Index} />
      </Router>
      <div
			class="w-56 z-[100000000] rounded  text-white bottom-5 left-3 md:left-2 transition-all duration-1000 fixed "
		>
      <WhatsappButton {general}/>
      </div>
    {/if}
  </div>
  <Footer />
</div>
