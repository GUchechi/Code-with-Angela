import './App.css';
import Card from './components/Card/Card';
import contacts from './components/Contact'


const createCard = (contact) =>{
  return (
    <Card 
      key={contact.name}
      name={contact.name}
      img={contact.imgURL}
      telephone={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return(
    <div>

     {contacts.map(createCard)}
    
     
    </div>
  );
}

export default App;
