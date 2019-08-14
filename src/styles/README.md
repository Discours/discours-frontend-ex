# Вёрстка Дискурса

### Переменные

Для обозначение переменных используется [css-custom-properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*). Список всех переменных можно глянуть в [src/styles/themes/default.css](./themes/default.css). Цвета используем только через переменные, так как у нас есть чёрная тема!

Для media queries используется [css-custom-media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media). Список переменных можно глянуть в [src/styles/breakpoints.orig.js](./breakpoints.orig.js).

### Композиция

Для постороения интерфейса используется композиция компонентов из нашего `discours-ui-kit`, каждый из которых имеют свою ответственность.

Например, всё, что касается типографики, находится в `src/components/discours-ui-kit/Typography`, кнопок и ссылок - `src/components/discours-ui-kit/Button`. Если у нас появляется новый тип кнопки - его надо добавить в `Button`. Таким образом, мы потом можем переиспользовать эти кусочки интерфейса в дальнейшем.

### Размеры

Для margins/paddings используются только rem единицы измерения. `1rem` сейчас равен `18px`.

Для указания размера границ эл-тов есть две переменные: `--border-width-regular` и `--border-width-bold`.

### CCS модули

В проекте используется [css modules](https://frontender.info/css-modules-part-1-need/) для изоляции стилей. CSS-модули — это:

> CSS-файлы, в которых все классы и анимации по умолчанию находятся в локальной области видимости.

То есть все классы, что мы пишем в `.css` файлах компонента имеют уникальное имя, доступное толко из этого компонента.

Для именования классов используется БЭМ, но без буквы "Б", так как имя блока в класс нам добавят css модули.

То есть, у нас есть компонент `Button/Button.tsx`

```typescript
<button>Кнопочка</button>
```

Если мы захотим ей добавить лёгкий контейнер - мы просто создадим класс `container__light` в `Button/Button.css`. И добавим в наш компонент:

```typescript
import classes from "./Button.css";
<button className={classes.container__light}>Кнопочка</button>;
```

При сборке проекта этот класс преорбазуется в `Button__container__light`, что гарантирует нам уникальность в проекте.

### Префиксы

Мы не пишем браузерные префиксы в наших стилях, так как у нас есть [postcss](https://github.com/postcss/postcss) и [autoprefixer](https://github.com/postcss/autoprefixer).
