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
  
  