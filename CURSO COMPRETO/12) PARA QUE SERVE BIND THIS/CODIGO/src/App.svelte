<script>
  let meuElemento; // Variável para armazenar a referência ao elemento do botão
</script>

<main>
  <h1>Exemplo de uso de bind:this em Svelte</h1>

  <button bind:this={meuElemento} on:click={fazerAlgoComElemento}>
    Clique em mim
  </button>
</main>

<script>
  function fazerAlgoComElemento() {
    // Acessando o elemento diretamente
    meuElemento.style.backgroundColor = 'lightblue';
  }
</script>

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

  button {
    background-color: #0078d4;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
</style>
