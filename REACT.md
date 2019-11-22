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
- use yarn to add github pages
- run the command: yarn add gh-pages
- need to add some settings to the package.json
```json
in root
"homepage": "https://quantificial.github.io/demo-react-monsters",
under script
    "predeploy": "yarn build",
    "deploy" : "gh-pages -d build"
```
- and then run yarn deploy
- the gitpage will be uploaded to github in another branch

### 44. React and ReactDOM
- create simple html and add div id="root"
- include the react and react-dom js library
- need to create a index.js and render the react component to the id="root"
- if we don't use JSX, we need to use React.createElement
```js
<div id="root">not rendered!</div>
<script>
  const App = () => {
    return React.createElement(
      'div', {}, React.createElement('hi', {}, 'REACT IS RENDERED!!!')
    );
  };

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
</script>
```

### 45. Latest React Package Update
- inside package.json
- highlight the version number, it will show the latest version
- also put '^' in front of the version number, the package manager will automatically upgrade the package to use the latest version
- run 'yarn upgrade' to update the package
- yarn.lock is the locked version of each packages, to show the actual version used
- for npm, we can use 'npm update'
- to check the version
  - yarn list react react-dom react-scripts
  - npm list react react-dom react-scripts
  - to fix bug, use 'npm audit fix'

### 46. Revisting VirtualDOM + Unidirectional Data Flow
- dom is parent-child relationships
- React copy actual dom to virtual dom
- React and then copy the virtual dom to another copy of the virtual dom
- React will diff the change and apply the change to actual dom
- enable the chrome Rendering - Paint Flashing to check what components have been update
- Actions -> Update State -> Trigger Views Rendering
- Input in the views -> Trigger Action -> Update State -> ... (it is a loop)


### 47. Asynchronous setState
- refer to the project demo-react-asyn-state
- setState is asycnronize function
- console.log just after the setState could not show the required value
- if it needed to use the callback function in the setState function
```js
  handleClick = (e) => {
    let count = this.state.meaningOfLife;
    this.setState({meaningOfLife: count + 1}, () => {console.log(this.state.meaningOfLife)}); // console log correct
    console.log(this.state.meaningOfLife); // console log not correct
  }
```
- best practise is to use function to update state
```js
    ReactDOM.render(<App increment={2} />, document.getElementById('root'));

    this.setState((prevState, prevProps) => {
      return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
    },
      () => {console.log(this.state.meaningOfLife)}
    )
```

### 48. introducing lifecycle methods
- refer to the project https://github.com/quantificial/lifecycles-lesson

### 49. React Lifecycle methods - Mounting
- mounting phase
- updating phase
- unmounting phase

### 50. React Lifecycle methods - Updating
- new state value pass into components
- it will trigger the lifecycle method in update phase
- this.foreUpdate() is used to force update the component
- when the component is re-render, all its child will get render
- if shouldComponentUpdate return true, it will trigger updating process
- if it return false, the rendering process will not be trigger
- it is mainly for performance issue
```js
 shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
 }
```

### 50. React Lifecycle methods - Unmounting
- unmounting phase React will call componentWillUnmount

### 51. When should we use a functional component vs a class component?
- quiz

### 52. Section Review


### 53. the long road ahead
- build e-commerce website

### 54. Project Overview
- follow the pdf link to clone the project 

### 58. E-commerce Homepage + SASS setup
- refer to the project - demo-react-clothing
- define the layout of the clothing website
- contain the homepage and then directory menu and then menu item
- need to define the className for the css styling
- introducing the sass
- use **yarn add node-sass** to add sass component
- need to use the .scss instead of .sass

### 59. Project Files + Modules
- introduce node_modules
- the lib dependencies issues

### 60. Project Component Architecture
- look at the components folder and see how they are connected


### 61. CSS and SCSS files


### 62. Homepage and Directory Components
- create components and pages
- the menu-item, props are passed through value and the assigned the backgroundImage to each of the item
- additional 'size' information is used to control the image height through the scss setting
```js
const MenuItem = ({title, imageUrl, size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>    
)

under .menu-item, => meaning class='menu-item large'
    &.large {
        height: 380px;
    }
```

### 63. Styling Menu Items
- many styling concept
```css
.menu-item {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px; 
    overflow: hidden; /* overflow area will not be shown due to transform scale*/

    &:hover { /* when hover*/
      cursor: pointer;
      & .background-image { /* menu-item:hover .background-image */
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      }

      & .content { /* .menu-item:hover .content */
        opacity: 0.9;
      }
    }

  }
```
- move the background image into a new div tag to manage the transformation
```js
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} >

        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>   
```

### 64. Routing in React
- use react-router

### 65. Routing in Our Project
- yarn add react-router-dom
- in index.js add import {BrowserRouter} from 'react-router-dom';
```js
wrap the '<App />' by the <BrowserRouter>

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
```
- and then add route in the App function
```js
function App() {
  return (
    <div >
      <Route exact={true} path='/' component={HomePage} />
      <Route exact={true} path='/hats' component={HatsPage} />
    </div>
  );
}
```
- add switch to only render one of the component

### 66. React Router Dom
- react route example
- refer to the react-router-demo
- console.log for the props of the component to find out the route properties
  - history
  - location
  - match
```js

        <Route path='/' component={HomePage} />
        <Route path='/topics' component={TopicsList} />
        <Route path='/topics/:topicsId' component={TopicDetail} />
```
- to show the url parameters
```js
const TopicDetail = (props) => {
  console.log('topics details', props)
  return (
    <div>
      <h1>topics details: {props.match.params.topicsId}</h1>
    </div>
  )
}
```
- use link to route
```js
<link to='/topics'>Topics</Link>
```
- dynamic to build the link
```js
<Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
```

### 67 withRouter()
- basic natvigation setup
- powerup the MenuItem with the higher order function withRouter, such that it could access the history, match properties, and no need to pass from the parent
- and then use onClick function to trigger the redirect by call history.push
```js
import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} >

        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>    
)

export default withRouter(MenuItem);
```

### 68. Shopping Data


### 69. Shop Page
- create the shop page to display the collection items
- collection data is stored in a js file and import SHOP_DATA from './shop.data'
- in the shop page, loop the collections and then use new component CollectionPreview to display the items
```js
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
            {
                collections
                .map(({id, ...otherCollectionProps}) => { // pass the collection data in quicker way
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    )
                })
            }
            </div>
        )
    }
```
- create the CollectionPreview component and get the items and loop through the items to display only 4 items
```js
const CollectionPreview = ({title, items}) => { // we only need the title and items data
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item,idx) => idx < 4) // only to show 4 items
                    .map((item)=> (
                        <div key={item.id}>{item.name}</div>
                    ))
                }

            </div>
        </div>
    )
}
```

### 70. Collection Item
- add collection item, similarly, the props are passed from the parent, CollectionPreview
```js
const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ 
        backgroundImage: `url(${imageUrl})` 
      }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
```
- collection preview change
```js
<div className='preview'>
    {
        items
        .filter((item,idx) => idx < 4) // only to show 4 items
        .map(({id, ...otherItemProps})=> (
            <CollectionItem key={id} {...otherItemProps} />
        ))
    }

</div>
```
- for ths styling, flex box is mainly used.
- collection preview is a flex container and in column direction
- justify-content: space-between is used for adjust the position of each items

### 71. Header Component
- header component is added in the app component and before the router switch
```js
function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
```
- simple functional component, use flex box to control the position
- the logic is SVG format and import as ReactComponent
```js
const Header = (props) => {
    return (
        <div className='header'>
            <Link className='logo-containers' to='/'> 
                <Logo className='logo' />
            </Link>
            <div className='options'> // justify-content: flex-end; display: flex;
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}
```

### 72. Importing SVG in React
- new syntax for import SVG
```js
import {ReactComponent as logo} from 'logo.svg';
```

### 73. Introducing Forms in React
- need to design how to re-use components
- need to think carefully where the state lives

### 74. Sign in Component
- develop the sign in page
- develop the sign-in component
- sign in and sign up page is just used to display the component
```js
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
)
```
- sign in component for user to input the email and password
- need to define the change handler for the input and submit handler

### 75. Form input component
- create a custom input component
- label is absolute position and will sit on the input area
- but when it's focus or have value, it will shrink and move top as an effect
```js
const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) : null
        }
    </div>
)
```

```css
@mixin shrinkLabel {
  top: -14px;
  font-size: 12px;
  color: $main-color;
}
```

### 76. Custom Button Component
- create the custom button and it is a simple functional component
```js
const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}
```
- to use it
```js
<CustomButton type='submit'>Sign In</CustomButton>
```

### 77. Firebase + User Authentication

### 78. Firebase Introduction
- database
- authentication
- server

### 79. adding a project to firebase
- login to the console and create the project
- copy the firebase configuration
- and then use yarn add firebase

### 80. note about github

### 81. google sign in authentication
- enable google authentication
- setup the firebase auth environment

```js
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
```
- add button
```js
<CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
```

### 82. cloning from this point on

### 83. Google Sign In Authentication 2
- to get the login user information and set the state
- change the App component become class component
- set the callback function onAuthStateChanged
- and also set the unsubscribeFormAuth
```js
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
```
### 85. google sign in authentication 3
- build the sign in and sign out part
- build the sign out button on the header
```js
<div className='options'>
    <Link className='option' to='/shop'>
        SHOP
    </Link>
    <Link className='option' to='/shop'>
        CONTACT
    </Link>
    {
        currentUser ?
        <div className='option' onClick={()=> auth.signOut()}>
            SIGN OUT
        </div> : 
        <Link className='option' to='/signin'>SIGN IN</Link>
    }
</div>
```
- modify the custom button to allow to have a flag isGoogleSignIn button
```html
<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>

// so in the custom button to check the flag and insert the google-sign-in class
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
```
- define the style
```css
    &.google-sign-in {
        background-color: #4285f4;
        color: white;
        
        &:hover {
            background-color: #357ae8;
            border: none;
        }
    }
```
- fix the box sizing issue
```js
* {
    box-sizing: border-box;
}
```

### 86. firebae firestore
- introduce the firestore which is nosql database
- collection(users) => user => collection(cartItem) => item
```js
firestore.collection('users').doc('xxxx').collection('cartItem').doc('xxxx');
firestore.doc('/users/xxxx/cartItems/xxxxx');
firestore.collection('/users');
```

### 87. optional: sync await

### 88. storig user data in firebase
- create a function to get the data from firebase and check whether the user exists or not
- if it it not exist, we can create the user
```js
//in app.js
  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });

      createUserProfileDocument(user)
      //console.log(user);
    });
  }

// in the firebase util
// it is an async function
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; // exit
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating users', error.message);
        }
    }

    return userRef;
}
```

### 89. storing user data in our app
- get the snapshot data through the following function and then set to the state
- use onSnapshot
```js
  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: userAuth });

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data())
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state)})
        })
      }

      this.setState({
        currentUser: userAuth
      }, () => {console.log('???', this.state)})


    });
  }
```

### 90. sign up component
- create sign up component
- similar to sign in component but we need to use firebase API to create the user
```js
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmedPassword} = this.state;
        if(password !== confirmedPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName} )

        }catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
```

### Sign Up With Email and Password
- add sign up component to the sign up and sign in page
```js
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)
```
- with correct styling
```css
.sign-in-and-sign-up {
    display: flex;
    width: 850px;
    justify-content: space-between;
    margin: 30px auto;
}
```

### 92. sign in with email and password
- need to finish the onSubmit 
```js
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error) {
            console.log(error)
        }
    }
```

### 93. section reivew


### 95. Redux Introduction
- traditional react app contains state in different component and it will become very difficult to manage
- redux solve this problem and provide a single massive state for each component to access and update

### 96. Redux Concept
- single source of truth
- state is read only
- changes using pure function

- Action(such as click) => Root Reducer(it's a pure function) => Store (state) => Dom Changes

- Flux Pattern
  - Action => Dispatcher => Store => View
- MVC Pattern
  - Action => Controller => Many Many Model <>=> Many Many Views

### 96. Redux in our application
- original , all state in the top component
- the problem is, for example, cart component require the current user state, so the current user must be passed through from the top App component and then through the header component, however, header does not require the current user.
- drilling down props pattern is the bad pattern


### 97. Relux Actions and Reducers
- different components => generate Actions
- Actions => update different Reducer states ( slice of state)
- Slice of state combine to form the Root Reducer
- the Root Reducer will be passed into different components
- components fire action -> SET_CURRENT_USER
- the payload maybe {type: string, payload: any}
- => update the user reducer with the pay load


### 98. Setting Up Redux 1
- install redux
- yarn add redux redux-logger react-redux
- create the userRedux
```js
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
```
- and then combine in the root reduer
```js
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
export default combineReducers({
    user: userReducer,
})
```

### 100 setup up redux 2
- create the store from root reducer
```js
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
```
- and then add the store to the provider
```js
//index.js

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
```
- create the set user action
```js
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});
```
### 101. connect and MapStateToProps
### 102. mapDispatchToProps

- to pass the root reducer state to the components as props
- mapStateToProps is used to pass the state from root reducer to the components props
```js
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
```

- to fire the action and set the state to the reducer
- mapDispatchToProps is to map the dispatch function to the component which will set the state and fire the action
```js
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
```

```js
const {setCurrentUser} = this.props;

// fire action
setCurrentUser({
  currentUser : {
    id: snapShot.id,
    ...snapShot.data()
  }
```