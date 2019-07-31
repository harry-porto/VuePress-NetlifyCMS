---
language: pt
title: Radio
date: 2019-07-31T02:08:13.582Z
---
# Radio

O componente radio button deve ser utilizado quando o usuário precisar escolher uma e somente uma opção ente um grupo de itens.

Quando usar 

Use em formulários quando for necessário selecionar uma opção entre várias. Ideal para quando se pode expor todas as opções de uma lista, evitando maior demanda cognitiva. Entretanto, caso as opções disponíveis puderem ser reduzidas, considere usar um menu suspenso, pois ele usa menos espaço.

Anatomia

![Anatomia Radio](/media/radio-anatomy.png "Anatomia Radio")

Round-box:   caixa que contém a marcação de "selecionado". Podendo ser apresentada mais de uma vez, de acordo com o contexto de uso;

Label: texto que descreve a opção selecionada pelo usuário, no caso do radio button é opcional;

Texto: texto que representa a opção selecionada pelo usuário.

Boas práticas

Radio buttons devem ser aplicados na vertical, um abaixo do outro. Isso facilita na compreeensão do texto e na identificação do seu respectivo botão;

Listar as opções em uma ordem lógica e não alfabética:

Do mais provável para o menos provável que seja selecionado;

Da operação mais simples à mais complexa;

Do menor risco para o maior. 

Para deixar uma opção selecionada por padrão, o ideal é saber qual é a opção mais provável a ser selecionada e usar ela;

 Se precisar de um estado “Não selecionado”, basta adicionar um botão com a opção "Nenhuma das opções/Nenhum";

Caso não tenha certeza de que todas as opções estão contempladas, utilizar a opção "Outros";

Textos e, eventualmente, labels, de um radio button precisam ser claras e ter relação com o contexto. Os Textos também devem ser clicáveis. 

Se estiver lidando com casos onde é preciso selecionar um intervalo, é recomendado que não colocar opções sobrepostas (Ex.: 0-20, 20-40). Nessas situações inicie e finalize os intervalos com números distintos (Ex.: 0-19, 20-40, 41-50); 

Para adicionar os radio buttons, deve-se manter o mesmo nome, mas mudar o Id das caixas para que sejam diferentes. A label deve ter um " for:IDdoRadio" para quando clicar na label, selecionar o radio;

Se a lista tiver mais de 5 itens é recomendado utilizar um Select

Caso queira utilizar ícones e texto, opte pelo Slimbox choice

Comportamento

Radio button default

Radio button ativo

Radio button inativo

Radio button desabilitado

Exemplos

Aplicando radio button para escolhas binárias

Certo

Nesse exemplo, como é preciso escolher apenas uma entre as duas opções, é aplicado o radio button corretamente.

Errado

Para listas de até 4 opções deve ser aplicado um radio button. Selects se enquadram em situações que envolvam mais de 4 opções. Logo, este exemplo apresenta um erro quanto a aplicação do componente.
