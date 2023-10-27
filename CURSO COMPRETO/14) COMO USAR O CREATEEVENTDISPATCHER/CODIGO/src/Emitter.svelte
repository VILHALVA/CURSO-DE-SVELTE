<script>
  import { createEventDispatcher, onDestroy } from 'svelte';

  // Crie um despachante de eventos
  const dispatch = createEventDispatcher();

  let mensagem = "";

  function enviarMensagem() {
    // Dispara um evento personalizado chamado "mensagem-enviada" com a mensagem como detalhe
    dispatch("mensagem-enviada", { mensagem });
  }

  // Remove o ouvinte quando o componente é destruído
  onDestroy(() => {
    window.removeEventListener("mensagem-recebida", receberMensagem);
  });
</script>

<main>
  <h1>Emitter Component</h1>
  <label>
    Mensagem:
    <input type="text" bind:value={mensagem}>
  </label>
  <button on:click={enviarMensagem}>Enviar Mensagem</button>
</main>
