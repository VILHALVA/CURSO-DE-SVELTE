<script>
  import Input from './lib/Input.svelte';
  import Dropdown from './lib/Dropdown.svelte';
  import Rangos from './lib/Rangos.svelte';

  let estado = {
    nombre: 'Pepita',
    apellido: 'Flores',
    sector: 'Frontend',
    salario: {
      min: 30000,
      max: 45000,
    },
  }

  let error = null;

  let sectores = ['Backend', 'Frontend', 'Devops', 'QA'];

  function envio(e) {
    e.preventDefault();
    alert(JSON.stringify(estado));
  }

  function actualizarSalario(e) {
    estado.salario.min = e.detail.min;
    estado.salario.max = e.detail.max;
    if (estado.salario.min > estado.salario.max) {
      error = "No puedes tener más en el mínimo que en el máximo";
    } else {
      error = null;
    }
  }
</script>

<main>
  <form on:submit={envio}>
    <Input identifier="nombre" label="Nombre" bind:value={estado.nombre} />
    <Input identifier="apellido" label="Apellido" bind:value={estado.apellido} />
    <Dropdown identifier="sector" label="Sector" choices={sectores} bind:value={estado.sector} />
    <Rangos identifier="salarios" label="Salarios" min={estado.salario.min} max={estado.salario.max} on:update={actualizarSalario} />
    {#if error != null}
      <p>{error}</p>
    {/if}
    <p>
      <input type="submit" value="Enviar" disabled={error !== null} />
    </p>
  </form>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
