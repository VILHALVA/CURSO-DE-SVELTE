# EXEMPLO COMPLETO DE EVENTOS
Aqui está um exemplo completo de comunicação de eventos entre componentes Svelte, incluindo os componentes `App.svelte`, `Pai.svelte`, `Filho.svelte` e `Receiver.svelte`:

**App.svelte (Componente de Nível Superior):**

```html
<script>
  import Pai from './Pai.svelte'; // Importe o componente Pai
</script>

<main>
  <h1>App Component</h1>
  <!-- Renderize o componente Pai -->
  <Pai />
</main>
```

**Pai.svelte (Componente Pai):**

```html
<script>
  import Filho from './Filho.svelte'; // Importe o componente Filho

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    // Disparar um evento personalizado "evento-do-pai" com detalhes
    dispatch("evento-do-pai", { mensagem: "Olá do componente pai!" });
  }
</script>

<main>
  <h2>Pai Component</h2>
  <button on:click={handleClick}>Disparar Evento</button>

  <!-- Renderize o componente Filho e passe o evento personalizado -->
  <Filho on:evento-do-pai={receberEvento}></Filho>
</main>
```

**Filho.svelte (Componente Filho):**

```html
<script>
  let mensagemRecebida = "";

  function receberEvento(event) {
    mensagemRecebida = event.detail.mensagem;
  }
</script>

<div>
  <h3>Componente Filho</h3>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
</div>
```

**Receiver.svelte (Componente Receiver):**

```html
<script>
  import { onMount, onDestroy } from 'svelte';

  let mensagemRecebida = "";

  // Ouvindo o evento personalizado "evento-do-pai"
  function receberEvento(event) {
    mensagemRecebida = event.detail.mensagem;
  }

  onMount(() => {
    window.addEventListener("evento-do-pai", receberEvento);
  });

  onDestroy(() => {
    window.removeEventListener("evento-do-pai", receberEvento);
  });
</script>

<div>
  <h3>Componente Receiver</h3>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
</div>
```

Este exemplo completo inclui um componente de nível superior `App.svelte` que incorpora o componente `Pai.svelte`, que por sua vez incorpora o componente `Filho.svelte`. O componente `Pai.svelte` dispara um evento personalizado "evento-do-pai" que é propagado para o componente `Filho.svelte`, onde a mensagem é recebida e exibida. Além disso, o componente `Receiver.svelte` também ouve o evento personalizado "evento-do-pai" e exibe a mesma mensagem.

Execute este exemplo completo com `npm run dev` após configurar um projeto Svelte para ver como a comunicação de eventos entre componentes é estabelecida em um aplicativo Svelte. Quando você clicar no botão "Disparar Evento" no componente `Pai.svelte`, a mensagem será propagada para ambos os componentes `Filho.svelte` e `Receiver.svelte`.