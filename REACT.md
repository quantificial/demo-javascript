## Complete React Developer in 2020

### 4. React Concept

simple introduction to react

### 5. The Birth of React.js

Introdcution to html, css, js

SPA => use more JS to manage DOM

AngularJS => managed by Google

But things get more complex and it becomes harder and harder to maintain as there are many components in the web application. It is really difficult to manage the relationships between each components. As each of the components affect each others.

In 2014, google decided to re-write AngularJS and a lot of people moved to React

### 6. Declarative vs Imperative
Why react is good. There are four points.

1) Don't touch the DOM, no directly manuipulating the DOM, imperative => you directly change individual parts of your app in response, the drawback is difficult to see the relationships between events and all these edge case. React uses more declarative approach. You define the JavaScript object and React will take care of it and use it to render the page. i.e. use the state to update the pages.

### 7. Component Architecture
2) Build webiste like lego blocks. Build the components and put them together. Based on the state and the components built and then add to the page.

### 8. One Way Data Flow
3) State => It's JavaScript Object. Components => JSX. React takes State and JSX to create the VirtualDOM. And React will diff the VirtualDOM and the DOM to update the actual DOM. The flow should be someone click the button and update the state, React will take the state and components to update the VirtualDOM and finally reflected in the actual DOM. One Way Data Flow => State Changed, the State will transfer down to other child components. We only focus on each component.

### 9. UI Library
4) UI, Frameowork, for example, AngularJS is kind of a whole kitchen. React, on the other hand, only care about the components and virtual DOM. You can use other libraries to mix.

### 10. How to Be a Great React Developer
Keywords: Declarative, JSX, State, Props, Components, VirtualDOM

1) Decide on Components
2) Decide the State and where it lives
3) What changes when State changes

### 11. Section Review
create react app

`npx create-react-app my-app`

or use codesandbox

### 12. Environment Setup for Mac
- install visual code studio
- install nvm and run nvm install latest

### 13. Environment Setup for Windows
- install yarn
- or use choco to install yarn

### 14. NPM vs YARN
- npm install = yarn
- npm install package --save = yarn add package
- npm install package --save-dev = yarn add package --dev
- npm uninstall package --save = yarn remove package
- npm update --save = yarn upgrade
- npm install package -g = yarn global add package

### 15. VSCode Font and Settings
- Operator Mono Lig
- Install extension snazzy operator to enable the cursive
- Useful Extension
  - Rainbow Brackets
  - Reactjs code snippets
  - Snazzy Operator
  - vscode-icons
  - vscode-styled-component
  - Auto Close Tag
  - Babel ES6/ES7
  - Bittersweet Theme
  - ESLint
  - GraphQL
  - Markdown All in one
  - Path Intellisense
  - Prettier - Code formatter

### 16. Create React App
- use create-react-app demo-react-monster

### 17. Create React App 2
- refer to the demo-react-monster app

### 18. React Project Setup
- refer to the demo-react-monster app
- npm run build to build for the production ready files
- talk about babel to convert JavaScript
- talk about webpack to bundle all the files
- 

### 19. Don't eject
- yarn eject the react app and get the build script, webpack script...
- but it is suggested not to do that

### 20. Class Components
- use class instead of function
- class App extends Components and then define the render function with return of JSX
- introduce constructor() and also call super() call the parent constructor
- introduce the state which should be set inside constructor

```js
this.state = {
    string : "hello"
}
```
- introduce the setState through button
```js
    <button onClick={()=> this.setState({string:'change'})}> change </button>
```

### 21. Thinking in JSX
- css class become className
- JSX variable enclosed by {}

### 22. Dynamic Content
- set array in state
```js
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        },
      ]
    }
```
- use map to render the array and need to set **key** such that React knows what element is used and changed
```js
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
```

### 23. Optional: map() + key attribute
- whenever use map function inside of render or have list of same JSX element, it is required to set the **key** attribute

### 24. Single Page Application
- what is extends Component
- it's React.Component
- it's to use render function etc... 
- SPA is good to call different servers API through JavaScript and it is very dynamic

### 25. Fetching Content
- introduce the fetch function to call Rest API
- introduce componentDidMount which is a function that will be called when the component is mounted to the page
```js
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters: users}))
  }
```

### 26. Optional: Promises
- refer to Appendix 1: Key Developer Concepts

### 27. Architecting Our App
- React component could be built by using function
```js
import React from 'react'
import './search-box.styles.css';

export const SearchBox = props => (
    <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={props.onSearchChange}
    />
)
```
- talk about how to organize the code
- create folder components and then component-name
  - components
    - search-box
      - search-box.components.jsx
      - search-box.styles.css

### 28. Card List Component
- objective is to break down the functionality into many small piece of code, so called components
- 
