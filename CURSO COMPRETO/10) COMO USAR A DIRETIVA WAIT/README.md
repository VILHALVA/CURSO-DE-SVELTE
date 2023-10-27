# COMO USAR A DIRETIVA WAIT?
A diretiva `wait` é usada para atrasar a renderização de um componente até que uma promessa seja resolvida. Ela é usada para evitar que o componente seja renderizado antes que a promessa seja resolvida, o que pode causar problemas de desempenho ou exibição.

A sintaxe da diretiva `wait` é a seguinte:

```
{#wait promise}
...
{/wait}
```

Onde `promise` é uma promessa que será resolvida antes que o componente seja renderizado.

Por exemplo, o seguinte código irá renderizar um componente `Loading` até que uma promessa `fetchData()` seja resolvida:

```
import { Component } from "svelte";

export default class MyComponent extends Component {
  constructor() {
    super();
    this.data = [];
  }

  async fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    this.data = data;
  }

  render() {
    return (
      <div>
        {#wait this.fetchData()}
        <Loading />
        {/wait}
        <ul>
          {this.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

No exemplo acima, o componente `Loading` será renderizado até que a promessa `fetchData()` seja resolvida. Quando a promessa for resolvida, o componente `MyComponent` será renderizado com a lista de dados recuperada da API.

A diretiva `wait` também pode ser usada para atrasar a renderização de um componente até que uma condição seja atendida. Para isso, você pode usar a função `async` para definir uma condição que será avaliada antes que o componente seja renderizado.

Por exemplo, o seguinte código irá renderizar um componente `Loading` até que uma condição `isReady` seja atendida:

```
import { Component } from "svelte";

export default class MyComponent extends Component {
  constructor() {
    super();
    this.isReady = false;
  }

  async fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    this.isReady = true;
  }

  render() {
    return (
      <div>
        {#wait this.isReady}
        <Loading />
        {/wait}
        <ul>
          {this.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

No exemplo acima, o componente `Loading` será renderizado até que a condição `isReady` seja atendida. Quando a condição for atendida, o componente `MyComponent` será renderizado com a lista de dados recuperada da API.

Aqui estão algumas dicas para usar a diretiva `wait`:

* Use a diretiva `wait` apenas quando for necessário. Se você puder renderizar o componente imediatamente, não use a diretiva `wait`.
* Use a diretiva `wait` para evitar problemas de desempenho ou exibição. Se você renderizar um componente antes que uma promessa seja resolvida, isso pode causar problemas de desempenho ou exibição.
* Use a diretiva `wait` para controlar a renderização de um componente. Se você quiser que um componente seja renderizado apenas quando uma condição for atendida, você pode usar a diretiva `wait` para controlar a renderização do componente.