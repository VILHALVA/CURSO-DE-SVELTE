<script>
  import { createEventDispatcher } from 'svelte';

  // Cria um despachante de eventos
  const dispatch = createEventDispatcher();

  let mensagem = "";

  function enviarMensagem() {
    // Dispara um evento personalizado "enviar" com a mensagem como detalhe
    dispatch("enviar", { mensagem });
  }
</script>

<main>
  <h1>Exemplo de Evento Personalizado em Svelte</h1>

  <label>
    Mensagem:
    <input type="text" bind:value={mensagem}>
  </label>

  <button on:click={enviarMensagem}>Enviar</button>
</main>
