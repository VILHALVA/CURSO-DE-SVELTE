<script>
  let isActive = true;
  let isHighlighted = false;
</script>

<main>
  <h1>Exemplo de Classes CSS Condicionais em Svelte</h1>
  <!-- Adicionando classes condicionais com a diretiva "class:" -->
  <p class:active={isActive} class:highlighted={isHighlighted}>
    Este parágrafo tem classes condicionais.
  </p>
  <button on:click={() => (isActive = !isActive)}>Alternar Ativo</button>
  <button on:click={() => (isHighlighted = !isHighlighted)}>Alternar Destacado</button>
</main>
