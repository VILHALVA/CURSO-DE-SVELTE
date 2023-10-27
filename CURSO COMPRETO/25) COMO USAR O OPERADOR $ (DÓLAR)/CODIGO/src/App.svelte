<script>
  // Definindo variáveis reativas
  let count = 0;
  let width = 100;
  let height = 50;
  let imageUrl = 'imagem.jpg';

  // Função para atualizar a variável reativa "count"
  function incrementCount() {
    count += 1;
  }
</script>

<main>
  <h1>Exemplo de Uso do Operador $ em Svelte</h1>

  <!-- Acessando variáveis reativas com o operador $ -->
  <p>O valor de count é {$count}.</p>

  <!-- Acessando propriedades com o operador $ -->
  <img src="{$imageUrl}" alt="Imagem">
  
  <!-- Usando expressões reativas com o operador $ -->
  <p>A área do retângulo é {$width * $height} pixels quadrados.</p>
  
  <!-- Atualizando a variável reativa "count" com um botão -->
  <button on:click={incrementCount}>Incrementar Count</button>
</main>
