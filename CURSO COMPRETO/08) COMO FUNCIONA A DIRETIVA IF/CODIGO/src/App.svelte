<script>
  let mostrarElemento = true; // Variável reativa que controla a renderização
</script>

<main>
  <h1>Exemplo de Diretiva if em Svelte</h1>

  <label>
    <input type="checkbox" bind:checked={mostrarElemento}>
    Mostrar Elemento
  </label>

  {#if mostrarElemento}
    <p>Este elemento será renderizado se mostrarElemento for verdadeiro.</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 600;
  }

  label {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }
</style>
