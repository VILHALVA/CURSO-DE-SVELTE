# COMO IMPORTAR FOLHAS DE ESTILO?
Em um projeto Svelte, você pode importar folhas de estilo (arquivos CSS) de várias maneiras, dependendo de como deseja organizá-los e aplicá-los aos seus componentes. Aqui estão as maneiras mais comuns de importar folhas de estilo em componentes Svelte:

1. **Importação Direta no Componente:**

   Você pode importar folhas de estilo diretamente em um componente Svelte usando a tag `<link>` no cabeçalho do componente. Isso é útil quando você deseja estilos específicos para um componente.

   Exemplo:

   ```html
   <script>
     // Seu código JavaScript/Svelte aqui
   </script>

   <!-- Importando folha de estilo diretamente no componente -->
   <link rel="stylesheet" href="./styles.css" />

   <main>
     <h1>Componente Svelte com Estilo Importado</h1>
   </main>
   ```

2. **Importação de Estilo Global:**

   Para folhas de estilo que são globais e devem ser aplicadas a todo o aplicativo, você pode importá-las em um componente de nível superior, como "App.svelte". Isso garante que os estilos sejam aplicados a todos os componentes no aplicativo.

   Exemplo:

   **App.svelte:**

   ```html
   <script>
     // Seu código JavaScript/Svelte aqui
   </script>

   <!-- Importando folha de estilo global em App.svelte -->
   <link rel="stylesheet" href="./global.css" />

   <main>
     <h1>Meu Aplicativo Svelte</h1>
   </main>
   ```

3. **Usando a Seção `<style>` do Componente:**

   Se você deseja definir estilos diretamente no componente Svelte, pode usar a seção `<style>`. Isso é especialmente útil quando você deseja estilos incorporados no próprio componente.

   Exemplo:

   ```html
   <script>
     // Seu código JavaScript/Svelte aqui
   </script>

   <style>
     /* Estilos incorporados no componente */
     h1 {
       color: blue;
     }
   </style>

   <main>
     <h1>Estilo Incorporado no Componente</h1>
   </main>
   ```

4. **Importação de Estilos Condicionais:**

   Se você deseja importar folhas de estilo com base em alguma condição, pode fazer isso usando JavaScript no componente. Por exemplo, você pode importar folhas de estilo com base em alguma lógica específica.

   Exemplo:

   ```html
   <script>
     import './conditional-style.css';
   </script>

   <main>
     <h1>Estilo Importado Condicionalmente</h1>
   </main>
   ```

Lembre-se de que, independentemente da abordagem que você escolher, é importante garantir que o caminho para o arquivo CSS seja especificado corretamente. Certifique-se de que os caminhos para os arquivos CSS estejam corretos em relação ao seu arquivo HTML principal ou ao local onde o componente é renderizado.