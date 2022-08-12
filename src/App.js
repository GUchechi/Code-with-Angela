import './App.css';
import Card from './components/Card/Card';
import contacts from './components/Contact'
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Note from './components/Note';


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
     {/* <Header />
     <Note />
     <Footer /> */} 

     {contacts.map(createCard)}
    
     
    </div>
  );
}

export default App;
