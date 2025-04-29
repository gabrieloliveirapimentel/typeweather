<h3 align="center"> 
	Typeweather
</h3>

Projeto desenvolvido para replicar um desafio do curso Explorer da Rocketseat, com funcionalidades extras com uso do React, para realizar para obter os dados climaticos de uma cidade pesquisada. 

Neste projeto, foi utilizado a API da [API da AccuWeather](https://developer.accuweather.com/) para mostrar os dados reais e atualizados de uma cidade informada na tela inicial da aplicação.

Este projeto foi desenvolvido com o uso do <b>Material UI</b> para replicar o protótipo da interface de usuário exatamente como mostrado no Figma, React Router para troca de tela e Axios para consumo dos dados da API. 

## Tecnologias utilizadas
Foi utilizado para desenvolver esse projeto:
- <b>Material UI</b>: para interface gráfica;
- <b>React Router</b>: para gerenciamento de tela;
- <b>Axios</b>: para consumir os dados reais da API;
- <b>TypeScript</b>: Para garantir tipagem estática de todo código.

## Instruções para **.env**
Para rodar essa aplicação e consumir dados reais, é necessário criar uma chave para consumir a **API** da **AccuWeather**. Com uma chave criada, atualize o arquivo ``.env`` com seus dados:

```bash
VITE_API_KEY=ACCUWEATHER_API_KEY
VITE_API_URL=AACUWEATHER_API_URL
VITE_API_VERSION=ACCUWEATHER_API_VERSION
```

Após isso, basta fazer a instalação dos pacotes e rodar a aplicação.

## Capa do projeto

![cover](cover.png?style=flat)