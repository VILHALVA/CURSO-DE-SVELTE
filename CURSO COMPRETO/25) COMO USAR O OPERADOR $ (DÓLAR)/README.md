# COMO USAR O OPERADOR $ (DÓLAR)?
No Svelte, o operador `$` (dólar) é uma forma de acessar variáveis reativas e propriedades em componentes. Ele é usado para fazer referência a variáveis reativas e propriedades que podem acionar automaticamente a atualização do componente quando são modificadas. O operador `$` é usado principalmente em situações onde você deseja acessar essas variáveis de forma reativa.

Aqui estão algumas situações comuns em que o operador `$` é utilizado:

1. **Acessando Variáveis Reativas:**

   Você pode usar o operador `$` para acessar variáveis reativas diretamente. Por exemplo:

   ```html
   <script>
     let count = 0;
   </script>

   <p>O valor de count é {$count}.</p>
   ```

   Neste caso, `{$count}` exibirá o valor da variável reativa `count` e será atualizado automaticamente sempre que `count` mudar.

2. **Acessando Propriedades em Elementos HTML:**

   O operador `$` também pode ser usado para acessar propriedades em elementos HTML. Por exemplo:

   ```html
   <script>
     let imageUrl = 'imagem.jpg';
   </script>

   <img src="{$imageUrl}" alt="Imagem">
   ```

   Neste caso, `{$imageUrl}` atribuirá dinamicamente o valor da variável `imageUrl` à propriedade `src` da imagem.

3. **Usando Expressões Reativas:**

   Você pode usar o operador `$` em expressões reativas para calcular valores com base em variáveis reativas. Por exemplo:

   ```html
   <script>
     let width = 100;
     let height = 50;
   </script>

   <p>A área do retângulo é {$width * $height} pixels quadrados.</p>
   ```

   Aqui, `{$width * $height}` calculará a área do retângulo com base nas variáveis `width` e `height`, e a expressão será automaticamente atualizada quando essas variáveis mudarem.

O operador `$` torna mais fácil a criação de componentes reativos no Svelte, permitindo que você acesse variáveis reativas e propriedades diretamente e garanta que as atualizações sejam refletidas no componente conforme as variáveis reativas mudam.

Lembre-se de que o operador `$` não é necessário em todas as situações. Ele é usado principalmente quando você precisa se referir a variáveis reativas ou propriedades em contexto de marcação para garantir que as atualizações sejam tratadas de forma reativa.