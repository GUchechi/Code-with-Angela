import './App.css';
import Card from './components/Card/Card';
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
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        telephone="+123 456 789"
        email="b@beyonce.com"

     />
    </div>
  );
}

export default App;
