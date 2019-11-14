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
- create the card-list component and use props to transfer the properties value and also use props.children to get the node value

```js
import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
    return <div className='card-list'>{props.children}</div>;
};
```
- apply css to the card-list which use display gird and divided the screen into four columns
```css
.card-list {
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
```
- in the main app, transfer the result of the Rest API
```js
<CardList>
    {this.state.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
    ))}
</CardList>
```

### 29. Card Component
- the monster data is further moved into the card component
- the card-list component become just a container to hold the card components
- create the card component and add the image to it
```js
import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />}
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
);
```
- add the monster information to Card through props
```js
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster=> (
            <Card key={monster.id} monster={monster}></Card>
        ))}
    </div>
);
```
- add the css style for the Card component
```css
.card-container {
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
  }
  
  .card-container:hover {
    transform: scale(1.05);
  }
```

### 30. Exercise: Breaking into Components
- why need to break?
- for re-use and the 1st rule, decide on component
- to place the component into different locations
- 

### 31. State vs Props
- state maybe passed into components as a props
- state pass down to components
- state usually lives in the root component, i.e. the App

### 32. SearchField State
- introduce search box
- need to create the handler function for the on change event of the input box
- please note that the setState is async function and if console.log immediately after the setState, you won't be able to notice the change in the state, you need to pass a callback function which will be trigger once the setState is completed.
```js
  search = (e) => {
    this.setState({searchField: e.target.value}, () => console.log(this.state));
  }
```
- search box, need to pass the search function through props
```js
export const SearchBox = props => (
    <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={props.onSearchChange}
    />
)
```

### 33. React Event
- onChange is JSX event, not pure HTML, JavaScript event

### 34. Filter State
- we will not modify the monster array
- but we will create another array perform the filtering in the render function
- when the input box value is changed, setState will be called and change the searchField state, and it will trigger the rendering
```js
const filterMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));
```

### 35. Optional: filter(), includes()
- refer to the Appendix 1: Key Developer

### 36. SearchBox Component
- refer to the 32. SearchField State
- just apply the css to the search input box
```css
.search {
    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 150px;
    line-height: 30px;
    margin-bottom: 30px;
  }
```

### 37. where to put state
- why not put state in the SearchBox component but use the function passed from parent
- it's because state data could be only flow from oneway down from the parent, so the state should be in the root parent

### 38. Class methods and arrow functions
- this refer to the current object context
- if just create a function without using arrow =>, the this will not refer to the current object
```js
handleChange(e) {
    this.setState({searchField: e.target.value}); // error cannot find setState
}
```
- if using arrow to create the function, this could be correctly binded or need to use bind function in constructor
```js
this.handleChange = this.handleChange.bind(this);

handleChange = (e) => {
    this.setState({searchField: e.target.value}, () => console.log(this.state));
}
```

### 39. Exercise: Event Binding
```jsx
handleClick1() {
    console.log('handle click1')
}
this.handleClick2 = this.handleClick1.bind(this);
handleClick3 = () => console.log("handle click3");

<button onClick={this.handleClick1()} >click 1</button> // immediately triggerred, click no response
<button onClick={this.handleClick1} >click 2</button> // click1
<button onClick={this.handleClick2} >click 3</button> // click1
<button onClick={this.handleClick3} >click 4</button> // click3
```

### 40. Quick Note: Binding in React
- a good rule of thumb is to use arrow functions on any class methods you define and which is not part of React

### 41. Optional: Git + Github
- refer to Appendix 1: Key Developer Concepts

### 42. Optional: Connecting With SSH To Github

### 43. Deploying the App
- need to add the google font in the index.html
```js
<link href="https://fonts.googleapis.com/css?family=Bigelow+Rules&display=swap" rel="stylesheet" />
```
- add the font to the tag
```js
.App > h1 {
  font-family: 'Bigelow Rules';
  font-size: 72px;
  color: #0ccac4;
}
```
- add the background in index.css
```js
  background: linear-gradient(
    to left,
    rgba(7,27,82,1) 0%,
    rgba(0,128,128,1) 100%
  )
```

