import './styles/style.css'
// import javascriptLogo from '../javascript.svg'
console.log('Hello there Vanilla JS Project')
// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Hello Renton!</h1>
//     <div>
// <h4>my card </h4>
//     </div>

//   </div>

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting! (via index.js...)'

// Append heading node to the DOM
const app = document.querySelector('#demo')
app.append(heading)
