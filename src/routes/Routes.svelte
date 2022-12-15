<script>
  import { Router, Route } from "svelte-navigator";
  import { lang } from "$services/store";
  import Index from "./Index.svelte";
  import Login from "./Login.svelte";
  import Top from "./Web/Header/Top.svelte";
  import Header from "./Web/Header/Header.svelte";
  export let langugage;
  console.log($lang, "lakaknana", langugage);
</script>

<div class="flex flex-col h-screen justify-between">
  <div>
    <Top />
    <Header />
  </div>
  fallalalal----{$lang}----
  <Router>
    <Route path="login" component={Login} />
    <Route path="home" component={Index} />
    <Route path="" component={Index} />
  </Router>

  <div>footer</div>
</div>
