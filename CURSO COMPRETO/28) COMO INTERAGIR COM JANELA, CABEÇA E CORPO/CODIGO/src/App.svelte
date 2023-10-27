<script>
  let mensagem = 'Olá, mundo!';

  function abrirNovaJanela() {
    window.open('https://www.example.com', '_blank');
  }
</script>

<html>
  <head>
    <title>Exemplo Svelte</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>{mensagem}</h1>
    <button on:click={abrirNovaJanela}>Abrir Nova Janela</button>
  </body>
</html>
