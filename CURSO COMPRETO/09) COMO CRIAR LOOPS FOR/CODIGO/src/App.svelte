<script>
  let nomes = ["Alice", "Bob", "Carol", "David"];
</script>

<main>
  <h1>Lista de Nomes</h1>

  <ul>
    {#each nomes as nome, index (nome)}
      <li>{nome} (índice {index + 1})</li>
    {/each}
  </ul>
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

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }
</style>
