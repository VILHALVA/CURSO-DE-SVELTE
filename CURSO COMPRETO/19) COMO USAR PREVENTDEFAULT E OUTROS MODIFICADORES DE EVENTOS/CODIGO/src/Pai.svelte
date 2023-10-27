<script>
  function handleClick(event) {
    event.preventDefault(); // Impede o comportamento padrão
    alert('O comportamento padrão do botão foi impedido!');
  }

  function handleDivClick(event) {
    event.stopPropagation(); // Impede a propagação do evento
    alert('O evento não será propagado para elementos pais.');
  }
</script>

<main>
  <h2>Pai Component</h2>
  <button on:click={handleClick}>Clique aqui para impedir recarregar a página</button>

  <div on:click={handleDivClick}>
    <button>Clique aqui para impedir propagação do evento para o div pai</button>
  </div>
</main>
