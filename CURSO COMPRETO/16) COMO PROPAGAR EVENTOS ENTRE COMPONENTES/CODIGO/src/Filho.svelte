<script>
  let mensagemRecebida = "";

  function receberEvento(event) {
    mensagemRecebida = event.detail.mensagem;
  }
</script>

<div>
  <h2>Componente Filho</h2>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
</div>
