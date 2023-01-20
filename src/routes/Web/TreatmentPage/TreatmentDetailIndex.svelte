<script>
  import TreatmentDetail from "./TreatmentDetail.svelte";
  import TreatmentDetailForm from "./TreatmentDetailForm.svelte";
  import TreatmentsHero from "./TreatmentsHero.svelte";
import {treatments} from "$services/store"
import { useParams } from "svelte-navigator";


const params = useParams();

let treatment;
  if (($params, $treatments))
    treatment = $treatments.find((a) => a.perma == $params.treatmentId);

console.log(treatment,"artık bu treatment")
</script>

<div class="relative bg-primary h-96 w-full z-1">
  <img
    class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
    src="/assets/img/treatments/back1.jpeg"
    alt=""
  />
</div>
<div class="absolute top-0 left-0 w-full">
  <div class="container mx-auto z-20">
    <TreatmentsHero {treatment} />
  </div>
</div>
<div class=" bg-gray-50 pt-20">
  <div class="container mx-auto grid grid-cols-4 gap-10">
    <div class=" col-span-1"><TreatmentDetailForm /></div>
    <div class="col-span-3  ">
      <TreatmentDetail {treatment}/>
    </div>
    
  </div>
</div>
