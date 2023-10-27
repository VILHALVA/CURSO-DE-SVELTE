# COMO CRIAR LOOPS FOR?
Em Svelte, você pode criar loops (iterações) utilizando a diretiva `each` para renderizar elementos repetidamente com base em uma coleção de dados. Isso é semelhante a usar um loop `for` em JavaScript ou outras linguagens de programação. Aqui está como você pode criar loops `for` em Svelte:

**Sintaxe da Diretiva `each`:**
```html
{#each array as item, index (key)}
  <!-- Elementos que serão renderizados repetidamente -->
{/each}
```

- `array`: A coleção de dados que você deseja iterar.
- `item`: O nome que você deseja dar a cada item da coleção durante a iteração.
- `index` (opcional): O índice de cada item na coleção.
- `key` (opcional): Uma chave única para identificar cada item na iteração (usada para otimizações de renderização).

**Exemplo de Uso:**

Suponha que você tenha um array de nomes e deseja renderizar uma lista de nomes em um componente Svelte:

**App.svelte:**

```html
<script>
  let nomes = ["Alice", "Bob", "Carol", "David"];
</script>

<main>
  <h1>Lista de Nomes</h1>

  <ul>
    {#each nomes as nome, index (nome)}
      <li>{nome} (índice {index + 1})</li>
    {/each}
  </ul>
</main>
```

Neste exemplo:

- A variável `nomes` contém um array de nomes.
- A diretiva `{#each}` é usada para iterar sobre o array `nomes`.
- A cada iteração, o nome é colocado em um elemento `<li>` e o índice é exibido entre parênteses.
- O resultado será uma lista não ordenada (`<ul>`) com os nomes e seus índices.

Quando o array de nomes é atualizado (por exemplo, adicionando ou removendo nomes), a interface do usuário será automaticamente atualizada para refletir as mudanças, graças à reatividade do Svelte.

Este é um exemplo simples de como criar um loop `for` em Svelte usando a diretiva `each`. Essa abordagem torna a renderização de listas e coleções de dados muito mais simples e eficiente em comparação com a manipulação manual do DOM.