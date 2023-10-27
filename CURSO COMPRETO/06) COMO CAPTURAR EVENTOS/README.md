# COMO CAPTURAR EVENTOS?
Para capturar eventos en Svelte, você pode usar a diretiva `on:` para associar funções a eventos específicos em elementos HTML. Aqui está como capturar eventos em Svelte:

1. **Defina uma função de manipulação de eventos no seu componente:**

   Primeiro, no componente em que deseja capturar um evento, defina uma função que será chamada quando o evento ocorrer. Por exemplo, vamos criar uma função `handleClick` para capturar o evento de clique:

   ```html
   <script>
     function handleClick(event) {
       alert("Botão clicado!");
     }
   </script>
   ```

2. **Associe a função ao evento usando a diretiva `on:`:**

   Em um elemento HTML dentro do seu componente, use a diretiva `on:` para associar a função de manipulação de eventos ao evento específico que você deseja capturar. Por exemplo, vamos associar a função `handleClick` ao evento de clique em um botão:

   ```html
   <button on:click={handleClick}>
     Clique aqui
   </button>
   ```

   Neste exemplo, estamos associando a função `handleClick` ao evento `click` no botão. Quando o botão for clicado, a função `handleClick` será chamada.

3. **Passando o evento como argumento (opcional):**

   Se você desejar acessar informações sobre o evento, pode passar o objeto de evento como um argumento para a função de manipulação de eventos. Por exemplo:

   ```html
   <script>
     function handleClick(event) {
       alert(`Botão clicado em ${event.clientX}, ${event.clientY}`);
     }
   </script>
   ```

Dessa forma, você pode capturar e responder a eventos em elementos HTML em seu componente Svelte. Essa abordagem é semelhante à forma como você captura eventos em HTML puro, mas com a vantagem da reatividade e da simplicidade que Svelte oferece.