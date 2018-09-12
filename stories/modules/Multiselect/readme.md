
# Multiple selection Module

## Example
```jsx
{
  name: 'multiselect',
  type: 'multiselect',
  ignoreOrder: false,
  options: [
    { id: 'A', caption: 'Option 1', hint: 'Option 1' },
    { id: 'b', caption: 'Option 2', hint: 'Option 1' },
    { id: '3', caption: 'Option 2', hint: 'Option 1' },
    {
      id: 'IV',
      caption: 'Option 4 with long text',
      hint: 'Option 4 with long text',
    },
  ]
}
```

## Select properties

| Property       | type           | Required | Default | description  |
| -------------- | -------------- | -------- | --------| ------------ |
| *type*         | `select`       | true     | -       | module type  |
| *name*         | string         | true     | -       | module name  |
| *columns*      | `2`, `3`       | false    | `2`     | number of columns  |
| *options*      | `[ { id, caption, hint }, { id, caption, hint }... ]`   | true   | -     | array of options   |
| *readOnly*     | boolean        | false    | -       | read only    |
| *order*        | boolean        | false    | -       | consider the order of answers  |
| *[validation](https://gemsorg.github.io/gems-components/?selectedKind=Form%20Builder&selectedStory=Validation)*  | validtion | - | - | validation rules |

## Playground
