<script>
  import { onMount, onDestroy } from 'svelte';

  let mensagemRecebida = "";

  // Ouvindo o evento personalizado "mensagem-enviada"
  function receberMensagem(event) {
    mensagemRecebida = event.detail.mensagem;
  }

  // Adicionando o ouvinte ao componente quando é montado
  onMount(() => {
    window.addEventListener("mensagem-enviada", receberMensagem);
  });

  // Remova o ouvinte quando o componente é destruído
  onDestroy(() => {
    window.removeEventListener("mensagem-enviada", receberMensagem);
  });
</script>

<main>
  <h1>Receiver Component</h1>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
</main>
