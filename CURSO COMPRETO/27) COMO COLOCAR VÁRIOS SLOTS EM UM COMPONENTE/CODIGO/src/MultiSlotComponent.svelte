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
  