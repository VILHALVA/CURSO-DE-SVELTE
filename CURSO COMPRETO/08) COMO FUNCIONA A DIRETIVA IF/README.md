# COMO FUNCIONA A DIRETIVA IF?
A diretiva `if` é uma das diretivas condicionais em Svelte que permite controlar a renderização de elementos com base em uma condição. Essa diretiva é semelhante à estrutura condicional `if` em outras linguagens de programação, como JavaScript e C. Aqui está como a diretiva `if` funciona em Svelte:

**1. Uso da Diretiva `if`:**
   - A diretiva `if` é usada para condicionar a renderização de elementos HTML com base em uma expressão booleana. Se a expressão for `true`, os elementos dentro do bloco `if` serão renderizados; se for `false`, eles serão omitidos do DOM.

**2. Exemplo de Uso:**
   - Vejamos um exemplo simples. Suponha que você tenha uma variável reativa chamada `mostrarElemento` que controla se um elemento deve ser renderizado ou não.

```html
<script>
  let mostrarElemento = true; // Inicialmente, o elemento será renderizado
</script>

{#if mostrarElemento}
  <p>Este elemento será renderizado se mostrarElemento for verdadeiro.</p>
{/if}
```

Neste exemplo, o parágrafo só será renderizado no DOM se `mostrarElemento` for `true`. Se você atualizar `mostrarElemento` para `false`, o parágrafo desaparecerá do DOM.

**3. Atualização da Diretiva `if` de Forma Reativa:**
   - A vantagem do Svelte é que ele rastreia automaticamente as variáveis reativas e reage a alterações. Isso significa que, se a variável `mostrarElemento` mudar de valor (por exemplo, de `true` para `false`), o elemento será renderizado ou removido automaticamente sem que você precise escrever código adicional para manipular o DOM.

**4. Blocos `else` e `else if`:**
   - Você também pode usar blocos `else` e `else if` com a diretiva `if` para lidar com múltiplas condições. Aqui está um exemplo:

```html
{#if condicao1}
  <p>Esta é a condição 1.</p>
{:else if condicao2}
  <p>Esta é a condição 2.</p>
{:else}
  <p>Nenhuma das condições é verdadeira.</p>
{/if}
```

Nesse caso, o Svelte avaliará as condições na ordem em que estão listadas e renderizará o bloco correspondente à primeira condição verdadeira encontrada.

A diretiva `if` em Svelte é uma maneira poderosa de controlar a renderização condicional de elementos com base em variáveis reativas e expressões booleanas, tornando seu código mais limpo e reativo.