<!-- Button.svelte -->
<script>
  export let buttonText = "Clique em mim"; // Definindo a propriedade buttonText
</script>

<button>
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
