<script>
  import { Router, Route } from "svelte-navigator";
  import { lang } from "$services/store";
  import Login from "./Login.svelte";
  import Top from "./Web/Header/Top.svelte";
  import Header from "./Web/Header/Header.svelte";
  import Index from "./Web/Home/Index.svelte";
  import Footer from "./Web/Footer/Footer.svelte";
  import TreatmentsGroupIndex from "./Web/TreatmentsGroupPage/TreatmentsGroupIndex.svelte";
  import TreatmentDetailIndex from "./Web/TreatmentPage/TreatmentDetailIndex.svelte";
  import AboutIndex from "./Web/About/AboutIndex.svelte";
  export let langugage;
  console.log($lang, "lakaknana", langugage);
</script>

<div class="flex flex-col  justify-between">
  <div>
    <Top />
    <Header />
  </div>
<div class="min-h-screen h-full">
  <Router>
    <Route path="login" component={Login} />
    <Route path="home" component={Index} />
    <Route path="about" component={AboutIndex} />

    <Route path="treatments/*" component={TreatmentDetailIndex} />
    <Route path="groups/*" component={TreatmentsGroupIndex} />

    <Route path="" component={Index} />
  </Router>
</div>
  fallalalal----{$lang}----
<Footer/>
</div>
