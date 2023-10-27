# COMO USAR PREVENTDEFAULT E OUTROS MODIFICADORES DE EVENTOS? 
Em Svelte, você pode usar modificadores de eventos para controlar o comportamento padrão de eventos HTML, como `preventDefault`, `stopPropagation`, entre outros. Os modificadores são adicionados a eventos em elementos HTML para personalizar como eles são tratados. Vou explicar como usar o `preventDefault` e outros modificadores de eventos em Svelte.

**Modificador `preventDefault`:**

O modificador `preventDefault` é usado para evitar que o comportamento padrão de um evento ocorra. Isso é útil quando você deseja impedir que um formulário seja enviado, um link seja seguido ou um clique em um botão recarregue a página.

Exemplo de como usar `preventDefault` em um botão em Svelte:

```html
<script>
  function handleClick(event) {
    event.preventDefault();
    alert('O comportamento padrão do botão foi impedido!');
  }
</script>

<button on:click={handleClick}>Clique aqui</button>
```

Neste exemplo, quando o botão é clicado, a função `handleClick` é chamada. A chamada `event.preventDefault()` impede que o comportamento padrão (como a recarga da página) ocorra.

**Outros modificadores de eventos:**

Além do `preventDefault`, Svelte oferece outros modificadores de eventos, como `stopPropagation` para evitar a propagação do evento, `capture` para capturar o evento na fase de captura em vez da fase de borbulhamento, `once` para garantir que o manipulador de eventos seja chamado apenas uma vez, entre outros.

Aqui está um exemplo do modificador `stopPropagation`:

```html
<script>
  function handleClick(event) {
    event.stopPropagation();
    alert('O evento não será propagado para elementos pais.');
  }
</script>

<div on:click={handleClick}>
  <button>Clique aqui</button>
</div>
```

Neste exemplo, o evento de clique no botão não será propagado para o elemento pai `div` devido ao uso de `event.stopPropagation()`.

Você pode usar esses modificadores de eventos em qualquer elemento HTML que dispare eventos, como botões, links, formulários, etc., para personalizar o comportamento do evento de acordo com suas necessidades.