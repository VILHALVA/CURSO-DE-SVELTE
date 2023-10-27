# COMO CRIAR UM PROJETO SVELTE?
Para criar um novo projeto Svelte, você pode usar o Svelte CLI (Command Line Interface), que simplifica o processo de configuração e criação de um projeto Svelte. Aqui estão os passos para criar um projeto Svelte:

**Passo 1:** Certifique-se de ter o Node.js e o npm (gerenciador de pacotes Node) instalados em seu sistema. Você pode baixar e instalar o Node.js em [nodejs.org](https://nodejs.org/).

**Passo 2:** Após instalar o Node.js, abra seu terminal ou prompt de comando e execute o seguinte comando para instalar o Svelte CLI globalmente:

```bash
npm install -g degit
```

Isso instala a ferramenta `degit`, que é usada para criar um novo projeto Svelte a partir de um modelo.

**Passo 3:** Com o Svelte CLI e `degit` instalados, você pode criar um novo projeto Svelte. Substitua `my-svelte-project` pelo nome que você deseja para o seu projeto. No terminal, execute o seguinte comando:

```bash
npx degit sveltejs/template my-svelte-project
```

Isso criará um novo projeto Svelte no diretório "my-svelte-project" usando o modelo padrão fornecido pelo Svelte.

**Passo 4:** Acesse o diretório do seu projeto recém-criado:

```bash
cd my-svelte-project
```

**Passo 5:** Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

**Passo 6:** Agora você pode iniciar o servidor de desenvolvimento e começar a trabalhar no seu projeto Svelte. Execute o seguinte comando:

```bash
npm run dev
```

Isso iniciará um servidor de desenvolvimento local, e seu aplicativo Svelte estará disponível em seu navegador.

Agora você pode começar a criar componentes, escrever lógica JavaScript e personalizar seu projeto Svelte de acordo com suas necessidades específicas.

Lembre-se de que esse é um processo básico para criar um projeto Svelte. Você pode expandir e personalizar seu projeto adicionando componentes, estilos e configurações adicionais, conforme necessário. Certifique-se de consultar a documentação [oficial do Svelte](https://svelte.dev/) para obter informações detalhadas sobre como usar a estrutura e suas funcionalidades avançadas.