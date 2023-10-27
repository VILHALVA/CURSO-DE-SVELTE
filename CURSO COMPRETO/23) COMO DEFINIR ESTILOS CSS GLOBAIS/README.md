# COMO DEFINIR ESTILOS CSS GLOBAIS?
Em Svelte, você pode definir estilos CSS globais para todo o seu aplicativo ou site. Isso é útil quando você deseja aplicar estilos a elementos que estão fora do escopo de um componente específico, como estilos para elementos de nível superior, estilos de reset ou estilos globais para todo o aplicativo. Para definir estilos CSS globais, você pode seguir estas etapas:

1. Crie um arquivo CSS que conterá os estilos globais. Você pode nomeá-lo como desejar, por exemplo, "global.css".

2. Defina os estilos globais no arquivo CSS conforme necessário.

3. Importe o arquivo CSS global em seu componente de nível superior (geralmente "App.svelte") ou em um ponto de entrada adequado para garantir que os estilos sejam aplicados globalmente em todo o aplicativo.

Aqui está um exemplo de como definir estilos CSS globais em um projeto Svelte:

**Exemplo de Estrutura de Arquivos:**

```
src/
|-- App.svelte
|-- global.css
```

**global.css:**

```css
/* Estilos globais */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

a {
  text-decoration: none;
  color: #0077cc;
}

/* Outros estilos globais, reset, etc. */
```

**App.svelte:**

```html
<script>
  // Seu código JavaScript/Svelte aqui
</script>

<!-- Importando o arquivo CSS global -->
<link rel="stylesheet" href="./global.css" />

<main>
  <h1>Meu Aplicativo Svelte</h1>
  <a href="#">Exemplo de link global</a>
</main>
```

Neste exemplo:

- O arquivo "global.css" contém estilos globais que afetarão todos os elementos do aplicativo, como a fonte do corpo, estilos de link e outros estilos globais.

- No componente "App.svelte", importamos o arquivo "global.css" usando a tag `<link>` no cabeçalho do HTML. Isso garante que os estilos globais sejam aplicados a todos os elementos do aplicativo.

Ao executar o aplicativo Svelte, você verá que os estilos definidos no arquivo "global.css" são aplicados globalmente em todo o aplicativo, independentemente de qual componente específico você esteja renderizando. Isso permite uma maneira eficiente e consistente de aplicar estilos globais em todo o seu projeto Svelte. Certifique-se de que o caminho do arquivo CSS global esteja correto em relação ao seu arquivo HTML principal.