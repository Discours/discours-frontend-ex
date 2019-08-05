Кнопка (а так же ссылка)

- Если получает параметр `to` - становится ссылкой (`<a>` элемент).
- Если нет - становится кнопкой (`<button>`).

Визуально различий кнопки от ссылки нет — любое визуальное отображение этого компонента может быть как кнопкой, так и ссылкой.

Данный компонент не берёт на себя ответственность за типографику. То есть, если нам нужна ссылка стиля `link-background` с наклонным шрифтом, мы используем

```typescript
<Button variant="link-background">
  <Typography variant="italics">Текст</Typography>
</Button>
```

Компонент `Button` без `Typography` _не используется_!

### Стили кнопок

- `link-regular` (при наведении выглядит как link-underline)

![link-regular](./examples/link-regular.png)

![link-regular-hover](./examples/link-underline.png)
_наведение_

- `link-regular-fat` (такая же, только с более жирным выделением)

![link-regular-fat](./examples/link-regular-fat.png)

![link-regular-fat-hover](./examples/link-regular-fat-hover.png)
_наведение_

- `link-regular inverse` (такая же, но с тегом `inverse`)

![link-regular-inverse](./examples/link-regular-inverse.png)
![link-regular-inverse-hover](./examples/link-regular-inverse-hover.png)
_наведение_

- `link-underline` (имеет анимацию появления фона с низу наверх)

![link-underline](./examples/link-underline.png)
![link-underline-hover](./examples/link-underline-hover.png)
_наведение_

- `link-background`

![link-background](./examples/link-background.png)
![link-background-hover](./examples/link-background-hover.png)
_наведение_

- `link-background inverse` (такая же, но с тегом `inverse`)

![link-background-inverse](./examples/link-background-inverse.png)
![link-background-inverse-hover](./examples/link-background-inverse-hover.png)
_наведение_

- `button-regular`

![button-regular](./examples/button-regular.png)
![button-regular-hover](./examples/button-regular-hover.png)
_наведение_

- `button-primary` (не плохо было бы сделать стиль при наведении)

![button-primary](./examples/button-primary.png)

- `button-fat`

![button-fat](./examples/button-fat.png)
![button-fat-hover](./examples/button-fat-hover.png)
_наведение_

- `button-corner` (не плохо было бы сделать стиль при наведении)

![button-corner](./examples/button-corner.png)

- `button-corner-left`

![button-corner-left](./examples/button-corner-left.png)
![button-corner-left](./examples/button-corner-left-hover.png)
_наведение_

- `button-corner-right` (при наведении ведет себя как `button-corner-left`)

![button-corner-right](./examples/button-corner-right.png)
