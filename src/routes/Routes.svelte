<script>
  import { Router, Route } from "svelte-navigator";
  import { groups,treatments } from "$services/store";
  import Top from "./Web/Header/Top.svelte";
  import Header from "./Web/Header/Header.svelte";
  import Index from "./Web/Home/Index.svelte";
  import Footer from "./Web/Footer/Footer.svelte";
  import TreatmentsGroupIndex from "./Web/TreatmentsGroupPage/TreatmentsGroupIndex.svelte";
  import TreatmentDetailIndex from "./Web/TreatmentPage/TreatmentDetailIndex.svelte";
  import AboutIndex from "./Web/About/AboutIndex.svelte";
</script>

<div class="flex flex-col justify-between">
  <div>
    <Top />
    <Header />
  </div>
<div class="min-h-screen h-full">
  {#if $groups && $treatments}
  <Router>
    <Route path="home" component={Index} />
    <Route path="about" component={AboutIndex} />

    <Route path="treatments/:treatment" component={TreatmentDetailIndex} />
    <Route path="departments/:group" component={TreatmentsGroupIndex} />

    <Route path="" component={Index} />
  </Router>
  {/if}
</div>
<Footer/>
</div>
