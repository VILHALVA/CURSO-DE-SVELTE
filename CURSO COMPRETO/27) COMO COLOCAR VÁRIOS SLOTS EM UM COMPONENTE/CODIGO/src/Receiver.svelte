<script>
  import { onMount, onDestroy } from 'svelte';

  let mensagemRecebida = "";

  // Ouvindo o evento personalizado "evento-do-pai"
  function receberEvento(event) {
    mensagemRecebida = event.detail.mensagem;
  }

  onMount(() => {
    window.addEventListener("evento-do-pai", receberEvento);
  });

  onDestroy(() => {
    window.removeEventListener("evento-do-pai", receberEvento);
  }
</script>

<main>
  <h1>Receiver Component</h1>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
</main>
