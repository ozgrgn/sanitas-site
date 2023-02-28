<script>
  import { perma } from "$services/store";
  import { lang,translate } from "$services/store";
  let name;
  let phone;
  let email;
  let formStatus;
  let dialCode;
  let warn;
  let lp = $lang + "/" + $perma;
  const addRes = async () => {
    let date = new Date().toLocaleString("tr-TR");

    let bodyData = {
      name,
      phone,
      lp,
      email,
      date,
    };

    if (!name || !phone) {
      warn = true;
      return;
    }
    warn = true;
    formStatus = true;


    // const res = await fetch("https://super-backend-44rz5nv3oq-ew.a.run.app/armadsdvsda-lp", {
    //   // const res = await fetch("http://localhost:3000", {
    //   method: "POST",
    //   body: JSON.stringify(bodyData),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });

    const json = await res.json();
    console.log(json);
  };
</script>
{#if $translate}
<div class="hero-contact-form sticky top-5">
  <div class="contact-form h-full py-5 px-5 leading-4 text-primary rounded-2xl shadow-xl border border-gray-10 w-full">
    <h3 class="form-header text-xl font-bold ">{$translate.form_header1}<br>{$translate.form_header2}</h3>
    <form class="contact__form">
      <div
        class="alert my-5 alert-success contact__msg {formStatus == true
          ? 'flex'
          : 'hidden'}"
      >
      {$translate.sent}
      </div>
      <div
        class="alert-warn mt-3 contact__msg {warn == true ? '' : 'hidden'}"
        role="alert"
      >
       <p class="text-red-500">Please enter your name and phone</p> 
      </div>
      <ul class={formStatus == true ? "hidden" : "block"}>
        <li class="h-12">
          <input
            style="
                background: url('/assets/img/user.png') no-repeat
                  scroll 7px 11px;
                background-size: 20px 20px;
                padding-left: 35px; 
               
              "
            type="text"
            name="name"
            placeholder={$translate.name}
            autocomplete="name"
            bind:value={name}
          />
        </li>
        <li>
          <div class="form-control w-full mt-2">
            <input
              bind:value={phone}
    
              class={" h-12  border-0 placeholder-blueGray-300 text-blueGray-600 bg-white  text-sm  focus:outline-none "}
              placeholder={$translate.phone}
              required={true}
              name="phone"
              autocomplete="phone"
            />
          </div>
        </li>
       
        <li>
          <button type="button" class="mt-8 bg-primary rounded-xl text-white h-10 px-5 font-bold text-center cursor-pointer capitalize shadow-xl" on:click={addRes}>
            {$translate.form_button}</button
          >
          <!-- <input
              type="submit"
              obc
              name="submit"
              value="Get Free Quote"
            /> -->
        </li>
        <li />
      </ul>
    </form>
  </div>
</div>
{/if}
<style>
  .hero-contact-form {
    text-align: -webkit-center;
  }




  .contact-form form {
    width: 100%;
    box-sizing: border-box;
  }
  .alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    text-align: center;
  }
  .alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .alert-warn {
    position: relative;
    color: grey;
    font-size: 12px;
  }
  .contact-form form ul li input
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
    background: #f5f5f5;
    box-shadow: 2px 2px 3px #bfbfbf4d;
  }
  
  .small-form form ul li input {
    height: 35px;
    border-radius: 5px;
  }
</style>
