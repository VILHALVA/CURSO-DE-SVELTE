<script>
  let message = "Este é um componente pai";
</script>

<main>
  <h1>{message}</h1>
  <Child>
    <!-- Conteúdo inserido no slot do componente filho -->
    <p>Este é um parágrafo inserido no slot do componente filho.</p>
  </Child>
</main>
