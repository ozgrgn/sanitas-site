<script>
  import { lang, treatments, translate } from "$services/store";
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import RestService from "$services/rest";
  import PhoneInput from "./PhoneInput.svelte";
  import Select from "./Select.svelte";

  let name = undefined;
  let dialCode;
  let warn;
  let formStatus;
  let message;
  let email;
  let subject;
  let phone;
  let treatment
  const addRes = async () => {
    if (!name || !phone) {
      warn = true;
      return;
    }
    warn = false;
    formStatus = true;

    phone = dialCode + phone;
    let date = new Date().toLocaleString("tr-TR");
    let bodyData = {
      lang: $lang,
      name,
      date,
      treatment,
      phone,
      subject,
      message,
      undefined,
    };
    let addResResponse = await RestService.addRes(bodyData);
    if (addResResponse && addResResponse["status"]) {
    }
  };
</script>

<div class="md:p-4">
  <h2 class="text-3xl text-center pt-4 pb-8">{$translate?.form_header1} {$translate?.form_header2}</h2>
  <div
    class="alert my-5 alert-success contact__msg {formStatus == true
      ? 'flex'
      : 'hidden'}"
  >
    {$translate?.form_sent}
  </div>
  {#if !formStatus}
    <div class="flex flex-wrap my-4">
      <div class="w-full lg:w-6/12 md:px-4">
        <div class="relative w-full mb-3">
          <label
            class="block text-blueGray-600 text-xs font-bold mb-2"
            for="grid-name"
          >
            {$translate?.name}
          </label>
          <Input
            bind:value={name}
            type="text"
            autocomplete="name"
            placeholder={$translate?.name}
          />
        </div>
      </div>

      <div class="w-full lg:w-6/12 md:px-4">
        <div class="relative w-full mb-3">
          <label
            class="block text-blueGray-600 text-xs font-bold mb-2"
            for="grid-name"
          >
            {$translate?.mail}
          </label>
          <Input
            bind:value={email}
            bind:isValid={email}
            placeholder={$translate?.mail}
            type="email"
          />
        </div>
      </div>
      <div class="w-full lg:w-6/12 md:px-4">
        <div class="relative w-full mb-3">
          <label
            class="block text-blueGray-600 text-xs font-bold mb-2"
            for="grid-name"
          >
            {$translate?.phone}
          </label>
          <PhoneInput
            bind:dialCode
            bind:value={phone}
            placeholder={$translate?.phone}
            name="phone"
            autocomplete="phone"
          />
        </div>
      </div>
      <div class="w-full lg:w-6/12 md:px-4">
        <div class="relative w-full mb-3">
          <label
            class="block text-blueGray-600 text-xs font-bold mb-2"
            for="grid-name"
          >
            {$translate?.subject}
          </label>
          {#if $treatments}
          <Select
            bind:value={treatment}
            values={$treatments}
            title={$translate?.treatments}
            valuesKey={'_id'}
            valuesTitleKey={'header'}
            customClass={'w-full'}
          />
        {/if}


</div>
      </div>

      <div class="w-full lg:w-12/12 md:px-4">
        <div class="relative w-full mb-3">
          <label
            class="block text-blueGray-600 text-xs font-bold mb-2"
            for="grid-name"
          >
            {$translate?.note}
          </label>
          <Textarea bind:value={message} placeholder={$translate?.note} />
        </div>

        <div
          class="alert-warn text-sm contact__msg {warn == true ? '' : 'hidden'}"
          role="alert"
        >
          {name ? "" : $translate?.name_required}
          {phone ? "" : $translate?.phone_required}
        </div>
      </div>
    </div>
  {/if}
  <div class="w-full flex justify-center flex-wrap">
    <div class="w-12/12 md:px-4 text-left mt-1 ">
      <button
        on:click={addRes}
        disabled={formStatus}
        class="bg-primary disabled:bg-primary/70 text-white active:bg-bred-400 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 "
        type="button"
      >
        {$translate?.send}
      </button>
    </div>
  </div>
</div>

<style>
  .alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    text-align: center;
  }
  .alert {
    width: 100%;
    text-align: center;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .alert-warn {
    text-align: center;
    position: relative;
    color: red;
  }
</style>
