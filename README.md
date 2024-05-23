<h1>Divertidamente - Landing Page</h1>

## Sobre o Projeto

Essa landing-page trás um evento fictíceo e foi desenvolvida para olocar em prática conhecimentos adquiridos no curso de Desenvolvedor Full Stack Python da EBAC.

## Estrutura de Pastas

- `/src`: Código-fonte principal da aplicação.
- `/images`: Armazenamento das imagens utilizadas.
- `/scripts`: Diretório para o dinamismo da página.
- `/styles`: Diretório para a estilização da página.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução Javascript no lado do servidor.
- **Sass**: Linguagem de folha de estilo CSS pré-processada que estende a sintaxe do CSS.
- **Parcel**: Bundler de código extremamente rápido, zero configuração e altamente eficiente.

## Rodando Localmente

Clone o repositório:

```bash
git clone https://github.com/analiceleite/ebac_tech_talks.git
```

Instalando as dependências:

```bash
npm init -y
npm i parcel
```

Configurando o arquivo 'package.json':

```bash
 "scripts": {
    "dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js",
},
```

Inicializando o servidor:

```bash
npm run dev
```

## Status

 <img src= "https://img.shields.io/badge/Status-In_Progress-yellow"/>

