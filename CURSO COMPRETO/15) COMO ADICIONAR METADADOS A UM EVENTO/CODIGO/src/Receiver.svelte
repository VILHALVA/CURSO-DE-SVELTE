<script>
  import { onMount } from 'svelte';

  let mensagemRecebida = "";
  let metadadosRecebidos = {};

  function receberMensagem(event) {
    mensagemRecebida = event.detail.mensagem;
    metadadosRecebidos = event.detail.metadados;
  }

  onMount(() => {
    window.addEventListener("mensagem-enviada", receberMensagem);
  });
</script>

<main>
  <h1>Receiver Component</h1>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
  <p>Metadados Recebidos:</p>
  <pre>{JSON.stringify(metadadosRecebidos, null, 2)}</pre>
</main>
