# COMO ANINHAR COMPONENTES NO SVELTE?
Em Svelte, você pode aninhar componentes (ou seja, incorporar um componente dentro de outro) de forma simples e direta. Isso é uma das características poderosas do Svelte, que permite criar interfaces de usuário complexas e reutilizáveis de maneira organizada. Aqui está como você pode aninhar componentes no Svelte:

**Passo 1:** Crie os componentes que você deseja aninhar. Por exemplo, vamos criar dois componentes simples, `Button.svelte` e `Card.svelte`.

`Button.svelte`:

```html
<!-- Button.svelte -->
<script>
  export let buttonText = "Clique em mim";
</script>

<button>
  {buttonText}
</button>
```

`Card.svelte`:

```html
<!-- Card.svelte -->
<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
  }
</style>
```

**Passo 2:** Agora, crie um novo componente que irá incorporar os componentes `Button` e `Card`. Por exemplo, crie um arquivo chamado `App.svelte` e aninhe os componentes no novo componente.

```html
<!-- App.svelte -->
<script>
  import Button from './Button.svelte';
  import Card from './Card.svelte';
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <Card>
    <Button buttonText="Clique aqui"></Button>
  </Card>
</main>
```

Neste exemplo, o componente `Button` é aninhado dentro do componente `Card`, e o componente `Card` é aninhado dentro do componente `App`.

**Passo 3:** Quando você executa o servidor de desenvolvimento com `npm run dev`, o Svelte renderiza os componentes aninhados. O resultado será que o botão será exibido dentro do cartão.

Isso é um exemplo simples de como você pode aninhar componentes em Svelte. À medida que você cria componentes mais complexos e reutilizáveis, a aninhação de componentes se torna uma ferramenta poderosa para compor interfaces de usuário sofisticadas em seu aplicativo. Componentes aninhados permitem que você crie interfaces de usuário compostas por elementos menores e mais gerenciáveis.