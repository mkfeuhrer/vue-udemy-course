# Vue Udemy Course

This repository contains code for projects built during vue course. Will update the readme with all the learning(section-wise).

## Section 4

- Conditional Rendering
- Using loops - different ways to access key,value,index
- Adding methods, data and manipulating them
- Learned about difference in v-if and v-show

## Section 5

- Vue instance
  - We can access vue instance from outside
  - We can have multiple instances
  - Inside one instance you can only access property of that particular instances
  - There shouldn't be any connection between instances.

## Section 9

- Slots
  - Used for component communication similar to props but can put html code in slot.
  - Useful when building reusable widgets like slides etc
  - Keep style in child when using slots to pass some content, although keeping it in parent will also work
  - We can use any vuejs code in parent component when using slots, like data property
  - We also have named slot if we want specific components within slot to be shown at different place.
  - We can have default content for slot if needed.
  - <component> is used to dynamic component rendering
  - component is destroyed and recreated when switching between dynamic components(Although we can override this behaviour though)

## Section 10

- Exercise: used props, slots, components and binding to styles.
