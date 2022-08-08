import './App.css';

function App() {
  const fName = 'Angela Yu'
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="App">
      <h1>Created by {fName}</h1>
      <p>CopyRight {year}</p>

    </div>
  );
}

export default App;
