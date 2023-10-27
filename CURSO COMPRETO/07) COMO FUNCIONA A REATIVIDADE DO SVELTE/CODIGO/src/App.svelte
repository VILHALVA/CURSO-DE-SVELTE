<script>
  // Declaração de variáveis reativas
  let count = 0;
  let nome = "";

  // Função para lidar com o clique do botão
  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Aplicativo Svelte com Reactividade</h1>
  <p>Contagem: {count}</p>
  <button on:click={increment}>Incrementar</button>

  <input type="text" placeholder="Digite seu nome" bind:value={nome}>
  <p>Olá, {nome}!</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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

  input {
    width: 100%;
    padding: 0.5rem;
    margin: 10px 0;
  }
</style>
