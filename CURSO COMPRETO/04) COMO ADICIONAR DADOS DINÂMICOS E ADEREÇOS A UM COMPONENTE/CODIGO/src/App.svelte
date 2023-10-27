<!-- App.svelte -->
<script>
  import Button from './Button.svelte'; // Importando o componente Button
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <p>Olá, mundo!</p>
  <Button buttonText="Clique aqui"></Button> <!-- Passando um valor personalizado para buttonText -->
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