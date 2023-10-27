# COMO ADICIONAR CLASSES CSS CONDICIONAIS?
Para adicionar classes CSS condicionais em componentes Svelte, você pode usar a diretiva `class:` seguida de uma expressão condicional para determinar se a classe deve ser aplicada ou não. A expressão condicional pode ser baseada em variáveis ou lógica específica do componente.

Aqui está um exemplo de como adicionar classes CSS condicionais em um componente Svelte:

```html
<script>
  let isActive = true;
  let isHighlighted = false;
</script>

<main>
  <h1>Exemplo de Classes CSS Condicionais</h1>
  <!-- Adicionando classes condicionais com a diretiva "class:" -->
  <p class:active={isActive} class:highlighted={isHighlighted}>
    Este parágrafo tem classes condicionais.
  </p>
</main>
```

Neste exemplo:

- Definimos duas variáveis, `isActive` e `isHighlighted`, para controlar a aplicação das classes condicionais.
- Na marcação do parágrafo `<p>`, usamos a diretiva `class:` seguida das expressões condicionais `active` e `highlighted`.
- As classes CSS "active" e "highlighted" só serão aplicadas ao parágrafo se suas variáveis correspondentes forem avaliadas como `true`.

Você pode definir a lógica que determina quando as variáveis devem ser `true` ou `false com base em eventos, estado do componente ou qualquer outro critério que se aplique ao seu aplicativo. Essas classes condicionais permitem que você altere dinamicamente a aparência de elementos com base em estados e variáveis no seu componente.