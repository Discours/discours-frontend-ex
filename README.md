[comment]: # "Редактируйте файл README.source.md"

[![Gitter](https://badges.gitter.im/Discours/community.svg)](https://gitter.im/Discours/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f55a8a2f-cc4e-4c1d-9605-ce9a500a0b6f/deploy-status)](https://app.netlify.com/sites/beta-discours-io/deploys)
[![Travis build status](http://img.shields.io/travis/Discours/discours-frontend-main/develop.svg?style=flat-square)](https://travis-ci.org/Discours/discours-frontend-main)
[![Coverage Status](https://img.shields.io/coveralls/Discours/discours-frontend-main/develop.svg?style=flat-square)](https://coveralls.io/r/Discours/discours-frontend-main?branch=develop)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/Discours/discours-frontend-main.svg?style=flat-square)](https://codeclimate.com/github/Discours/discours-frontend-main)

> Весь фронтэнд Дискурса в одном репозитории!

[Дискурс](https://discours.io) (Пока что на старом проекте) | [Бэта Дискурс](https://beta.discours.io) (собирается из develop) | [Сторибук Дискурса](https://storybook.discours.io)

* [Cheat Sheet](#cheat-sheet)
* [Манифест разработки Дискурса](#)
* [Storybook](#storybook)
* [Component Testing](#component-testing)
* [Поддержка браузеров](#-1)


<a name="cheat-sheet"></a>
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

<a name=""></a>
### Манифест разработки Дискурса

<p align="center"> 
    <img alt="Лого Дискурса" src="https://github.com/Discours/discours-welcome/raw/master/docs/img/logo.jpg">
</p>

![Красивый баннер Дискурса с людьми в одежде 18-о века](https://github.com/Discours/discours-welcome/raw/master/docs/img/banner.jpg)

1. Дискурс — открытый проект. Каждый желающий имеет право стать контрибьютором проекта, внести изменения в любой из сервисов проекта и отправить Pull Request.
1. Дискурс — общий проект. Вы всегда можете пообщаться с другими членами команды в [Gitter чате Дискурса](https://gitter.im/Discours/community). Там Вы можете узнать, что сейчас лучше сделать, а также задать любой вопрос по поводу разработки проекта. 
1. Дискурс — проект для читателя. В первую очередь команда выполняет те таски, за которые проголосовали пользователи на [публичной доске задач проекта]().
1. Дискурс — проект для любого разработчика. Мы принимаем микросервисы для backend на любом языке программирования. Но стоит понимать, что мэйнтейнеры проекта не могут знать всех языков, поэтому Dockerfile для запуска микросервиса, понятная документация и тесты (с настроенным CI для их прогона) обязательны в каждом микросервисе.
1. Дискурс — проект для приятной разработки. Команда следит за качеством кода в проекте для того, чтобы новым контрибьюторам было максимально просто влиться в проект. Качество кода - это не только code style и тесты, но и такие субъективные показатели, как читаемость кода и архитектура. Мэйнтейнеры проекта имеют право попросить автора PR изменить код в целях повышения его качества.
1. Дискурс — проект для удобной разработки новых features. Команда Дискурса стремится создать проект, в котором не надо читать весь код для реализации конкретной функциональности. Мы стремимся создать максимально изолированную среду разработки, используя которую каждая фича разрабатывается отдельно. На frontend проектах мы используем [storybook](https://storybook.js.org/) для разработки компонентов и [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) для интеграционного тестирования функциональности компонентов. На backend проектах — разрабатываем используя тесты.
1. Дискурс — проект с открытым манифестом разработки. Каждый желающий может прислать изменения в [данный манифест](https://github.com/Discours/discours-welcome/blob/master/MANIFEST.md).
1. Дискурс — проект доступный. Верстка в проекте должна учитывать пользователей с ограниченными возможностями, то есть необходимо использовать [ARIA аттрибуты](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA). В storybooks всех фронтэнд проектов установлен плагин [@storybook/addon-a11y](https://www.npmjs.com/package/@storybook/addon-a11y), который показывает недостающие ARIA аттрибуты.
1. Дискурс — проект без гос. цензуры. Но большая часть наших читателей из РФ, где РосКомНадзор частенько бомбит славный город Воронеж и даже иногда [блокирует сам себя](https://lenta.ru/news/2016/12/12/127001/). Инфраструктура проекта должна быть распределенной, но должна поддерживать быструю смену IP адресов всего, до чего необходимо достучаться пользователю (фронтэнд, бэкэнд, rss микросервис, другие микросервисы доступные пользователю). Нельзя создавать vendor lock на решения, которые не позволяют быстро сменить IP (Cloudflare, Netlify).

<a name="storybook"></a>
### Storybook

This repo includes [Storybook](https://storybook.js.org/) - a great way to develop components. [Try a tutorial](https://www.learnstorybook.com/) to get started, if you are not familiar with this instrument.

<a name="component-testing"></a>
### Component Testing

[react-testing-library](https://github.com/kentcdodds/react-testing-library) is used to write integration tests of React components. [jest-dom](https://github.com/gnapse/jest-dom#readme) is used to have better development experience to write expectations.

If you need any inspiration on how to write tests with different libraries from react world (`react-redux`, `react-router`) you can always look at [Examples](https://github.com/kentcdodds/react-testing-library#examples) and [official documentation](https://testing-library.com/docs/intro).

<a name="browser-support"></a>

<a name="-1"></a>
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
