# COMO ADICIONAR DADOS DINÂMICOS E ADEREÇOS A UM COMPONENTE?
Em Svelte, você pode adicionar dados dinâmicos a um componente usando propriedades (props) e passá-los quando você incorpora o componente em outro componente ou em um arquivo `.svelte`. Isso permite que você torne os componentes reutilizáveis e personalizáveis. Vou explicar como fazer isso:

**Passo 1:** Defina as propriedades no componente que você deseja tornar dinâmico. Por exemplo, se você tem um componente `Button.svelte` e deseja tornar o texto do botão dinâmico, defina uma propriedade para o texto do botão no script do componente:

```html
<!-- Button.svelte -->
<script>
  export let buttonText = "Clique em mim"; // Definindo a propriedade buttonText
</script>

<button>
  {buttonText}
</button>
```

**Passo 2:** Em seguida, você pode incorporar o componente em outro lugar e passar os dados dinâmicos como propriedades. Por exemplo, em um arquivo `.svelte` onde você deseja usar o componente `Button`, você pode importá-lo e passar um valor personalizado para a propriedade `buttonText`:

```html
<!-- App.svelte -->
<script>
  import Button from './Button.svelte'; // Importando o componente Button
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <p>Olá, mundo!</p>
  <Button buttonText="Clique aqui"></Button> <!-- Passando um valor personalizado para buttonText -->
</main>
```

Neste exemplo, estamos passando o valor `"Clique aqui"` para a propriedade `buttonText` do componente `Button`.

**Passo 3:** No componente `Button`, você pode usar a propriedade passada como qualquer outra variável no script do componente. Ela se torna parte do escopo do componente:

```html
<!-- Button.svelte -->
<script>
  export let buttonText = "Clique em mim"; // Propriedade buttonText
</script>

<button>
  {buttonText}
</button>
```

**Passo 4:** Execute o servidor de desenvolvimento com `npm run dev`, e o seu componente `Button` receberá o texto dinâmico que você passou ao incorporá-lo.

Dessa forma, você pode adicionar dados dinâmicos aos seus componentes Svelte e personalizá-los de acordo com as necessidades de diferentes partes do seu aplicativo. Propriedades (props) são uma maneira poderosa de tornar seus componentes reutilizáveis e flexíveis.