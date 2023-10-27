<!-- App.svelte -->
<script>
  // Aqui você pode definir variáveis, estados ou lógica de aplicativo global
  let contador = 0;

  function incrementarContador() {
    contador += 1;
  }
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>

  <!-- Exibe o valor do contador -->
  <p>Contador: {contador}</p>

  <!-- Botão para incrementar o contador -->
  <button on:click={incrementarContador}>Incrementar</button>

  <!-- Inclua outros componentes aqui -->
  <ComponentePersonalizado />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 400px;
    margin: 0 auto;
  }

  h1 {
    color: #007bff;
    font-size: 2em;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
</style>
