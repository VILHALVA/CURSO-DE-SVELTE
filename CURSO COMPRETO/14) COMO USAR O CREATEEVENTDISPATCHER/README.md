# COMO USAR O CREATEEVENTDISPATCHER?
`createEventDispatcher` é uma função fornecida pelo Svelte que permite criar um despachante de eventos para disparar e ouvir eventos personalizados dentro de um componente Svelte. Você pode usá-lo para criar uma maneira de se comunicar com outros componentes ou partes do seu aplicativo por meio de eventos personalizados. Aqui está como você pode usá-lo:

1. **Importe `createEventDispatcher`:** No script do seu componente Svelte, você deve importar a função `createEventDispatcher` do módulo 'svelte':

```html
<script>
  import { createEventDispatcher } from 'svelte';
</script>
```

2. **Crie um despachante de eventos:** Use a função `createEventDispatcher()` para criar um despachante de eventos. Geralmente, você o atribuirá a uma variável:

```html
<script>
  const dispatch = createEventDispatcher();
</script>
```

3. **Dispare um evento personalizado:** Você pode usar o despachante de eventos para disparar eventos personalizados em resposta a ações ou eventos dentro do seu componente. Para fazer isso, chame a função `dispatch` e forneça o nome do evento personalizado como argumento. Você também pode passar um objeto de detalhes para o evento, se necessário:

```html
<script>
  function handleClick() {
    // Disparar um evento personalizado chamado "meu-evento"
    dispatch("meu-evento", { valor: "Isso é um evento personalizado" });
  }
</script>
```

4. **Ouça eventos personalizados:** Em outro componente ou parte do seu aplicativo, você pode ouvir eventos personalizados usando o método `addEventListener`. Certifique-se de usar o mesmo nome do evento personalizado que você disparou:

```html
<script>
  onMount(() => {
    // Ouvindo o evento personalizado "meu-evento"
    window.addEventListener("meu-evento", (event) => {
      console.log("Evento personalizado disparado com detalhes:", event.detail);
    });
  });
</script>
```

5. **Remova o ouvinte quando não for mais necessário:** Lembre-se de remover o ouvinte de eventos personalizados quando o componente for destruído ou quando não for mais necessário para evitar vazamentos de memória:

```html
<script>
  onDestroy(() => {
    // Remova o ouvinte quando o componente for destruído
    window.removeEventListener("meu-evento");
  });
</script>
```

Este é um exemplo básico de como usar `createEventDispatcher` em Svelte para disparar e ouvir eventos personalizados. Isso é útil para estabelecer comunicação entre componentes ou para notificar outras partes do seu aplicativo sobre eventos específicos.