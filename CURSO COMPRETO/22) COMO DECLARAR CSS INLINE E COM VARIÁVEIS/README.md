# COMO DECLARAR CSS INLINE E COM VARIÁVEIS?
Em Svelte, você pode declarar estilos CSS inline e usar variáveis para personalizá-los. Isso é útil quando você deseja aplicar estilos dinâmicos com base em valores de variáveis no componente. Você pode fazer isso diretamente em um elemento HTML usando a diretiva `style` e interpolando variáveis ou expressões. Vou fornecer um exemplo de como declarar estilos CSS inline com variáveis em um componente Svelte:

```html
<script>
  let textColor = 'red'; // Variável para a cor do texto
  let backgroundColor = 'yellow'; // Variável para a cor de fundo
</script>

<main>
  <h1>Estilos CSS Inline com Variáveis</h1>
  <!-- Declarando estilos inline com variáveis -->
  <p style="color: {textColor}; background-color: {backgroundColor};">
    Este parágrafo tem estilos inline com variáveis.
  </p>
</main>
```

Neste exemplo:

- As variáveis `textColor` e `backgroundColor` são definidas no script do componente e podem ser usadas para personalizar os estilos do parágrafo.

- No elemento `<p>`, usamos a diretiva `style` para declarar estilos CSS inline. Dentro das chaves `{}` interpolamos as variáveis `textColor` e `backgroundColor` para definir as cores do texto e do fundo dinamicamente.

Isso permite que você altere dinamicamente os estilos do elemento com base nas variáveis do componente. Quando as variáveis `textColor` e `backgroundColor` mudam, os estilos do elemento são atualizados automaticamente.

Você pode aplicar a mesma técnica para declarar outros estilos CSS inline, como tamanho de fonte, margens, preenchimento e muito mais, usando variáveis ou expressões JavaScript para controlar a aparência do componente de forma dinâmica.