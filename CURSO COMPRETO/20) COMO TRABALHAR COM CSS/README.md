# COMO TRABALHAR COM CSS?
Trabalhar com CSS em um projeto Svelte é relativamente simples e flexível. Svelte permite que você aplique estilos aos seus componentes de várias maneiras, incluindo estilos incorporados diretamente nos componentes e folhas de estilo separadas. Vou explicar as principais maneiras de trabalhar com CSS em Svelte:

1. **Estilos Incorporados:**

   Você pode adicionar estilos diretamente a um componente usando a seção `<style>` no arquivo do componente. Isso é conhecido como "estilos incorporados".

   Exemplo:

   ```html
   <script>
     let isActive = true;
   </script>

   <style>
     /* Estilos incorporados */
     .active {
       color: green;
     }
   </style>

   <p class:active={isActive}>Este parágrafo está ativo.</p>
   ```

2. **Folhas de Estilo Separadas:**

   Você também pode criar folhas de estilo CSS separadas e importá-las em seus componentes. Isso é útil quando você deseja manter seu código CSS organizado em arquivos separados.

   Exemplo:

   ```html
   <!-- styles.css -->
   .active {
     color: green;
   }
   ```

   ```html
   <script>
     let isActive = true;
   </script>

   <link rel="stylesheet" href="./styles.css" />

   <p class:active={isActive}>Este parágrafo está ativo.</p>
   ```

3. **Estilos Condicionais:**

   Você pode usar lógica condicional em seus estilos incorporados para aplicar estilos com base em variáveis ou estados do componente.

   Exemplo:

   ```html
   <script>
     let isActive = true;
   </script>

   <style>
     /* Estilos incorporados com lógica condicional */
     p {
       color: blue;
     }

     p.active {
       color: green;
     }
   </style>

   <p class:p={isActive}>Este parágrafo está ativo.</p>
   ```

4. **Estilização Global:**

   Se você precisa aplicar estilos globalmente, pode usar a tag `<style global>`.

   Exemplo:

   ```html
   <script>
     let isActive = true;
   </script>

   <style global>
     /* Estilos globais */
     p {
       font-weight: bold;
     }
   </style>

   <p class:p={isActive}>Este parágrafo está ativo.</p>
   ```

Além disso, você pode usar classes, estilos e diretivas CSS, como `:hover`, `:focus`, `:before`, e outras, da mesma forma que faria em qualquer aplicação da web.

Lembre-se de que o Svelte compila o CSS de maneira eficiente e elimina estilos não utilizados em tempo de compilação, garantindo um desempenho otimizado.

Para estilos mais complexos ou para adicionar bibliotecas CSS externas ao seu projeto Svelte, você também pode configurar ferramentas de construção, como Rollup ou Webpack, para processar e importar estilos conforme necessário.