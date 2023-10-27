<!-- App.svelte -->
<script>
  // Nenhum código JavaScript necessário no componente App
</script>

<main>
  <h1>Exemplo de Múltiplos Slots em Svelte</h1>

  <MultiSlotComponent>
    <!-- Conteúdo inserido no slot do cabeçalho -->
    <p slot="header">Este é o cabeçalho personalizado</p>

    <!-- Conteúdo principal inserido no slot sem nome (default) -->
    <p>Este é o conteúdo principal</p>

    <!-- Conteúdo inserido no slot do rodapé -->
    <button slot="footer">Botão no Rodapé</button>
  </MultiSlotComponent>
</main>
