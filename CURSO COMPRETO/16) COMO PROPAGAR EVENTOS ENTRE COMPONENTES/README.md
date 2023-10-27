# COMO PROPAGAR EVENTOS ENTRE COMPONENTES?
A propagação de eventos entre componentes em Svelte é uma maneira eficaz de permitir a comunicação entre componentes pai e filhos, ou entre componentes que não estão diretamente relacionados. Isso pode ser alcançado passando eventos personalizados de um componente para outro, permitindo que informações, ações ou notificações sejam compartilhadas de maneira eficaz. Vou explicar como fazer isso em Svelte:

1. **Crie um despachante de eventos no componente pai:**

   No componente pai, crie um despachante de eventos usando `createEventDispatcher` e atribua-o a uma variável:

   ```html
   <script>
     import { createEventDispatcher } from 'svelte';

     const dispatch = createEventDispatcher();
   </script>
   ```

2. **Dispare eventos personalizados a partir do componente pai:**

   Use o despachante de eventos para disparar eventos personalizados a partir do componente pai quando for apropriado. Você pode fazer isso chamando a função `dispatch` com o nome do evento personalizado e os detalhes apropriados:

   ```html
   <script>
     function handleClick() {
       // Disparar um evento personalizado "evento-do-pai" com detalhes
       dispatch("evento-do-pai", { mensagem: "Olá do componente pai!" });
     }
   </script>

   <button on:click={handleClick}>Disparar Evento</button>
   ```

3. **Ouça eventos personalizados no componente filho:**

   No componente filho, você pode ouvir eventos personalizados disparados pelo componente pai usando a diretiva `on:`. Certifique-se de usar o mesmo nome do evento personalizado:

   ```html
   <script>
     let mensagemRecebida = "";

     function receberEvento(event) {
       mensagemRecebida = event.detail.mensagem;
     }
   </script>

   <p>Mensagem Recebida: {mensagemRecebida}</p>
   ```

   Use a diretiva `on:` para ouvir o evento personalizado no elemento desejado:

   ```html
   <ComponenteFilho on:evento-do-pai={receberEvento} />
   ```

   O `ComponenteFilho` é onde você deseja receber o evento personalizado do componente pai.

Dessa forma, você pode propagar eventos do componente pai para o filho, permitindo que o filho reaja às ações ou informações do pai. Essa é uma das maneiras de estabelecer a comunicação entre componentes em Svelte. Note que você pode aplicar o mesmo conceito para propagar eventos entre componentes que não são necessariamente pai e filho, permitindo uma comunicação eficaz em toda a sua aplicação.