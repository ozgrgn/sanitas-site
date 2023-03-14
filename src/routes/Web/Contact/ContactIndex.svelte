<script>
  import ContactHero from "./ContactHero.svelte";
  import RestService from "$services/rest";
  import { lang, general, translate } from "$services/store";
  import Input from "$components/Form/Input.svelte";
  import Textarea from "$components/Form/Textarea.svelte";
  import ContactForm from "$components/Form/ContactForm.svelte";

  let contact;

  const getContact = async () => {
    let response = await RestService.getContacts($lang);
    contact = response["contacts"][0];
  };
  getContact();
</script>
<svelte:head>
  <title>Sanitas Health Travel | {$translate.contact}</title>
  <meta name="description" content={$general.shortDesc} />
</svelte:head>
<div class="relative bg-primary h-96 w-full z-1">
  <img
    class="absolute top-0 h-96 w-full opacity-10 right-0 object-cover z-1"
    src="/assets/img/treatments/back1.jpeg"
    alt=""
  />
</div>
{#if contact && translate}
  <div class="absolute top-0 left-0 w-full">
    <div class="container mx-auto z-20">
      <ContactHero {contact} />
    </div>
  </div>
  <div class="container mx-auto my-8">
    <div class="lg:flex gap-10">
      {#if $general}
        <div class="lg:w-2/5 mt-5">
          <div class="flex flex-col">
            <img src={$general.map1} alt="" />
            <div class="flex pt-5">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path
                  fill="#4394a8"
                  d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445ZM10.571,2.771a1,1,0,1,0,.858,1.806,6,6,0,0,1,7.994,7.994,1,1,0,0,0,1.807.858A8,8,0,0,0,10.571,2.771Zm4.844,10.057a1,1,0,0,0,1.414,0,4,4,0,1,0-5.657-5.656,1,1,0,0,0,1.414,1.414,2.048,2.048,0,0,1,2.829,0,2,2,0,0,1,0,2.828A1,1,0,0,0,15.415,12.828Z"
                /></svg
              >
              <span class="font-semibold px-2"> {$translate.phone}: </span>
              <a
                href="tel:{$general.phone1}"
                class="font-medium text-secondary"
              >
                {$general.phone1}
              </a>
            </div>
            <div class="flex pt-4">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path
                  fill="#4394a8"
                  d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"
                /></svg
              >
              <span class="font-semibold px-2"> {$translate.mail}: </span>
              <a
                href="mailto:{$general.email1}"
                class="font-medium text-secondary"
              >
                {$general.email1}
              </a>
            </div>
            <div class="flex pt-4">
              <svg
                class="h-6 w-6 pl-[0.2rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                ><path
                  style="fill:#4394a8;"
                  d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
                />
                <path
                  style="fill:#fff;"
                  d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
                /></svg
              >
              <span class="font-semibold px-2"> Whatsapp: </span>
              <a
                href="https://wa.me/{$general.whatsapp}"
                class="font-medium text-secondary"
              >
                {$general.whatsapp}
              </a>
            </div>
            <div class="flex pt-4">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path 
                style="fill:#4394a8;"
                d="M12,22H12v0a12.816,12.816,0,0,0,7.988-12A7.992,7.992,0,1,0,4.008,10,12.816,12.816,0,0,0,12,22v0ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Z"/></svg
              >
              <span class="font-semibold px-2"> {$translate.address}: </span>
              <span class="font-medium text-secondary">
                {$general.address1}
                {$general.address2}
              </span>
            </div>
          </div>
        </div>
      {/if}

      <div class="lg:w-3/5 h-auto">
       <ContactForm {contact}/>
      </div>
    </div>
    <div class=""></div>
  </div>
{/if}
<div class="lg:mt-6 px-2">
<iframe title="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.7294612371147!2d30.725607315291978!3d36.87289397993379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39b32fd862fb9%3A0x7cd80535ad3c8989!2sSanitas%20Travel!5e0!3m2!1str!2sde!4v1674812968217!5m2!1str!2sde" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>