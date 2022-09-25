## О проекте

template-webpack - это набор NPM модулей, завязанных вокруг сборщика Webpack, для создания фронтенда сайтов и фронтенд-приложений. Здесь настроена работа шаблонизатора Pug, препроцессора Sass и языка JavaScript.

## Быстрый запуск

Чтобы использовать данный набор инструментов у вас на компьютере должен быть установлен [Node.js](https://nodejs.org/).

Откройте терминал и сделайте клон проекта к себе на компьютер:

```
git clone https://github.com/injashkin/npm-for-frontend.git new-project-name
```

вместо `new-project-name` вы можете указать любое другое имя проекта

Если у вас не установлен Git, то вы можете [здесь](https://github.com/injashkin/webpack-template/archive/refs/heads/master.zip) скачать ZIP архив. Распакуйте этот архив.

В окне терминала зайдите в каталог и установите проект. Для этого выполните следующие две команды:

```
cd new-project-name
npm i
```

Запустите проект с помощью следующей команды:

```
npm run dev
```

Должно открыться окно браузера со страницей, которая была сгенерирована. Теперь вы можете [разрабатывать сайт](#разработка-сайта).

После разработки делаем продакшн версию сайта

```
npm run build
```
