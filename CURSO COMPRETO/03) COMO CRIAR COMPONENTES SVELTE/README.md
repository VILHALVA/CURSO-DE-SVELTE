# COMO CRIAR COMPONENTES SVELTE?
Em Svelte, a criação de componentes é uma parte fundamental do desenvolvimento. Os componentes permitem que você divida sua interface do usuário em partes reutilizáveis e organizadas. Aqui está um guia passo a passo sobre como criar componentes Svelte:

**Passo 1:** Certifique-se de estar trabalhando dentro de um projeto Svelte. Se você ainda não criou um projeto, siga os passos que descrevi anteriormente para criar um projeto Svelte.

**Passo 2:** Na estrutura de diretórios do seu projeto, você normalmente terá uma pasta chamada `src`. É dentro desta pasta que você deve criar seus componentes. Para criar um novo componente, crie um arquivo `.svelte` dentro da pasta `src`. Por exemplo, vamos criar um componente chamado `Button.svelte`.

**Passo 3:** Abra o arquivo `Button.svelte` em um editor de código e defina o componente. Aqui está um exemplo simples de um componente de botão:

```html
<script>
  let buttonText = "Clique em mim";
  
  function handleClick() {
    alert("Botão clicado!");
  }
</script>

<button on:click={handleClick}>
  {buttonText}
</button>

<style>
  button {
    background-color: #0078d4;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
</style>
```

Neste exemplo, temos um componente de botão com uma variável reativa `buttonText`, uma função `handleClick` que é chamada quando o botão é clicado e estilos definidos para o botão.

**Passo 4:** Agora, você pode usar o componente em outros lugares do seu aplicativo Svelte. Por exemplo, em um arquivo `.svelte` que representa uma página ou outro componente, você pode importar e usar o componente `Button` da seguinte maneira:

```html
<script>
  import Button from './Button.svelte';
</script>

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <p>Olá, mundo!</p>
  <Button buttonText="Clique aqui"></Button>
</main>
```

Neste exemplo, usamos a tag `<Button>` para incorporar o componente `Button` e passamos um valor personalizado para a propriedade `buttonText`. Você pode passar várias propriedades para seus componentes da mesma maneira.

**Passo 5:** Execute o servidor de desenvolvimento com `npm run dev` para ver o seu aplicativo em execução no navegador. O componente `Button` será renderizado onde você o incluiu.

Isso é uma introdução básica à criação e uso de componentes em Svelte. À medida que você trabalha em projetos mais complexos, pode criar e reutilizar vários componentes para manter seu código organizado e modular. Certifique-se de consultar a documentação oficial do Svelte para obter informações detalhadas sobre como criar componentes e suas funcionalidades avançadas.