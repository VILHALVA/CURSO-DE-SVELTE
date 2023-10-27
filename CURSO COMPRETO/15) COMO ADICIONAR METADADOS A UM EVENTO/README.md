# COMO ADICIONAR METADADOS A UM EVENTO?
Para adicionar metadados a um evento personalizado em Svelte, você pode passar um objeto contendo esses metadados como o segundo argumento ao disparar o evento usando `dispatch` do `createEventDispatcher`. Os metadados podem ser qualquer tipo de dado que você deseja associar ao evento para fornecer informações adicionais quando o evento é ouvido e processado. Aqui está um exemplo de como fazer isso:

**Emitter.svelte:**

```html
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let mensagem = "";

  function enviarMensagem() {
    const metadados = {
      remetente: "Emitter Component",
      dataEnvio: new Date(),
    };

    // Dispara um evento personalizado "mensagem-enviada" com a mensagem e metadados
    dispatch("mensagem-enviada", { mensagem, metadados });
  }
</script>

<main>
  <h1>Emitter Component</h1>
  <label>
    Mensagem:
    <input type="text" bind:value={mensagem}>
  </label>
  <button on:click={enviarMensagem}>Enviar Mensagem</button>
</main>
```

**Receiver.svelte:**

```html
<script>
  import { onMount } from 'svelte';

  let mensagemRecebida = "";
  let metadadosRecebidos = {};

  function receberMensagem(event) {
    mensagemRecebida = event.detail.mensagem;
    metadadosRecebidos = event.detail.metadados;
  }

  onMount(() => {
    window.addEventListener("mensagem-enviada", receberMensagem);
  });
</script>

<main>
  <h1>Receiver Component</h1>
  <p>Mensagem Recebida: {mensagemRecebida}</p>
  <p>Metadados Recebidos:</p>
  <pre>{JSON.stringify(metadadosRecebidos, null, 2)}</pre>
</main>
```

Neste exemplo, além da mensagem, adicionamos metadados à propriedade `metadados` no objeto passado como detalhe ao disparar o evento "mensagem-enviada". Os metadados incluem o remetente e a data de envio da mensagem.

No componente "Receiver," quando o evento é ouvido, a mensagem e os metadados são acessados a partir de `event.detail` e exibidos no componente.

Quando você executar este exemplo com `npm run dev`, você verá a mensagem recebida e os metadados exibidos no componente "Receiver." Isso demonstra como você pode adicionar metadados a eventos personalizados para fornecer informações adicionais quando esses eventos são processados em outro lugar do aplicativo.