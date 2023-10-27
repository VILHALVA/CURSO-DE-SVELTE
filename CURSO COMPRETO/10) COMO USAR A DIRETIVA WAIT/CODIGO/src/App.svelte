import { Component } from "svelte";

export default class MyComponent extends Component {
  constructor() {
    super();
    this.data = [];
    this.isReady = false;
  }

  async fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    this.data = data;
    this.isReady = true;
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
