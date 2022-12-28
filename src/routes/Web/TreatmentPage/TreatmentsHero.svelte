<script>
  import { link } from "svelte-navigator";
  import { lang } from "$services/store";


  let translate= 
  {
    "_id": "63874fd636ef0bab62589ea1",
    "lang": "en",
    "homePage": "Home",
    "createdAt": "2022-11-30T12:43:02.597Z",
    "updatedAt": "2022-11-30T19:52:39.085Z",
    "__v": 0,
    "about": "About",
    "contact": "Contact",
    "language": "Language",
    "treatments": "Treatments",
    "allTreatments": "All Treatments",
    "book_an_appointment": "Book an appointment",
    "call_us_anytime": "Call us anytime",
    "email_required": "E-Mail Requiered",
    "emergency_line": "24/7 Emergency Line",
    "friday": "Friday",
    "get_in_touch_with_us": "Get in touch with us",
    "mail": "Your E-Mail",
    "mail_us": "Email Us",
    "monday": "Monday",
    "name": "Your Name",
    "name_required": "Name requiered",
    "phone": "Your Phone",
    "phone_required": "Phone requiered",
    "saturday": "Saturday",
    "send": "Send",
    "sunday": "Sunday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday",
    "weekdays": "Monday - Friday",
    "write_us": "Write Us",
    "thursday": "Thursday",
    "workTime": "09:00 - 18:00",
    "weekendWorkDays": "Saturday",
    "book": "Book",
    "address": "Address",
    "book_by_phone": "Book By Phone",
    "note": "Note"
}
</script>
{#if translate}
<div class="flex text-lg text-white/90 pt-48">
  <a use:link href={`/${$lang}/home`}> {translate.homePage} </a>
  <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
  {translate.treatments}
  <div class=" w-1 h-1 m-3 mt-3 bg-white/50 rounded-full" />
  rsgs
</div>
<div
  class="text-6xl text-white/90 tracking-tight w-fit pt-8 border-b-4 border-white/80 h-28 "
>
  <span class="">Plastic Surgery</span>
</div>
<p class="text-white/90 w-1/2 pt-2 md:pt-8">
  Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. 
</p>
{/if}