<script>
  let textColor = 'red'; // Variável para a cor do texto
  let backgroundColor = 'yellow'; // Variável para a cor de fundo

  function alterarEstilos() {
    // Função para alternar as cores
    textColor = textColor === 'red' ? 'blue' : 'red';
    backgroundColor = backgroundColor === 'yellow' ? 'lightgreen' : 'yellow';
  }
</script>

<main>
  <h1>Exemplo de Estilos CSS Inline com Variáveis em Svelte</h1>
  <!-- Declarando estilos inline com variáveis -->
  <p style="color: {textColor}; background-color: {backgroundColor};">
    Este parágrafo tem estilos inline com variáveis.
  </p>

  <button on:click={alterarEstilos}>Alternar Cores</button>
</main>
