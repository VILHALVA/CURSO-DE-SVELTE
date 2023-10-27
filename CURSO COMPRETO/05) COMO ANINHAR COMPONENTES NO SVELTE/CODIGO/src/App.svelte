<!-- App.svelte -->
<script>
  import Button from './Button.svelte';
  import Card from './Card.svelte';
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <Card>
    <Button buttonText="Clique aqui"></Button>
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