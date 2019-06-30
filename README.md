### Шаги

* Создание папок проекта
```
mkdir react-boilerplate
cd react-boilerplate
mkdir -p src/components src/styles
```

* Инициализация git и создание `.gitignore`
```
git init
```

* Инициализация проекта
```
yarn init
```

* Добавление webpack
```
yarn add webpack webpack-cli -D
```

* Добавление react
```
yarn add react react-dom -D
```

* Добавление babel
```
yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react -D
```
babel-core: Преобразует код ES6 в ES5.  
babel-loader: Помощник Webpack для транспайлинга кода, задает пресеты.  
babel-preset-env: Пресет, который помогает babel конвертировать код ES6, ES7 и ES8 в код ES5.  
babel-preset-react: Пресет, преобразующий JSX в JavaScript.  


* Добавление index файлов