# MANUAL
## CRIANDO PROJETO:
1. **Instalação do Svelte CLI**: O Svelte oferece uma CLI (Interface de Linha de Comando) que facilita a criação e gerenciamento de projetos. Para instalar a CLI globalmente em seu sistema, execute o seguinte comando no terminal ou prompt de comando:

```
npm install -g svelte
```

2. **Criar um novo projeto Svelte**: Após instalar a CLI do Svelte, você pode criar um novo projeto executando o seguinte comando:

```
npx degit sveltejs/template nome-do-seu-projeto
```

Substitua `nome-do-seu-projeto` pelo nome que você deseja dar ao seu projeto.

3. **Navegar para o diretório do projeto**: Depois de criar o projeto, navegue para o diretório do projeto:

```
cd nome-do-seu-projeto
```

4. **Instalar as dependências do projeto**: Dentro do diretório do projeto, instale as dependências executando:

```
npm install
```

Isso instalará todas as dependências necessárias para o seu projeto Svelte.

5. **Executar o servidor de desenvolvimento**: Finalmente, para iniciar o servidor de desenvolvimento e visualizar seu projeto, execute:

```
npm run dev
```

Agora é só acessar o app digitando `http://localhost:8080` em seu navegador.

## CODIGO:
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

## DIRETÓRIOS:
```
nome-do-seu-projeto/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── App.svelte
│   └── ...
│
├── node_modules/
│   └── ...
│
├── package.json
├── package-lock.json
└── ...
```

- **public/**: Este diretório contém arquivos estáticos que são servidos diretamente para o navegador. O arquivo `index.html` neste diretório é o ponto de entrada principal da sua aplicação e geralmente contém o elemento `<script>` que carrega a aplicação Svelte. Outros recursos estáticos, como imagens, fontes e arquivos CSS, podem ser colocados neste diretório.

- **src/**: Este é o diretório onde você escreve o código fonte da sua aplicação Svelte. O arquivo `App.svelte` é o componente principal da aplicação, que é renderizado na página. Você pode criar outros componentes e colocá-los neste diretório conforme necessário.

- **node_modules/**: Este diretório contém todas as dependências do projeto, incluindo as dependências do Svelte e quaisquer outras bibliotecas que você tenha instalado. Este diretório é gerado automaticamente quando você executa `npm install`.

- **package.json**: Este arquivo é o arquivo de manifesto do seu projeto Node.js. Ele contém metadados sobre o projeto, bem como informações sobre as dependências do projeto. Aqui você também pode definir scripts personalizados, como o script `dev` que usamos para iniciar o servidor de desenvolvimento.

- **package-lock.json**: Este arquivo é gerado automaticamente pelo npm e contém informações detalhadas sobre as dependências do projeto, incluindo as versões exatas das dependências instaladas.

