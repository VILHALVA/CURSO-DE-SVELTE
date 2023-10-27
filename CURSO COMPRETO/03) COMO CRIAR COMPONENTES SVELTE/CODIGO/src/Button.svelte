<script>
  let buttonText = "Clique em mim";
  
  function handleClick() {
    alert("Botão clicado!");
  }
</script>

<button on:click={handleClick}>
  {buttonText}
</button>

<style>
  button {
    background-color: #0078d4;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
</style>
