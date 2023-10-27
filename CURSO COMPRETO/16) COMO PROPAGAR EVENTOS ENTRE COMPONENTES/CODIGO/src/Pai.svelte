<script>
  import Filho from './Filho.svelte'; // Importe o componente filho

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    // Disparar um evento personalizado "evento-do-pai" com detalhes
    dispatch("evento-do-pai", { mensagem: "Olá do componente pai!" });
  }
</script>

<main>
  <h1>Componente Pai</h1>
  <button on:click={handleClick}>Disparar Evento</button>

  <!-- Renderize o componente filho e passe o evento personalizado -->
  <Filho on:evento-do-pai={receberEvento}></Filho>
</main>
