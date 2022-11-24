# Bem-vindo(a) ao Covidômetro!

Este documento está dividido em 4 partes:

 1. O que foi desenvolvido;
 2. Como executar o projeto localmente;
 3. Como executar os testes automatizados;
 4. Como acessar o projeto em ambiente de produção e de homologação.

## 1 - O que foi desenvolvido

Este projeto é uma aplicação capaz de exibir aos usuários o número de casos e óbitos relacionados a pandemia da COVID-19 ao redor do mundo, tendo como fonte de dados a [COVID19 API](https://covid19api.com/).  

Foram usadas as seguintes tecnologias neste projeto:

 - VueJS + TypeScript;
 - Vuex;
 - VueRouter;
 - Vuetify;
 - Axios;
 - ESLint.

Dentro do diretório src, estão as seguintes pastas e seu(s) conteúdo(s):

 - **components**: Pasta responsável por armazenar os camponents reutilizáveis do projeto, distribuídos em 3 subpastas, atoms, molecules e organisms, às quais fazem parte da metodologia **Atomic Design**;
 - **constants**: Responsável por armazenar os arquivos de constantes do projeto;
 - **filters**: Pasta contando alguns [filtros](https://v2.vuejs.org/v2/guide/filters.html) usados no projeto, DataFilter, NumberFilter, responsáveis por formatar, respectivamente, data e números;
 - **plugins**: Plugins usados no projeto, no caso, contem apenas o arquivo de configuração do Vuetify;
 - **router**: Onde ficam os arquivos de rota do sistema, configurados usando ***VueRouter***. Possui um arquivo index.ts com a configuração base e uma pasta chamada routers com um arquivo para cada rota do projeto. Existem apenas duas rotas neste projeto: summary (raiz) e countryStatus;
 - **sass**: Variáveis sass;
 - **services**: Contem os arquivos de service, onde fica a configuração responsável pela comunicação com serviços externos. No caso do projeto, possui uma subpasta chamada  Covid19ApiService, onde está a configuração de comunicação com a Covid19Api através do Axios. Dentro dela também existe um arquivo para cada endpoint da Api, os quais implementam a classe abstrata Covid19ApiService e herdam todos os seus atributos;
 - **store**: Arquivos de gestão do estado da aplicação, usando **Vuex**. Possui um arquivo index.ts e uma subpasta para cada módulo;
 - **types**: Tipos (**TypeScript**) do projeto, agrupados em arquivos para facilitar a reutilização;
 - **utils**: Funções e métodos úteis e reutilizaveis por todo projeto. Um exemplo é a classe **Logger**, a qual foi criada para ser responsável pela coleta, tratamento e envio dos logs da aplicação para algum servidor de logs, como por exemplo ElasticSearh;
 - **views**: Páginas/telas do sistema, sendo uma pasta para cada view, contando um arquivo index.vue como raiz e n arquivos de sections da página em questão, tendo estes últimos a função de organizar e facilitar a manutenção.
 
 #### **Observação importante**: A [COVID19 API](https://covid19api.com/) está apresentando instabilidades em momentos aleatórios. Quando isso acontece o endpoint `/summary` não retorna o campo Countries, o que praticamente inutiliza a aplicação. Para contornar este problema, adicionei uma verificação e, quando o campo Countries não é retornado, substituo por dados mockados.

##  2 - Como executar o projeto localmente;

Para executar o projeto localmente (usando npm) siga os seguintes passos:

 1. Clone o [repositório](https://github.com/higorrezend/front-coding-test) com o seguinte comando: `git clone https://github.com/higorrezend/front-coding-test.git`;
 2. Acesse a pasta criada com o comando: `cd front-coding-test`;
 3. Instale as dependências do projeto com o comando: `npm install`;
 4. Crie uma cópia do arquivo .env.example com o nome .env;
 5. Defina no arquivo .env criado o valor da variável VUE_APP_COVID19_API_BASE_URL, sendo este a URL base da Covid19Api (`https://api.covid19api.com`);
 6. Execute a aplicação com o seguinte comando: `npm run serve`;
 7. Acesse o endereço indicado em sue console em um navegador;
 8. Pronto, você já irá ver o sistema em execução em seu computador.


##  3 - Como executar os testes automatizados;

Neste projeto utilizei o framework de testes Cypress através do qual configurei alguns testes de e2e. Em um cenário real, iria utilizar, além dos testes de e2e, testes de integração e unitários.

Para executar os testes siga os seguintes passos:

 1. Execute a sessão anterior para executar o projeto localmente em seu computador;
 2. Certifique-se de que o projeto está sendo executado na URL `http://localhost:8080`;
 3. Acesse via linha de comando a pasta do projeto;
 4. Execute o comando `npm run test`;
 5. A sequência de testes será executada.


## 4 - Como acessar o projeto em ambiente de produção e de homologação;

O projeto foi implantado usando a integração do GitHub com o Cloudflare Pages e possui dois links de acesso, um do ambiente de desenvolvimento (branch develop) e outro do ambiente de produção (branch main).

 - [Clique aqui para acessar o ambiente de homologação](https://homolog-covidometro.higorrezende.com.br);
 - [Clique aqui para acessar o ambiente de produção](https://covidometro.higorrezende.com.br/#/).

```