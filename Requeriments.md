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
