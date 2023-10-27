# INTRODUÇÃO, INSTALAÇÃO E CONFIGURAÇÃO
**Conceito:**
Svelte é uma estrutura de desenvolvimento web que se concentra na compilação de componentes reativos em código JavaScript otimizado. Em vez de ser executado no navegador, o código Svelte é compilado durante o processo de construção, o que resulta em aplicativos altamente eficientes em termos de desempenho e um código mais enxuto. Ele permite a criação de interfaces do usuário reativas de forma simples, com lógica JavaScript embutida.

**Instalação:**
Para começar com o Svelte, você precisa instalá-lo em seu ambiente de desenvolvimento. Você pode fazer isso usando o Node.js e o gerenciador de pacotes npm. Aqui estão os passos para instalar o Svelte:

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Abra seu terminal ou prompt de comando e execute o seguinte comando para instalar a ferramenta de linha de comando Svelte (svelte-cli):

   ```
   npm install -g svelte
   ```

   Isso instalará o Svelte CLI globalmente em seu sistema.

**Configuração Básica:**
Depois de instalar o Svelte, você pode criar um novo projeto Svelte e começar a trabalhar nele. Aqui estão os passos básicos para configurar um novo projeto:

1. Crie um novo projeto Svelte usando o Svelte CLI. Substitua `my-svelte-project` pelo nome do seu projeto:

   ```
   npx degit sveltejs/template my-svelte-project
   ```

2. Acesse o diretório do projeto:

   ```
   cd my-svelte-project
   ```

3. Instale as dependências do projeto executando:

   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento para seu projeto Svelte:

   ```
   npm run dev
   ```

   Isso iniciará um servidor local e disponibilizará seu aplicativo Svelte em um navegador.

Agora você pode começar a trabalhar em seu aplicativo Svelte, criando componentes, escrevendo lógica JavaScript e criando interfaces do usuário reativas. O código-fonte do aplicativo estará no diretório do projeto que você criou.

Lembre-se de que a configuração básica do projeto Svelte varia de acordo com suas necessidades específicas, e você pode personalizar ainda mais seu ambiente de desenvolvimento à medida que avança no desenvolvimento do aplicativo. Certifique-se de consultar a documentação [oficial do Svelte](https://svelte.dev/) para obter informações detalhadas sobre como usar a estrutura e suas funcionalidades avançadas.