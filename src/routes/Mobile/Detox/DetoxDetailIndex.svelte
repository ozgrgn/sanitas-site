<script>
  import TreatmentDetail from "./TreatmentDetail.svelte";
  import TreatmentDetailForm from "./TreatmentDetailForm.svelte";
  import { useParams } from "svelte-navigator";
  import TreatmentHero from "./TreatmentHero.svelte";

  let treatment = {
    _id: "63d776d019c985b20b95063f",
    lang: "en",
    title: "Detox",
    perma: "detox",
    spot: "asdf",
    header: "Laser Eye Treatment",
    shortDesc: "Laser eye surgery in Antalya: All you need to know.",
    text: "<h3>DETOX &amp; WEIGHT LOSS</h3><p>The urban life exposes us to an excessive amount of toxins. These accumulated toxins affect our body functions and cause numerous health problems and decrease our energy. Combined with a relaxing holiday in Antalya, Sanitas detox programs are the ultimate way to heal your body and mind and recharge yourself with a healthy lifestyle.</p><p>Whether your main goal is weight loss, effective detoxication, healing with natural treatments or a mixture of all, there are numerous options among which you can choose from.</p><br><h3>MASTER DETOX</h3><p>The juice fasting Master Detox program is one of the most effective detox programs. The program allows you to feel inner cleansing in a short period of time as it is a liquid-only no eating program.&nbsp;</p><p>During your Master Detox program in Antalya, you will be completely away from stress, feel no hunger and be always medically supervised. It also leads the way to weight loss in the long term: you’ll get all the nutrient that’s necessary for your body while following a low-calorie plan.</p><br><h3>GREEN DETOX</h3><p>The Green Detox program allows you to feel renewed by cleansing and alkalizing your body. The program involves consumption of dark leafy greens such as chard, spinach and celery, with alkalizing lemon, ginger and cucumber.&nbsp;</p><p>It’s very similar with the master detox program: no eating and only juice. What makes this program special is the fact that you only drink green detox juice which increases the oxygen in your blood in a short period of time. It also relaxes your digestive system as it does not involve any foods with fiber.&nbsp;</p><p>During your Green Detox program in Antalya your body will receive all the necessary nutrients while staying away from toxins and high-calorie foods. Excess fat loss is also a benefit of the program.</p><br><h3>WEIGHT LOSS&nbsp;</h3><p>Reaching to your ideal weight in a short time is possible with our Weight Loss program. It is an intense, personalized program that’s prepared according to your needs.</p><p>The goal is to help you lose weight in a healthy way, get rid of the toxins, and improve your immune system with a correct diet plan and lifestyle changes.&nbsp;</p><br><h3>INCREASE YOUR LIFE QUALITY</h3><p>Our Weight Loss program in Antalya will not only help you lose weight, but also improve the quality of your life by changing habits and opening your mind to a different world.</p><br><h3>OPEN ALL YEAR ROUND</h3><p>You can join the program anytime you want. Our facility is open and the whole year. Not only you can join whenever you want, it’s also possible to stay as long as you want. You’re welcome to manage your program according to your availability and your desired goals, and participate in our weight loss program in a way that suits you.</p><br><h3>PEACEFUL AMBIENCE</h3><p>With 5-star accommodation in the beautiful Antalya, near seaside, you’ll have a chance truly relax and enjoy the tranquility we provide for our guests. You can also participate in various outdoor activities and explore around the town center during your detox and weight loss programs.</p><br><h3>HEALTHY NUTRITION</h3><p>Specially prepared healthy and tasty meals and rich, nutritious detox juices– the weight loss program includes unique foods and drinks that you’ll absolutely fall in love with!</p>",
    text2:
      "<h3>DETOX &amp; WEIGHT LOSS PACKAGE (4-21 days)<br><br></h3><ul><li><strong>Accommodation</strong></li> <li><strong>Individually prepared detox/meal plan</strong></li> <li><strong>Supplements</strong></li> <li><strong>Body composition analysis</strong></li> <li><strong>Doctor consultation</strong></li> <li><strong>Daily oxygen therapies</strong></li> <li><strong>Daily colon cleansing</strong></li> <li><strong>Unlimited access to the spa center (Turkish Bath, Sauna, Steam Bath)</strong></li> <li><strong>Daily infrared sauna</strong></li> <li><strong>Nature walks</strong></li> <li><strong>Yoga and meditation</strong></li> <li><strong>Workshops</strong></li> </ul> ",
    images: [
      { image: "/assets/img/detox/detox_2.webp" },
      { image: "/assets/img/detox/detox_3.webp" },
      { image: "/assets/img/detox/detox_4.webp" },
    ],
    isActive: true,
    order: 1,
    group: "63c96e6e3db348559caa6d8b",
    createdAt: "2023-01-30T07:50:40.063Z",
    updatedAt: "2023-01-31T11:47:37.963Z",
    __v: 0,
    description: "Laser eye surgery in Antalya: All you need to know.",
    image: "https://storage.googleapis.com/gumus-bucket/lasik.webp",
  };
</script>

{#if treatment}
  <div class="relative bg-primary h-96 w-full z-1">
    <img
      class="absolute top-0 h-96 w-full right-0 object-cover object-top z-1"
      src="/assets/img/detox/detox_1.jpeg"
      alt=""
    />
  </div>
  <div class="absolute top-0 left-0 w-full">
    <div class="container mx-auto z-20">
      <TreatmentHero {treatment} />
    </div>
  </div>
  <div class=" bg-gray-50 pt-20">
    <div class="container mx-auto px-4 ">
      <div class="  ">
        <TreatmentDetail {treatment} />
      </div>
      <div class=" mb-8"><TreatmentDetailForm /></div>
    </div>
  </div>
{/if}
