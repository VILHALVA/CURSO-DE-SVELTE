<!-- App.svelte -->
<script>
  function handleClick(event) {
    alert(`Botão clicado em ${event.clientX}, ${event.clientY}`);
  }
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <button on:click={handleClick}>
    Clique aqui
  </button>
  <Card>
    <Button on:click={handleClick} buttonText="Clique aqui"></Button>
  </Card>
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
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
