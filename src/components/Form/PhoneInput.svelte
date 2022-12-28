<script>

  import intlTelInput from "intl-tel-input";
  import "intl-tel-input/build/css/intlTelInput.css";
  import { onDestroy, onMount } from "svelte";
  import { createFieldValidator } from "../Validators/validation.js";
  import { requiredValidator } from "../Validators/validator.js";
  export let value;
  export let name;
  export let dialCode;
  export let isValid;
  export let required;
  export let maxlength;
  export let type;
  export let disabled;
  export let autocomplete;
  export let placeholder = "Phone";
  export let customClass = "";
  let validate, validity;
  let validations = [];

  let phoneInput;
  let iti;

  if (required) {
    validations = [...validations, requiredValidator()];
  }

  if (type && type == "email") {
    validations = [...validations, emailValidator()];
  }
  [validity, validate] = createFieldValidator(...validations);

  const validityUnsub = validity.subscribe((_validity) => {
    isValid = _validity.valid;
  });

  let placeholderMask;

  const setPlaceHolderMask = () => {
    placeholderMask = placeholder.replace(/[1-9]/g, "0");
    maxlength = placeholderMask.length;
  };
  onDestroy(validityUnsub);

  const mask = (event) => {
    setTimeout(() => {
      let result = "";
      let placeholderMaskIndex = 0;
      if (event.target.value) {
        let targetValue = event.target.value.replace(/\s/g, "");
        targetValue = targetValue.replace(/[^0-9 -]/gi, "");
        for (
          let targetValueIndex = 0;
          targetValueIndex < targetValue.length;
          targetValueIndex++
        ) {
          let char = targetValue[targetValueIndex];

          if (char || char == "0") {
            if (placeholderMask[placeholderMaskIndex] == "0") {
              result = result + char;
            } else {
              result = result + " " + char;
              placeholderMaskIndex++;
            }
          } else {
            result = result + " ";
          }
          placeholderMaskIndex++;
        }
        value = result;
      }
    }, 100);
  };

  onMount(async () => {
    for (let index = 0; index < 10; index++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 50);
      });
      if (
        window.intlTelInputUtils &&
        window.intlTelInputUtils.getExampleNumber
      ) {
        break;
      }
    }

    iti = intlTelInput(phoneInput, {
      formatOnDisplay: true,
      autoPlaceholder: "off",
      initialCountry: "auto",
    
     });

  
  
    iti.setCountry("tr");
  geoIpLookup()
    placeholder = window.intlTelInputUtils
      .getExampleNumber(
        iti.getSelectedCountryData().iso2,
        true,
        window.intlTelInputUtils.numberFormat.INTERNATIONAL
      )
      .substring(1);
    dialCode = iti.getSelectedCountryData().dialCode;
    setPlaceHolderMask();

    phoneInput.addEventListener("countrychange", function (e) {
      placeholder = window.intlTelInputUtils
        .getExampleNumber(
          iti.getSelectedCountryData().iso2,
          true,
          window.intlTelInputUtils.numberFormat.INTERNATIONAL
        )
        .substring(1);
      setPlaceHolderMask();
      dialCode = iti.getSelectedCountryData().dialCode;
    });

    phoneInput.dispatchEvent(new Event("input"));
  });
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js"
  ></script>
</svelte:head>

<input
  bind:this={phoneInput}
  {maxlength}
  on:input={(event) => mask(event)}
  class="input  {customClass} disabled:bg-slate-100 outline-0"
  type="text"
  bind:value
  {placeholder}
  class:field-danger={!$validity.valid}
  class:field-success={$validity.valid}
  use:validate={value}
  {disabled}
  {name}
  {autocomplete}
/>

<!-- {#if $validity.dirty && !$validity.valid}
  <span class="text-blue-600 text-xs">
    {$TranslateApiMessage($validity?.message)}
  </span>
{/if} -->
<style>
  :global(.phoneInput .iti__flag-container) {
    padding-left: 30px;
  }
  :global(.phoneInput .iti__country, .iti__highlight, .iti__country-list) {
    background-color: #fff;
  }
  :global(.phoneInput .iti__country:nth-child(even)) {
    background-color: #fff;
  }
  :global(.iti) {
    display: block;
  }
  input
  {
    width: 100%;
    margin-top: 10px;
    display: block;
    line-height: 29px;
    font-size: 14px;
    outline: none;
    height: 45px;
    background: #ffffff;
    padding-left: 45px;
    box-sizing: border-box;
    border-radius: 10px;
    color: #1a2a38 !important;
    border: 1px solid #e4e4e4;
    box-shadow: 2px 2px 3px #bfbfbf4d;
  }

</style>
