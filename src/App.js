import './App.css';
import NumbersList from './NumbersList.js';

function Cya(props) {
    return <h1>Cya, from {props.someName}</h1>
}

const HelloMessage = (props) => <div>Hello, {props.name}!</div>

function Greeting(props) {
    return (
        <div>
        {props.isLoggedIn ? <HelloMessage name={props.name}/> : <Cya someName={props.name}/> }
        </div>
    )
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2); 
console.log(doubled); 
// [2, 4, 6, 8, 10]

fetch('https://api.github.com/users/k1r1L') .then((response) => response.json()) .then((myJson) => console.log(myJson)) .catch((myErr) => console.error(myErr));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Czech!~</h1>
        <ul>
          {numbers.map( num => {
            return <li key={num}>{num * 4}</li>
          })}
        </ul>
        <NumbersList numbers={numbers}/>
        <Greeting isLoggedIn={true} name="Crypto Jiri"/>
      </header>
    </div>
  );
}

export default App;