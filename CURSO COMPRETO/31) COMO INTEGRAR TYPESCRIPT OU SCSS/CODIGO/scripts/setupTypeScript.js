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
