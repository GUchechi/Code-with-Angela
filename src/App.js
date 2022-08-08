import './App.css';

function App() {
  const name = 'Angela'
  const number = 7

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>
  );
}

export default App;
