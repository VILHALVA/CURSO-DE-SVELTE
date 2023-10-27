# COMO INTEGRAR TYPESCRIPT OU SCSS?
Integrar TypeScript (TS) ou SCSS (Sass) em um projeto Svelte é um processo relativamente simples. Vou explicar como fazer a integração de ambas as tecnologias:

**Integração TypeScript:**

1. Certifique-se de que você tenha um projeto Svelte existente ou crie um novo projeto usando o template do Svelte com TypeScript.

   ```bash
   npx degit sveltejs/template svelte-app
   cd svelte-app
   ```

2. Instale as dependências necessárias para o TypeScript:

   ```bash
   npm install --save-dev typescript @rollup/plugin-typescript
   ```

3. Crie um arquivo de configuração do TypeScript chamado `tsconfig.json` na raiz do seu projeto e configure-o conforme necessário. Um exemplo mínimo do `tsconfig.json` é o seguinte:

   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "esnext",
       "strict": true
     }
   }
   ```

4. Renomeie o arquivo principal do seu aplicativo Svelte de `.js` para `.ts`. Por exemplo, renomeie `main.js` para `main.ts`.

5. Atualize seu arquivo "rollup.config.js" para adicionar o plugin de TypeScript. Adicione o seguinte código ao arquivo de configuração:

   ```javascript
   import svelte from 'rollup-plugin-svelte';
   import commonjs from '@rollup/plugin-commonjs';
   import resolve from '@rollup/plugin-node-resolve';
   import typescript from '@rollup/plugin-typescript';

   export default {
     // ... Outras configurações

     plugins: [
       svelte({
         // ... Configurações do svelte
       }),
       commonjs(),
       resolve({
         browser: true,
         dedupe: ['svelte'],
       }),
       typescript(), // Adicione esta linha para habilitar o suporte ao TypeScript
     ],
   };
   ```

6. Agora, você pode usar TypeScript em seus arquivos Svelte. Por exemplo, você pode criar componentes Svelte usando TypeScript:

   ```html
   <!-- MeuComponente.svelte -->
   <script lang="ts">
     let mensagem: string = 'Olá, mundo!';
   </script>

   <h1>{mensagem}</h1>
   ```

**Integração SCSS (Sass):**

1. Certifique-se de ter um projeto Svelte existente ou crie um novo projeto Svelte.

2. Instale as dependências necessárias para o SCSS, que incluem o compilador SCSS e o Rollup plugin SCSS:

   ```bash
   npm install --save-dev node-sass @rollup/plugin-scss
   ```

3. Atualize seu arquivo "rollup.config.js" para adicionar o plugin SCSS. Adicione o seguinte código ao arquivo de configuração:

   ```javascript
   import svelte from 'rollup-plugin-svelte';
   import scss from '@rollup/plugin-scss'; // Importe o plugin SCSS
   import commonjs from '@rollup/plugin-commonjs';
   import resolve from '@rollup/plugin-node-resolve';

   export default {
     // ... Outras configurações

     plugins: [
       svelte({
         // ... Configurações do svelte
       }),
       commonjs(),
       resolve({
         browser: true,
         dedupe: ['svelte'],
       }),
       scss({ // Adicione esta linha para habilitar o suporte ao SCSS
         output: 'public/build/bundle.css', // Especifique o arquivo de saída
       }),
     ],
   };
   ```

4. Agora você pode usar SCSS em seus arquivos Svelte. Por exemplo, você pode estilizar um componente Svelte usando SCSS:

   ```html
   <!-- MeuComponente.svelte -->
   <style lang="scss">
     .meu-componente {
       background-color: #007bff;
       color: #fff;
       padding: 10px;
     }
   </style>

   <div class="meu-componente">
     Conteúdo do componente estilizado com SCSS
   </div>
   ```

Com essas configurações, você pode começar a usar TypeScript e SCSS em seu projeto Svelte. Certifique-se de ajustar as configurações de acordo com as necessidades específicas do seu projeto.