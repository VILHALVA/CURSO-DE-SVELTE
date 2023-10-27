<script>
  let isActive = true;
</script>

<style>
  /* Estilos incorporados */
  p {
    color: blue;
  }

  /* Estilos condicionais com classes */
  p.active {
    color: green;
  }
</style>

<link rel="stylesheet" href="./styles.css" />

<main>
  <h1>Exemplo de Estilos em Svelte</h1>
  <p class:p={isActive}>Este parágrafo tem estilo condicional.</p>
  <p>Este parágrafo tem estilo incorporado.</p>
</main>
