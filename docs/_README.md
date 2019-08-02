[comment]: # "Редактируйте файл docs/_README.md"

[![Gitter](https://badges.gitter.im/Discours/community.svg)](https://gitter.im/Discours/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
{"gitdown": "badge", "name": "npm-version"}
{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "coveralls"}
{"gitdown": "badge", "name": "codeclimate-gpa"}

> Весь фронтэнд Дискурса в одном репозитории!

{"gitdown": "contents"}

### Cheat Sheet

> Быстрый справочник по разработке проекта

- `npm run commit` вместо `git commit` (Выводит интерактивный промпт для коммита)
- PR в ветку `develop`
- [storybook](https://storybook.js.org) для верстки компонентов и страниц очень помогает
- [react-testing-library](https://testing-library.com/react) для интеграционного тестирования компонентов (если там есть какая-то логика) для полной уверенности в своём коде
- [emotion](https://emotion.sh/docs/introduction) для css, на самом деле просто пишем css текстом, но с классным автодополнением и поддержкой Typescript
- [lioness](https://github.com/alexanderwallin/lioness) для i18n, короче говоря, пишем весь текст через тэг `<T />`
- UI компоненты в `src/components/discours-ui`, верстка — в `src/components`, логика — в `src/containers`

> [Оригинал](https://github.com/Discours/discours-welcome)

:[Манифест](https://raw.githubusercontent.com/Discours/discours-welcome/master/MANIFEST.md)

## Storybook

This repo includes [Storybook](https://storybook.js.org/) - a great way to develop components. [Try a tutorial](https://www.learnstorybook.com/) to get started, if you are not familiar with this instrument.

## Component Testing

[react-testing-library](https://github.com/kentcdodds/react-testing-library) is used to write integration tests of React components. [jest-dom](https://github.com/gnapse/jest-dom#readme) is used to have better development experience to write expectations.

If you need any inspiration on how to write tests with different libraries from react world (`react-redux`, `react-router`) you can always look at [Examples](https://github.com/kentcdodds/react-testing-library#examples) and [official documentation](https://testing-library.com/docs/intro).
