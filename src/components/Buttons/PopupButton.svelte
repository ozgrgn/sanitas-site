<script>
  import FormPopup from '$components/Form/FormPopup.svelte';


	import { modal } from '$services/store';
	const showModal = () => modal.set(FormPopup);
    export let buttonText;
    export let customCss;

</script>



<button
	class={customCss}
	on:click={()=>showModal()}
>
	{buttonText}
</button>
