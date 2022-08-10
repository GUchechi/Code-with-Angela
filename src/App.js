import './App.css';
import Card from './components/Card/Card';
import contacts from './components/Contact'
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Note from './components/Note';

function App() {
  return(
    <div>
     {/* <Header />
     <Note />
     <Footer /> */} 

     <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
