# COMO INTERAGIR COM JANELA, CABEÇA E CORPO?
Interagir com a janela, cabeça e corpo (window, head e body) em um documento HTML é uma tarefa comum ao trabalhar com páginas da web. No contexto do Svelte, você pode fazer isso de maneira semelhante a como faria em qualquer aplicação web. Vou explicar como interagir com essas partes do documento HTML em um projeto Svelte.

1. **Interagir com o `window` (janela):**

   O objeto `window` representa a janela do navegador e oferece acesso a muitas funcionalidades, como manipulação de eventos, manipulação de cookies, armazenamento local e muito mais. Você pode interagir com o `window` diretamente em scripts Svelte:

   ```html
   <script>
     function abrirNovaJanela() {
       window.open('https://www.exemplo.com', '_blank');
     }
   </script>

   <button on:click={abrirNovaJanela}>Abrir Nova Janela</button>
   ```

   Neste exemplo, a função `abrirNovaJanela` usa o objeto `window` para abrir uma nova janela do navegador quando o botão é clicado.

2. **Interagir com a cabeça (head):**

   O conteúdo dentro da tag `<head>` de um documento HTML geralmente contém metadados, links para folhas de estilo e outras informações relacionadas ao documento. No Svelte, você pode adicionar elementos ao cabeçalho usando a diretiva `html`:

   ```html
   <script>
     const title = 'Minha Página Svelte';
   </script>

   <html>
     <head>
       <title>{title}</title>
       <link rel="stylesheet" href="styles.css">
     </head>
     <body>
       <!-- Conteúdo do corpo da página -->
     </body>
   </html>
   ```

   Aqui, estamos definindo o título da página e adicionando um link para uma folha de estilo no cabeçalho do documento.

3. **Interagir com o corpo (body):**

   O conteúdo dentro da tag `<body>` é a parte visível da página e é onde você normalmente coloca todo o conteúdo visível para o usuário. No Svelte, você pode interagir com o corpo da página da mesma forma que faria em qualquer aplicação web:

   ```html
   <script>
     let mensagem = 'Olá, mundo!';
   </script>

   <body>
     <h1>{mensagem}</h1>
     <button on:click={() => mensagem = 'Texto alterado!'}>Alterar Texto</button>
   </body>
   ```

   Neste exemplo, estamos exibindo uma mensagem e permitindo que ela seja alterada quando um botão é clicado.

Em resumo, interagir com a janela, cabeça e corpo em um projeto Svelte é semelhante à interação em qualquer aplicação web. Você pode usar o objeto `window` para interagir com a janela, a diretiva `html` para adicionar elementos ao cabeçalho e o corpo da página para colocar o conteúdo visível para o usuário. Certifique-se de seguir as práticas comuns de desenvolvimento web ao fazer essas interações.