# COMO COLOCAR VÁRIOS SLOTS EM UM COMPONENTE?
Você pode colocar vários slots em um componente Svelte para permitir que diferentes partes de conteúdo sejam inseridas em locais específicos do componente. Isso torna seu componente ainda mais flexível e personalizável. Vou mostrar um exemplo de como criar um componente com vários slots.

**Exemplo de Estrutura de Arquivos:**

```
src/
|-- App.svelte
|-- MultiSlotComponent.svelte
```

**MultiSlotComponent.svelte:**

```html
<!-- MultiSlotComponent.svelte -->
<script>
  // Nenhum código JavaScript necessário no componente MultiSlotComponent
</script>

<div class="container">
  <div class="header">
    <!-- Slot para o cabeçalho -->
    <slot name="header">
      <h2>Texto Padrão do Cabeçalho</h2>
    </slot>
  </div>
  <div class="content">
    <!-- Slot para o conteúdo principal -->
    <slot></slot>
  </div>
  <div class="footer">
    <!-- Slot para o rodapé -->
    <slot name="footer">
      <p>Rodapé Padrão</p>
    </slot>
  </div>
</div>
```

Neste exemplo:

- O componente "MultiSlotComponent.svelte" possui três slots nomeados: "header," "default" (sem nome) e "footer."

- O slot "header" é usado para inserir conteúdo no cabeçalho do componente.

- O slot sem nome é usado para inserir o conteúdo principal do componente.

- O slot "footer" é usado para inserir conteúdo no rodapé do componente.

**App.svelte:**

```html
<!-- App.svelte -->
<script>
  // Nenhum código JavaScript necessário no componente App
</script>

<main>
  <h1>Exemplo de Múltiplos Slots em Svelte</h1>

  <MultiSlotComponent>
    <!-- Conteúdo inserido no slot do cabeçalho -->
    <p slot="header">Este é o cabeçalho personalizado</p>

    <!-- Conteúdo principal inserido no slot sem nome (default) -->
    <p>Este é o conteúdo principal</p>

    <!-- Conteúdo inserido no slot do rodapé -->
    <button slot="footer">Botão no Rodapé</button>
  </MultiSlotComponent>
</main>
```

Neste exemplo:

- O componente "App.svelte" inclui o "MultiSlotComponent" e insere conteúdo em cada um dos slots nomeados (header e footer), bem como no slot padrão (sem nome).

- O conteúdo inserido nos slots substituirá o conteúdo padrão definido no componente "MultiSlotComponent.svelte."

Ao executar este exemplo em um projeto Svelte, você verá como os múltiplos slots permitem que você insira diferentes partes de conteúdo em locais específicos do componente. Certifique-se de que os arquivos "MultiSlotComponent.svelte" e "App.svelte" estejam em seu projeto e execute o aplicativo com `npm run dev` para ver o exemplo em ação.