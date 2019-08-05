[comment]: # "Редактируйте файл README.source.md"

[![Gitter](https://badges.gitter.im/Discours/community.svg)](https://gitter.im/Discours/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f55a8a2f-cc4e-4c1d-9605-ce9a500a0b6f/deploy-status)](https://app.netlify.com/sites/beta-discours-io/deploys)
{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "coveralls"}
{"gitdown": "badge", "name": "codeclimate-gpa"}

> Весь фронтэнд Дискурса в одном репозитории!

[Дискурс](https://discours.io) (Пока что на старом проекте) | [Бэта Дискурс](https://beta.discours.io) (собирается из develop) | [Сторибук Дискурса](https://storybook.discours.io)

{"gitdown": "contents"}

### Cheat Sheet

> Быстрый справочник по разработке проекта

- `npm run commit` вместо `git commit` (Выводит интерактивный промпт для коммита).
- Проект должен запускаться в IE9 и выше, но прям отлично заботимся о поддержке IE11 и выше. [Подробнее](#browser-support).
- PR в ветку `develop`.
- [storybook](https://storybook.js.org) для верстки компонентов и страниц очень помогает.
- [react-testing-library](https://testing-library.com/react) для интеграционного тестирования компонентов (если там есть какая-то логика) для полной уверенности в своём коде.
- [lioness](https://github.com/alexanderwallin/lioness) для i18n, короче говоря, пишем весь текст через тэг `<T />`.
- UI Kit компоненты в `src/components/discours-ui-kit`, вёрстка — в `src/components/modules`, логика — в `src/containers`. [Подробнее](./src/components/README.md).
- Свойства `.css` [идеоматически сортируются](https://github.com/necolas/idiomatic-css#declaration-order) перед коммитом. [Зачем?](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)

> [Оригинал](https://github.com/Discours/discours-welcome)

:[Манифест](https://raw.githubusercontent.com/Discours/discours-welcome/master/MANIFEST.md)

### Storybook

This repo includes [Storybook](https://storybook.js.org/) - a great way to develop components. [Try a tutorial](https://www.learnstorybook.com/) to get started, if you are not familiar with this instrument.

### Component Testing

[react-testing-library](https://github.com/kentcdodds/react-testing-library) is used to write integration tests of React components. [jest-dom](https://github.com/gnapse/jest-dom#readme) is used to have better development experience to write expectations.

If you need any inspiration on how to write tests with different libraries from react world (`react-redux`, `react-router`) you can always look at [Examples](https://github.com/kentcdodds/react-testing-library#examples) and [official documentation](https://testing-library.com/docs/intro).

<a name="browser-support"></a>

### Поддержка браузеров

React поддерживает IE9 и мы не видим причин сделать так, чтобы сайт хотя бы запускался в этом браузере. Понятное дело, верстка будет сильно ехать, но информация будет хотя бы доступной.

Следим за правильным отображением мы в браузере IE11 и выше.

**Статистика Дискурса взята за январь-июль 2019**

- Edge **0.96%**
- IE **0.73%**
  - IE11 **0.67%**
  - IE8 **0.04%**
  - IE10 **0.0074%**
  - IE9 **0.002%**
  - IE7 **0.001%**
  - IE6 **0.0007%**
