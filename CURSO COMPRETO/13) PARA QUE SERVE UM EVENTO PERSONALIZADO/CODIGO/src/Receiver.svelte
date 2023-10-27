<script>
  import { onMount } from 'svelte';

  let mensagemRecebida = "";

  onMount(() => {
    // Ouve o evento personalizado "enviar"
    window.addEventListener("enviar", (event) => {
      mensagemRecebida = event.detail.mensagem;
    });
  });
</script>

<div>
  <h2>Componente Receiver</h2>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
</div>
