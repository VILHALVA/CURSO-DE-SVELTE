<script>
  let nome = ""; // Variável reativa
  let concordo = false; // Variável reativa
</script>

<main>
  <h1>Exemplo de uso de bind em Svelte</h1>

  <label>
    Nome: 
    <input type="text" bind:value={nome}>
  </label>

  <label>
    <input type="checkbox" bind:checked={concordo}>
    Concordo com os termos e condições
  </label>

  <p>Nome digitado: {nome}</p>
  <p>Concordo: {concordo ? "Sim" : "Não"}</p>
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
    display: block;
    margin: 10px 0;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }
</style>
