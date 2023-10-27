<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let mensagem = "";

  function enviarMensagem() {
    const metadados = {
      remetente: "Emitter Component",
      dataEnvio: new Date(),
    };

    // Dispara um evento personalizado "mensagem-enviada" com a mensagem e metadados
    dispatch("mensagem-enviada", { mensagem, metadados });
  }
</script>

<main>
  <h1>Emitter Component</h1>
  <label>
    Mensagem:
    <input type="text" bind:value={mensagem}>
  </label>
  <button on:click={enviarMensagem}>Enviar Mensagem</button>
</main>
