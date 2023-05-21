# Extensions this Diego

- ESlit
- Fluent Icons
- GitLens
- Omni Theme
- PostCSS Language Support
- Prisma
- Symbols
- Tailwind CSS IntelliSense
- Color Highlight

# Comands

<!-- Back-End Node -->

## Comands for Node

- `npm init -y`
- `npm i typescript -D`
- `npm i @types/node -D`
- `npx tsc --init`
- `npm i tsx -D`

## Framework Node:

`npm i fastify `

## Padronização do Código

`npm install eslint -D`

## a Rocketseat já possui uma padronização

`npm i @rocketseat/eslint-config -D`

## Prisma como dependencia de Desenvolvimento

`npm i prisma -D`

## Para mudar o padrão do Prisma para o SQLite

`npx prisma init --datasource-provider SQLite`

## Para salvar o schema no banco

`npx prisma migrate dev`

## Para usar o prisma na produção

`npm i @prisma/client`

## Para abrir o Prisma Studio

`npx prisma studio`

<!-- Front-End React+Next -->

# Front-End React

## Criando com Next JS

`npx create-next-app@latest web --use-npm`

Ao criar o web, colocar todas opções como YES

## Para tambem configurar o ESLint no react

`npm i @rocketseat/eslint-config -D`

## Plugin do TailwindCSS - é uma ferramenta para deixar o código mais bonito

`npm i prettier-plugin-tailwindcss -D`

<!-- Mobile -->

# Para criação do sistema Mobile

## Criação do Expo

`npx create-expo-app mobile`

## Para instalar o TailwindCSS no Mobile ele tem o nome de NativeWind

`npm i nativewind`
e o tailwind css como dependência de desenvolvimento
`npm i tailwindcss -D`

## Agora rodar o comando para criar o tailwind config

`npx tailwindcss init`

### após isso, precisa abrir o arquivo "tailwind.config.js" e excluir o

`content: [],`

### e adicionar no lugar o

`content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],`

### posteriormente abrir o arquivo "babel.config.js" e logo após o "presets" adicionar

`plugins: ["nativewind/babel"],`

### Após isso como estou utilizando Typescript, preciso abrir o arquivo "tsconfig.json" e alterar dentro do "compilerOptions" para

```
"types": [
  "nativewind/types"
]
```

## Configurando o ESLint para o Mobile

`npm i eslint @rocketseat/eslint-config -D`

### após isso criar o arquivo .eslintrc.json e colar dentro dele

```

{
"extends": [
"@rocketseat/eslint-config/react"
]
}

```

## e o plugin do Prettier

`npm i prettier-plugin-tailwindcss -D`

### após isso criar o arquivo prettier.config.js e colar dentro dele

```

module.exports = {
plugins: [require('prettier-plugin-tailwindcss')],
}

```

#### Chave dia 1 é: SHOWMETHECODE

# Parte 2

## Web

### Fontes Utilizadas

#### Roboto

#### bai-jamjuree

### Pacote de Icons

`npm i lucide-react`

## Mobile

### Fontes Utilizadas pelo Expo Google Fonts

`npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font`

### Para utilizar arquivos SVG, primeiro instalar a biblioteca SVG

`npx expo install react-native-svg`

### E depois a biblioteca SVG-transformer - Git: https://github.com/kristerkari/react-native-svg-transformer

`npm i -D react-native-svg-transformer`

### após isso criar um arquivo na raiz do mobile com o nome de "metro.config.js" e colar esse codigo:

```
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

### e caso esteja usando Typescript, colar esse codigo a seguir, no arquivo "assets.d.ts"

```
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

## Backend

### instalação do zod

`npm i zod`

### Plugin de Cors

`npm i @fastify/cors`

## chave dia dois "BUILDTHEFUTURE"

# 3 Dia

## Back-End

### Pacote dotenv

`npm i dotenv -D`

### Para fazer requisições HTTP instalar o Axios

`npm i axios`

### para utilizar o JWT

`npm i @fastify/jwt`

## Front-End

### Para fazer requisições HTTP instalar o Axios no Web para fazer requisição no back-end

`npm i axios`

### Para extrair informações de dentro do token

`npm i jwt-decode`

## Mobile

### Pacote Expo Auth Session para adcionar autenticação web browser - https://docs.expo.dev/versions/latest/sdk/auth-session/

`npx expo install expo-auth-session expo-crypto`

### para usar o back-end no mobile

`npm i axios`

### Como Mobile não tem cookie, vamos utilizar o expo secure store - https://docs.expo.dev/versions/latest/sdk/securestore/

`npx expo install expo-secure-store`

### Expo Router para fazer a mesma funcionalidade de rotas que no Next.js - https://docs.expo.dev/guides/routing-and-navigation/

`npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`

# dia 4

## Web

### plugin para mexer no checkbox Tailwind Forms - https://github.com/tailwindlabs/tailwindcss-forms

`npm install -D @tailwindcss/forms`

### E dentro do tailwind.config.js colar o

```
 plugins: [
    require('@tailwindcss/forms'),
 ]
```

## Back-End

### Plugin Fastify Multipart

`npm i @fastify/multipart`

### Modulo Fastify Static para que uma pasta do back fique publica

`npm i @fastify/static`

### senha NEVERSTOPLEARNING e NEXTLEVELWEEK

# Dia 5

## Web

### lib js-cookie

`npm i js-cookie`
`npm i --save-dev @types/js-cookie`
