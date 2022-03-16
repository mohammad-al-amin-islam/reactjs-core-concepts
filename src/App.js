import logo from './logo.svg';
import './App.css';

const number = 5555;
const names = [
  { name: 'Dynamicly Added Name' },
  { name: 'This is 2' }
]

const nameStyle = {
  color: 'blue',
  backgroundColor: 'white',
  padding: '20px'
}

function App() {
  const peoples = ['abul', 'babul', 'sabul', 'kabul']
  return (
    <div className="App">
      {/* {
        peoples.map(people => <li>{people}</li>)
      }
      {
        peoples.map(people => <Person name={people}></Person>)
      } */}
      {
        names.map(name => <Person name={name.name}></Person>)
      }

      {/* <Person name={peoples[0]} age="23"></Person>
      <Person name={peoples[1]} age="24"></Person>
      <Person name={peoples[2]} age="25"></Person> */}
      <h1>I can also write Between them</h1>
      <Person2 books="Bela furabar age"></Person2>
      <Person2 books="Ebar vinno kichu hok"></Person2>
    </div>
  );
}
function Person(props) {
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}
function Person2(props) {
  return (
    <div className='container'>
      <h1>{props.books}</h1>
      <p>Type: Books</p>
    </div>
  )
}

export default App;
