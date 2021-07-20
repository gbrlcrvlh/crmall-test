# CrmallTest

Este projeto foi gerado utilizando o framework [Nx](https://nx.dev), que provém uma boa estrutura e configuração de projetos auxiliando o desenvolvimento e integrabilidade.

### Desafio
> Crie uma Single Page Application (Angular 10) de uma loja de quadrinhos utilizando a API da Marvel para todos os consumos de dados.

### Solução

#### Visão geral
Este projeto foi criado a fim de solucionar o desafio proposto na 3ª etapa do processo seletivo da CRMALL. A solução consiste de uma *Single Page Application* que coleta os dados disponibilizados pela API da Marvel via *Rest*. Na página é possível visualizar os quadrinhos que estão disposto em um *card* contendo a imagem da capa, título e autores. Mais detalhes sobre o quadrinho é possível visualizar através do clique no título do mesmo, além de ser possível ser criado uma coleção de quadrinhos através do clique na sua imagem.

A barra de navegação consta com um expansor para os filtros utilizado na listagem dos quadrinhos, disponibilizado pela API. Além de exibir um botão para *checkout* dos produtos selecionados.

#### Listagem dos quadrinhos
Devido ao alto volume de quadrinhos disponibilizado pela APi e a fim de reduzir os impactos causados por uma grande carda de dados, os quadrinhos são carregados sob demanda, limitado a 50 por requisição, através da rolagem da página.

#### Filtro
Nos componentes de fifltragem é possível identificar itens cujo o filtro é feito através de um *multi select*, sendo as opções adquiridas também através da API e carregadas sob demanda através da rolagem no *card* de seleção. Além de ser possível realizar buscas nas opções.

#### checkout
Os itens selecionados pela listagem de quadrinhos ficam disponíveis para qualquer componente consumir a lista, isto é feito através do Redux e NgRx que possibilita a disponibilidade de informações sem restrição de relacionamento entre os componentes. A fim de concluir o desafio no prazo inicialmente estabelecido, apenas foi feito um botão de *checkout* com a exibição da contagem de itens selecionados.


### Funcionamento 
Para rodar o projeto basta seguir os passos:
 - `git clone https://github.com/gbrlcrvlh/crmall-test.git`
 - `npm install`
 - `ng serve`

Ao seguir os passos é possível acessar através do link `http://localhost:4200/#/crmall-test/`
