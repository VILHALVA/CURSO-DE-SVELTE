# SINTAXE
Para criar um projeto básico em Svelte, você pode usar o Svelte REPL (Read-Eval-Print Loop), que é um ambiente online onde você pode escrever código Svelte e ver o resultado em tempo real. Aqui estão os passos:

Passo 1: Acesse o Svelte REPL em [Svelte REPL](https://svelte.dev/repl/hello-world?version=3.44.0).

Passo 2: No Svelte REPL, você verá três arquivos: `App.svelte`, `main.js` e `styles.css`.

- O arquivo `App.svelte` é onde você escreverá o código HTML e Svelte para sua aplicação.
- O arquivo `main.js` é onde você importará e inicializará o componente principal da sua aplicação Svelte.
- O arquivo `styles.css` é onde você pode adicionar estilos CSS para sua aplicação.

Passo 3: No arquivo `App.svelte`, você pode começar a escrever seu código Svelte. Por exemplo, você pode substituir o conteúdo existente pelo seguinte:

```html
<script>
  let name = 'world';
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name.toUpperCase()}!</h1>
```

Este é um componente Svelte simples que exibe uma mensagem "Hello, WORLD!" em roxo.

Passo 4: No arquivo `main.js`, você precisa importar e inicializar o componente principal da sua aplicação. Por padrão, o componente principal é `App.svelte`. Você pode deixar o arquivo `main.js` como está, pois ele já está configurado para inicializar o componente `App`.

```javascript
import App from './App.svelte';

const app = new App({
  target: document.body,
});

export default app;
```

Passo 5: Você pode adicionar estilos adicionais ao seu projeto no arquivo `styles.css`, se desejar.

Passo 6: Agora você pode clicar no botão "Run" no Svelte REPL para ver o resultado do seu código em tempo real. Você deve ver a mensagem "Hello, WORLD!" exibida na tela, formatada com a cor roxa definida em `styles.css`.

Este é apenas um exemplo básico para começar. Você pode expandir e personalizar sua aplicação Svelte adicionando mais componentes, interatividade e estilos conforme necessário. Se preferir trabalhar localmente, você pode configurar um ambiente de desenvolvimento local para o Svelte usando ferramentas como `svelte-kit` ou `create-svelte-app`.