# CURSO DE SVELTE
👨‍⚖️SVELTE É UM FRAMEWORK JAVASCRIPT DE CÓDIGO ABERTO PARA CONSTRUÇÃO DE INTERFACES DE USUÁRIO.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA) 
[![GitHub Repo stars](https://img.shields.io/badge/VEJA%20OS-VIDEOS-03A9F4?logo=youtube)](https://www.youtube.com/@vilhalva100/search?query=SVELTE)
[![GitHub Repo stars](https://img.shields.io/badge/VEJA-DOCUMENTAÇÃO-03A9F4?logo=google)](https://svelte.dev/docs/introduction) 
[![GitHub Repo stars](https://img.shields.io/badge/LINGUAGEM%20DE-PROGRAMAÇÃO-03A9F4?logo=github)](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT) <br>

[![GitHub Repo stars](https://img.shields.io/badge/-PLAYLIST%20DO%20YOUTUBE-blueviolet)](https://youtube.com/playlist?list=PLTd5ehIj0goM-5mQxXLmCr5nHZX_yc2QT&si=pgdYbpihe9Dy9Drh)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" align="center" width="280"> <br>

![](https://i.imgur.com/waxVImv.png)

# CONCEITO:
Svelte é uma estrutura de desenvolvimento web que se diferencia de outras estruturas, como React e Vue, por sua abordagem de compilação. Em vez de ser executado no navegador, o código Svelte é compilado em JavaScript altamente otimizado durante o processo de construção. Isso resulta em um código mais eficiente e menor para o navegador.

Aqui estão alguns conceitos fundamentais em Svelte:

1. **Componentes:** Svelte se baseia na ideia de componentes reutilizáveis, que são blocos de código isolados que encapsulam a lógica e a interface do usuário. Os componentes podem ser compostos em hierarquias para criar aplicativos mais complexos.

2. **Variáveis reativas:** Svelte introduz a ideia de variáveis reativas. Quando uma variável reativa é atualizada, qualquer parte do componente que dependa dela é automaticamente reavaliada e atualizada na interface do usuário. Isso elimina a necessidade de manipulação direta do DOM e oferece um código mais limpo e fácil de manter.

3. **Diretivas:** Svelte usa diretivas para interagir com o DOM e controlar o comportamento dos elementos. Por exemplo, você pode usar a diretiva `on:click` para lidar com eventos de clique, ou `bind:value` para criar um vínculo bidirecional com elementos de formulário.

4. **Lógica JavaScript embutida:** Diferente de outras estruturas, Svelte permite que você inclua lógica JavaScript diretamente no seu componente, tornando-o mais fácil de ler e manter.

5. **Ciclo de vida simplificado:** Svelte simplifica o ciclo de vida do componente, o que torna mais fácil entender quando os componentes são criados, atualizados e destruídos.

Aqui está um exemplo simples de um componente Svelte e uma explicação básica:

```html
<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clique para incrementar: {count}
</button>
```

Neste exemplo:

- A seção `<script>` é onde você declara variáveis, funções e lógica do componente.
- A variável `count` é reativa, o que significa que quando ela é alterada, a interface do usuário é atualizada automaticamente.
- A função `increment` é chamada quando o botão é clicado e atualiza a variável `count`.

Você pode incluir esse código em um arquivo `.svelte` e, ao construir seu aplicativo, o código Svelte o compilará em JavaScript otimizado para o navegador.

# CARACTERISTICAS:
## Características Positivas:
1. **Desempenho Superior:** Svelte compila seu código em JavaScript altamente otimizado durante o processo de construção, resultando em aplicativos mais rápidos e eficientes em termos de desempenho em comparação com algumas outras estruturas, que atualizam o DOM em tempo de execução.

2. **Sintaxe Simples e Clara:** A sintaxe de Svelte é mais simples e direta em comparação com algumas outras estruturas, tornando mais fácil para os desenvolvedores entenderem e escreverem código.

3. **Redução de Código:** Devido à compilação, os aplicativos Svelte tendem a ter um código mais enxuto e menor, o que resulta em tempos de carregamento mais rápidos.

4. **Componentização Reativa:** Svelte usa variáveis reativas para atualizar automaticamente a interface do usuário quando os dados são alterados, facilitando a criação de componentes reutilizáveis e a atualização da interface do usuário de forma eficiente.

5. **Fácil Integração:** Svelte é altamente compatível com outras bibliotecas e frameworks JavaScript, o que facilita sua integração em projetos existentes.

## Características Negativas:
1. **Adoção Menor:** Svelte não é tão amplamente adotado quanto estruturas mais estabelecidas como React, Vue ou Angular. Isso pode resultar em menos recursos da comunidade, bibliotecas de terceiros e documentação disponíveis.

2. **Curva de Aprendizado:** Embora a sintaxe seja mais simples, Svelte ainda possui sua própria curva de aprendizado, e os desenvolvedores que já estão familiarizados com outras estruturas podem precisar de tempo para se ajustar aos conceitos únicos do Svelte.

3. **Maturidade:** Svelte pode ser visto como menos maduro em comparação com estruturas mais antigas, o que significa que ele pode não atender a todas as necessidades de desenvolvimento, especialmente em projetos empresariais complexos.

4. **Ecossistema Menor:** O ecossistema de bibliotecas e plugins para Svelte é menor em comparação com estruturas mais populares, o que pode tornar mais desafiador encontrar soluções prontas para tarefas específicas.

5. **Tamanho do Complemento:** Aplicativos Svelte podem ter um tamanho inicial maior do que aplicativos similares em outras estruturas devido à inclusão do Svelte Runtime, embora isso possa ser compensado pelo desempenho e pela otimização no longo prazo.

