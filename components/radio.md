---
title: Radio
date: 2019-07-31T02:08:13.582Z
---
# Radio

Usado para o usuário selecionar uma entre várias opções disponibilizadas, que pertencem necessariamente a um mesmo universo semântico. 



Quando usar

Em formulários e questionários, quando um campo fornece opções limitadas, entre as quais o usuário deve escolher uma. Eventualmente, o select pode ser usado em outros contextos como em filtros, por exemplo.



Anatomia



Label (rótulo): título do campo de preenchimento. Indica à pessoa, com no máximo duas palavras, qual informação ela deve selecionar entre as opções.

Select required (seleção obrigatória): é um campo com seleção obrigatória de algum item. Caso a pessoa clique fora e não selecione um dado, destacamos o campo com contorno vermelho e uma exclamação branca dentro de um círculo vermelho no canto direito; 

Select (seleção): é o elemento onde a pessoa deve clicar para selecionar a opção. 

Select search (seleção com busca): campo para a pessoa escrever o que deseja buscar. Em um elemento sem quick add precisamos exibir a mensagem de item não encontrado: “Nenhum resultado encontrado”, na cor cinza. Você pode conferir como funciona no item "Comportamento";

Item: item do select, caso select não possua busca, deve ser mostrado em fonte regular, caso seja mostrado como resultado da busca deve ter o termo buscado marcado em negrito; Se tamanho do texto for maior que largura do menu, deve quebrar em duas linhas

Subtext: caso seja necessário mostrar um dado adicional em cada item do select esse dado deve vir abaixo do item, na cor cinza claro. Se o select for usado em conjunto com a busca, este subtexto adicional não será rastreável; 

Sidetext: pode-se adicionar mais um dado relacionado a cada item do select. Ele deve ser posicionado do lado direito do campo, também na cor cinza, e conter até cinco caracteres, como um número ou código; 

Select quickadd (botão adicionar): botão de atalho para adicionar itens ao select. Este botão pode ser usado para abrir um popover, uma modal, ou um rollover com os campos para adicionar um item ao select.

Boas práticas

Use selects para a escolha de itens em formulários e filtros. Selects não devem ser usados para navegação ou ações, neste caso, use dropdowns;

A lista deve ter uma ordem primeiramente lógica e depois alfabética. Caso haja uma opção muito mais usada que as outras, ela deve estar no topo;

Tente simplificar, se uma opção raramente é selecionada, deve-se avaliar se é necessário mantê-la;

Caso a seleção seja de “sim” ou “não”, use um campo radio button (escolher apenas uma opção) com as opções. Assim como, se for importante a pessoa comparar os itens para escolher um deles, para até 2 opções;

Caso o formulário possua uma opção que apresente os estados ativo ou inativo (2 opções), use o componente switch

Select loader: deve ser mostrado somente quando forem carregados dados assíncronos (sem sincronia, ou seja, não mostrados imediatamente) no select. Esta é a única situação em que deve aparecer o placeholder "Carregando ...", junto com um ícone de loader. É recomendado evitar carregar os itens do select após o carregamento da página ou após o clique no select. Por padrão, os itens do select já devem ser populados, mas, caso seja necessário, deve-se usar o loader;

Select search: recomenda-se a inclusão da busca no select, sempre que houver um número grande de itens (mais de oito), ocasionando scroll (rolagem) no select; 

Select quick add (seleção com adição): possui o campo de busca para a pessoa escrever o que deseja buscar, com o ícone “+”, na cor azul, dentro de um círculo azul escuro, no canto esquerdo do campo. Este símbolo indica que a pessoa pode adicionar novas opções, caso não apareçam opções satisfatórias quando ela começa a digitar. O Select quick add também pode fazer uma verificação caso o usuário inclua dados em duplicidade, nesse caso, deve exibir uma mensagem de erro abaixo do select. Em um select com quick add, quando não for possível fazer a inclusão de um novo item por alguma instabilidade sistêmica, a seguinte mensagem de erro deve ser mostrada abaixo do campo: “Item não adicionado. Aguarde alguns instantes e tente incluir novamente";

Item da lista: os itens da lista podem possuir scroll (rolagem) ou não, dependendo da quantidade de itens. O scroll deve ser mostrado quando a lista possuir mais de 6 itens.

Comportamento

O componente possui variações de seu comportamento de acordo com o contexto em que é aplicado.



Default select



Trata-se do comportamento padrão do componente, apresentando os elementos passíveis de seleção. Vale ressaltar que, não utilizamos placeholder como padrão em nossos componentes.



Tipo da nota fiscal



Disabled select



Variação aplicada para deixar o campo de seleção bloqueado para escolher um item. Para demonstrar que o campo está desabilitado, fundo e fonte ficam com a cor cinza claro, além disso os itens não são apresentados ao clicar sobre o select.



Tipo da nota fiscal



Error select



Quando o select possui erro, ele deve ser contornado com a cor vermelha e com uma exclamação branca dentro de um círculo vermelho do lado direto. Como o select já vem com dados validados, os erros possíveis são: clicar no select, não selecionar um dos itens, e clicar novamente fora do select; em um select com quick add, quando não é possível fazer a inclusão de um novo item, a seguinte mensagem de erro deve ser mostrada abaixo do campo: “Item não adicionado. Aguarde alguns instantes e tente incluir novamente.”





Suggestion select

Esse comportamento é utilizado para indicar que o select foi pré-preenchido com uma sugestão automática da plataforma. Item aparece na cor azul, acompanhado de um pequeno ícone de raio, também azul, no canto direito do campo.



Tipo da nota fiscal



Search select



O select com busca deve ser usado sempre que houverem mais de oito itens no select. Ao digitar, marcamos com negrito a parte da palavra encontrada por meio da busca. Em um elemento sem quick add, caso o item pesquisado não seja encontrado, precisamos exibir a mensagem: “Nenhum resultado encontrado”, na cor cinza claro. 



Label





Location select



Esse comportamento apresenta selects que possuem uma relação de dependência entre eles. Quando um select for dependente de outro, devemos mostrar o campo dependente desabilitado com um tooltip indicando que outro campo deve ser previamente preenchido. Após o campo "pai" ser preenchido, o campo dependente deve ser habilitado.



Estado



Cidade





Group select



Caso seja necessário agrupar os itens do select, os grupos devem possuir títulos e um divider no fim do grupo. Ao passar o mouse sobre os títulos dos agrupamentos, o cursor do mouse deve ser o padrão (seta). Já ao passar o mouse sobre os itens de cada agrupamento, o cursor deve se transformar no cursor pointer (mão), indicando que cada item é clicável.



Tipo da nota fiscal





Quick add select



Quickadd



É um elemento opcional que permite adicionar opções ao select. Clicando no quick add, o usuário pode ser levado a preencher as informações necessárias em um popover, em uma modal ou em um rollover. O uso de cada um destes componentes vai depender da quantidade de informações a serem preenchidas. Recomenda-se que se use o menor elemento necessário para agrupar as informações obrigatórias do cadastro. No elemento escolhido para ser mostrado, pode existir uma opção ou link para acessar um cadastro mais completo com informações adicionais. 



Por exemplo:  



Cadastro com até três campos obrigatórios: use o popover; 

Cadastro com mais de três campos obrigatórios: use uma modal;

Cadastro com mais de seis campos obrigatórios: use um rollover.

O quick add pode ou não verificar duplicidade de informações. Caso haja verificação e seja encontrada duplicidade, mostramos um popover confirmando a inclusão da informação duplicada.



 

Ao adicionar um item pelo quick add, o select deve mostrar o item adicionado em negrito, juntamente com um ícone de "check" verde ao lado.





Caso ocorra um erro ao adicionar o item via quick add, mostramos o erro no próprio select, como descrito na variação error



Loader select



Essa variação pode ser usada, caso seja necessário mostrar para o usuário que o conteúdo está sendo carregado de forma assíncrona. No momento do carregamento dos dados a serem populados no select, deve-se demonstrar o carregamento com um loader animado e a palavra "Carregando...".





Exemplos

Uso de placeholders no select



Certo

Este exemplo apresenta um select sendo utilizado da maneira correta. Vale ressaltar que ele não possui placeholder.





Errado

Como acabamos de falar, o placeholder não faz parte do comportamento padrão do select. Portanto, nesse exemplo o componente foi aplicado da maneira errada.
