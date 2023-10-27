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
  <h1>Exemplo de Uso de Slots em Svelte</h1>
  <Parent>
    <!-- Conteúdo inserido no slot do componente filho -->
    <p>Este é um parágrafo inserido no slot do componente filho.</p>
  </Parent>
</main>
