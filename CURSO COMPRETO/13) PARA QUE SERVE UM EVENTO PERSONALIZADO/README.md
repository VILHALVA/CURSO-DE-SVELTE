# PARA QUE SERVE UM EVENTO PERSONALIZADO?
Um evento personalizado é um evento que não é parte dos eventos nativos do navegador, mas sim um evento personalizado criado por um desenvolvedor para atender a necessidades específicas em uma aplicação. Eles são frequentemente usados para permitir a comunicação entre componentes, módulos ou partes distintas de um aplicativo.

Aqui estão alguns casos de uso comuns para eventos personalizados:

1. **Comunicação entre componentes:**
   - Os eventos personalizados podem ser usados para permitir que diferentes componentes de um aplicativo se comuniquem uns com os outros sem criar acoplamento direto entre eles.
   - Por exemplo, um componente de lista pode disparar um evento personalizado quando um item é selecionado e outros componentes podem ouvir esse evento para responder à seleção.

2. **Notificação de mudanças de estado:**
   - Eventos personalizados podem ser usados para notificar outros partes do aplicativo sobre mudanças de estado.
   - Por exemplo, um aplicativo de tarefas pode disparar um evento personalizado quando uma nova tarefa é criada, e um componente de lista de tarefas pode ouvir esse evento para atualizar a lista.

3. **Integração com bibliotecas externas:**
   - Às vezes, você pode precisar integrar com bibliotecas externas que esperam ou disparam eventos personalizados.
   - Por exemplo, bibliotecas de gráficos podem usar eventos personalizados para notificar quando o gráfico foi renderizado e permitir que você execute ações após o processamento do gráfico.

4. **Encapsulamento de funcionalidade:**
   - Os eventos personalizados podem ser usados para encapsular funcionalidades específicas em um componente, permitindo que outros componentes utilizem essa funcionalidade por meio de eventos personalizados em vez de expor detalhes de implementação.

Ao criar e usar eventos personalizados, você pode melhorar a modularidade, reutilização e manutenção de seu código. Isso permite que diferentes partes de um aplicativo interajam de forma eficaz, mesmo quando estão isoladas umas das outras. É uma técnica importante para o desenvolvimento de aplicativos escaláveis e organizados.